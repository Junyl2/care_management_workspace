'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { siteMeta, pageMeta } from '@/lib/seo.config';

export const Seo = () => {
  const path = usePathname();
  const meta = pageMeta[path as keyof typeof pageMeta] ?? {
    title: siteMeta.defaultTitle,
    description: siteMeta.defaultDescription,
  };

  const fullUrl = `${siteMeta.siteUrl}${path}`;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={siteMeta.type} />
      <meta property="og:locale" content={siteMeta.locale} />
      <meta property="og:site_name" content={siteMeta.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:site" content={siteMeta.twitterHandle} />
    </Head>
  );
};
