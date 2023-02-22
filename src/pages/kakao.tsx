import { useRouter } from 'next/router';
function KakaoAuth() {
  const router = useRouter();

  const authorization = router.query.code;
  console.log(authorization);
  return <div></div>;
}
export default KakaoAuth;
