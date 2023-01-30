import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
}

function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="T.time" />
      <meta property="og:title" content="T.time" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/img_thumbnail.png" />
      <meta property="og:url" content="https://t-time.vercel.app/" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" id="viewportMeta" />
    </Head>
  );
}

export default SEO;
