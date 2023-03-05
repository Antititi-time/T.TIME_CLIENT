import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useQuery } from 'react-query';
import { getTokenValidation } from '@src/services';

interface withLoginCheckerProps {
  children: ReactNode;
}

function LoginChecker({ children }: withLoginCheckerProps) {
  const Router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  useQuery(['isValid', token], () => getTokenValidation(token), {
    enabled: !!token,
    retry: false,
    onError: () => {
      // 토큰 형태가 올바르지 않을 경우
      localStorage.removeItem('accessToken');
      localStorage.removeItem('nickName');
      Router.push('/organizerOnboarding');
      alert('잘못된 접근입니다. 다시 로그인해주세요');
    },
    onSuccess: (res) => {
      // 만료된 토큰일 경우
      if (res.isvalid === false) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('nickName');
        Router.push('/organizerOnboarding');
        alert('로그인이 만료되었어요. 다시 로그인해주세요');
      }
    },
  });

  return <>{children}</>;
}
export default LoginChecker;
