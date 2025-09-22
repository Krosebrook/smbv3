const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SoleMuchBetter Branding Solutions",
    "url": "https://solemuchbetter.com",
    "logo": "https://solemuchbetter.com/assets/brand-logo.png",
    "description": "Women-owned company delivering distinctive high-impact merchandise that elevates your brand beyond the norm. Custom promotional products, corporate gifting, and branding solutions.",
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "SoleMuchBetter Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-SOLE-BETTER",
      "contactType": "customer service",
      "email": "hello@solemuchbetter.com"
    },
    "sameAs": [
      "https://linkedin.com/company/solemuchbetter",
      "https://twitter.com/solemuchbetter"
    ]
  };

  const servicesData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Branding Solutions",
    "provider": {
      "@type": "Organization",
      "name": "SoleMuchBetter Branding Solutions"
    },
    "serviceType": "Corporate Branding and Promotional Products",
    "description": "Custom branded products, corporate gifting solutions, uniform programs, and promotional merchandise services.",
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Branding Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Branded Products"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Gifting Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Uniform Programs"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesData)
        }}
      />
    </>
  );
};

export default StructuredData;