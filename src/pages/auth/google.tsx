import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { prevPathState } from '@src/atoms/login';
import { requestLogin } from '@src/services';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

function Google() {
  const prevPath = useRecoilValue(prevPathState);
  const router = useRouter();
  const url = router.asPath;
  const code = url?.split('#access_token=')[1]?.split('&')[0];

  const { data } = useQuery('requestLogin', () => requestLogin({ social: 'GOOGLE', token: code }), {
    onSuccess: () => {
      if (prevPath === '/organizerOnboarding') {
        router.push('/');
      } else {
        router.push('/participantOnboarding');
      }
    },
    onError: () => {
      console.error('로그인 요청이 실패했습니다.');
      router.push(prevPath);
    },
    enabled: !!code,
  });

  useEffect(() => {
    localStorage.setItem('accessToken', data?.accessToken);
  }, [data]);

  return <></>;
}

export default Google;
