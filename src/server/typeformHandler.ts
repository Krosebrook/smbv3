import { Request, Response } from 'express';
import { getUncachableNotionClient } from '../utils/notion';
import { sendEmail } from '../utils/replitmail';

interface TypeformAnswer {
  field: {
    id: string;
    type: string;
    ref?: string;
  };
  type: string;
  text?: string;
  email?: string;
  number?: number;
  boolean?: boolean;
  choice?: {
    label: string;
  };
  url?: string;
}

interface TypeformWebhookPayload {
  event_id: string;
  event_type: string;
  form_response: {
    form_id: string;
    token: string;
    landed_at: string;
    submitted_at: string;
    answers: TypeformAnswer[];
    definition?: {
      fields: Array<{
        id: string;
        title: string;
        type: string;
        ref?: string;
      }>;
    };
  };
}

export async function handleTypeformWebhook(req: Request, res: Response) {
  try {
    const payload: TypeformWebhookPayload = req.body;
    
    if (!payload.form_response) {
      return res.status(400).json({ error: 'Invalid webhook payload' });
    }

    const { form_response } = payload;
    const answers = form_response.answers || [];

    const formattedAnswers: Record<string, any> = {};
    let userEmail = '';

    answers.forEach((answer) => {
      const fieldTitle = answer.field.ref || answer.field.id;
      
      if (answer.type === 'email' && answer.email) {
        formattedAnswers[fieldTitle] = answer.email;
        userEmail = answer.email;
      } else if (answer.type === 'text' && answer.text) {
        formattedAnswers[fieldTitle] = answer.text;
      } else if (answer.type === 'number' && answer.number !== undefined) {
        formattedAnswers[fieldTitle] = answer.number;
      } else if (answer.type === 'boolean' && answer.boolean !== undefined) {
        formattedAnswers[fieldTitle] = answer.boolean;
      } else if (answer.type === 'choice' && answer.choice) {
        formattedAnswers[fieldTitle] = answer.choice.label;
      } else if (answer.type === 'url' && answer.url) {
        formattedAnswers[fieldTitle] = answer.url;
      }
    });

    await saveToNotion(formattedAnswers, form_response.submitted_at);

    if (userEmail || process.env.NOTIFICATION_EMAIL) {
      await sendNotificationEmail(formattedAnswers, userEmail);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Form response processed successfully' 
    });

  } catch (error) {
    console.error('Error processing Typeform webhook:', error);
    res.status(500).json({ 
      error: 'Failed to process webhook',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

async function saveToNotion(answers: Record<string, any>, submittedAt: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    console.warn('NOTION_DATABASE_ID not set, skipping Notion save');
    return;
  }

  const notion = await getUncachableNotionClient();

  const properties: Record<string, any> = {
    'Submitted At': {
      date: {
        start: submittedAt,
      },
    },
  };

  Object.entries(answers).forEach(([key, value]) => {
    if (typeof value === 'string') {
      properties[key] = {
        rich_text: [
          {
            text: {
              content: value,
            },
          },
        ],
      };
    } else if (typeof value === 'number') {
      properties[key] = {
        number: value,
      };
    } else if (typeof value === 'boolean') {
      properties[key] = {
        checkbox: value,
      };
    }
  });

  await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties,
  });
}

async function sendNotificationEmail(answers: Record<string, any>, userEmail: string) {
  const notificationEmail = process.env.NOTIFICATION_EMAIL;
  
  if (!notificationEmail) {
    console.warn('NOTIFICATION_EMAIL not set, skipping email notification');
    return;
  }

  const answersText = Object.entries(answers)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  const emailContent = `
New form submission received from SoleMuchBetter website!

Form Details:
${answersText}

${userEmail ? `Submitted by: ${userEmail}` : ''}

---
This is an automated notification from your SoleMuchBetter integration.
  `.trim();

  await sendEmail({
    to: notificationEmail,
    subject: 'New Form Submission - SoleMuchBetter',
    text: emailContent,
  });

  if (userEmail && userEmail !== notificationEmail) {
    await sendEmail({
      to: userEmail,
      subject: 'Thank you for your submission - SoleMuchBetter',
      text: `Thank you for submitting the form! We've received your information and will get back to you soon.\n\nBest regards,\nSoleMuchBetter Team`,
    });
  }
}
