import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { handleTypeformWebhook } from './typeformHandler';

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' });
});

app.post('/api/webhooks/typeform', handleTypeformWebhook);

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
