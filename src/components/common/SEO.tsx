import Head from 'next/head';

function SEO() {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="T.time | 팀과 내가 함께 성장하는 시간" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="T.time" />
      <meta property="og:title" content="T.time" />
      <meta property="og:description" content="T.time | 팀과 내가 함께 성장하는 시간" />
      <meta property="og:image" content="/assets/images/img_thumbnail.png" />
      <meta property="og:url" content="https://t-time-client.vercel.app/" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" id="viewportMeta" />
    </Head>
  );
}

export default SEO;
