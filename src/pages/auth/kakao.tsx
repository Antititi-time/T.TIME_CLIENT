import { useRouter } from 'next/router';
import { getKakaoAccessToken } from '@src/services';
function KakaoAuth() {
  const router = useRouter();

  const authorization = String(router.query.code);

  if (authorization != 'undefined') {
    getKakaoAccessToken(authorization);
  }

  return <div></div>;
}
export default KakaoAuth;
