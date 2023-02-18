import { useRouter } from 'next/router';

function Google() {
  const router = useRouter();
  const url = router.asPath;
  const code = url?.split('#access_token=')[1]?.split('&')[0];
  console.log(code);
  return <div></div>;
}

export default Google;
