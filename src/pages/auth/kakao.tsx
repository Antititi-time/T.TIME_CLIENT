import { useRouter } from 'next/router';
import { getKakaoAccessToken, postKakaoAccessToken } from '@src/services';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
function KakaoAuth() {
  const { query, isReady } = useRouter();
  const [kakaoAccessToken, setKakaoAccessToken] = useState();
  const [dataStatus, setDatastatus] = useState(true);
  const authorization = String(query.code);

  const { data } = useQuery('kakao_token', () => getKakaoAccessToken(authorization), {
    enabled: !!isReady && !!dataStatus,
  });
  const userData = useQuery('accessToken', () => postKakaoAccessToken(kakaoAccessToken), {
    enabled: !!kakaoAccessToken,
  });

  useEffect(() => {
    if (data?.data.access_token != undefined) {
      setKakaoAccessToken(data.data.access_token);
      setDatastatus(false);
    }
  }, [kakaoAccessToken, data]);

  useEffect(() => {
    if (userData.data != undefined) {
      localStorage.setItem('accessToken', userData.data.accessToken);
      console.log(userData.data.accessToken);
    }
  });
  return <></>;
}
export default KakaoAuth;
