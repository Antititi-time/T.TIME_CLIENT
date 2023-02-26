import { useRouter } from 'next/router';
import { getKakaoAccessToken } from '@src/services';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
function KakaoAuth() {
  const { query, isReady } = useRouter();
  const [accessToken, setAccessToken] = useState();
  const [dataStatus, setDatastatus] = useState(true);
  const authorization = String(query.code);

  const { data } = useQuery('access_token', () => getKakaoAccessToken(authorization), {
    enabled: !!isReady && !!dataStatus,
  });

  useEffect(() => {
    if (data?.data.access_token != undefined) {
      setAccessToken(data.data.access_token);
      setDatastatus(false);
    }
  }, [accessToken, data]);

  return <></>;
}
export default KakaoAuth;
