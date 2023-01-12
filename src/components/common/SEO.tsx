import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title: string;
}

function SEO({ title }: SEOProps) {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="T.time" />
      <meta property="og:title" content="T.time" />
      <meta property="og:description" content="T.time | 팀과 내가 함께 성장하는 시간" />
      <meta property="og:image" content="/img_thumbnail.png" />
      <meta property="og:url" content={`https://t-time-client.vercel.app/${router.asPath}`} />
      <meta property="og:locale" content="ko_KR" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" id="viewportMeta" />
    </Head>
  );
}

export default SEO;
