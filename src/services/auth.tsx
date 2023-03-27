import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import { useQuery } from 'react-query';
import { getTokenValidation } from '@src/services';

interface withLoginCheckerProps {
  children: ReactNode;
}

function LoginChecker({ children }: withLoginCheckerProps) {
  const Router = useRouter();

  const currentURL = Router.asPath.split('/')[1];
  const [checkState, setCheckState] = useState(0);
  const valid_paths = ['', 'myResult', 'teamResult', 'organizerOnboarding', 'auth'];
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';
  useQuery(['isValid', token], () => getTokenValidation(token), {
    enabled: !valid_paths.includes(currentURL),
    retry: false,
    onError: () => {
      if (checkState == 0 && currentURL !== 'join') {
        setCheckState(1);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('nickName');
        Router.push('/organizerOnboarding');
        alert('잘못된 접근입니다. 다시 로그인해주세요');
      }
      if (currentURL === 'join' && token) {
        setCheckState(1);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('nickName');
        Router.reload();
      }
    },
    onSuccess: (res) => {
      if (res.isValid === false) {
        if (checkState == 0) {
          setCheckState(1);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('nickName');
          if (currentURL != 'join') {
            Router.push('/organizerOnboarding');
          } else {
            Router.reload();
          }
          alert('세션이 만료됐습니다. 다시 로그인해주세요');
        }
      }
    },
  });

  return <>{children}</>;
}
export default LoginChecker;
