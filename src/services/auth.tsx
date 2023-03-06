import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useQuery } from 'react-query';
import { getTokenValidation } from '@src/services';

interface withLoginCheckerProps {
  children: ReactNode;
}

function LoginChecker({ children }: withLoginCheckerProps) {
  const Router = useRouter();
  const { pathname } = useRouter();
  const valid_paths = ['/myResult/*', '/teamResult/*', '/join/*', '/organizerOnboarding', '/auth/*'];
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  useQuery(['isValid', token], () => getTokenValidation(token), {
    enabled: !valid_paths.includes(pathname),
    retry: false,
    onError: () => {
      // 토큰 형태가 올바르지 않을 경우
      // if (
      //   pathname !== '/myResult/*' &&
      //   pathname !== '/teamResult/*' &&
      //   pathname !== '/join/*' &&
      //   pathname !== '/organizerOnboarding'
      // ) {
      //   localStorage.removeItem('accessToken');
      //   localStorage.removeItem('nickName');
      //   Router.push('/organizerOnboarding');
      //   alert('잘못된 접근입니다. 다시 로그인해주세요');
      // }
      localStorage.removeItem('accessToken');
      localStorage.removeItem('nickName');
      Router.push('/organizerOnboarding');
      alert('잘못된 접근입니다. 다시 로그인해주세요');
    },
    onSuccess: (res) => {
      // 만료된 토큰일 경우
      // if (
      //   pathname !== '/myResult/*' &&
      //   pathname !== '/teamResult/*' &&
      //   pathname !== '/join/*' &&
      //   pathname !== '/organizerOnboarding' &&
      //   res.isvalid === false
      // ) {
      //   localStorage.removeItem('accessToken');
      //   localStorage.removeItem('nickName');
      //   Router.push('/organizerOnboarding');
      //   alert('세션이 만료됐습니다. 다시 로그인해주세요');
      // }
      if (res.isvalid === false) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('nickName');
        Router.push('/organizerOnboarding');
        alert('세션이 만료됐습니다. 다시 로그인해주세요');
      }
    },
  });

  return <>{children}</>;
}
export default LoginChecker;
