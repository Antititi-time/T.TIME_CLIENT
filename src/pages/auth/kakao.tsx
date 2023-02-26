import { useRouter } from 'next/router';
import { getKakaoAccessToken } from '@src/services';
import { prevPathState } from '@src/atoms/login';
import { useEffect } from 'react';
function KakaoAuth() {
  const router = useRouter();

  const authorization = String(router.query.code);
  console.log(prevPathState);
  useEffect(() => {
    if (authorization != 'undefined') {
      getKakaoAccessToken(authorization);
    }
  }, [authorization]);

  return <div></div>;
}
export default KakaoAuth;
