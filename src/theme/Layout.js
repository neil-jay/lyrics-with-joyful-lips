import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "With Joyful Lips Lyrics",
            "url": "https://withjoyfullipslyrics.neiljay.com",
          })
        }}
      />
      <Layout {...props} />
    </>
  );
}