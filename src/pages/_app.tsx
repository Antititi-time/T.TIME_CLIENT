import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@src/styles/globalStyle';
import React from 'react';
import LoginChecker from '@src/services/auth';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <LoginChecker>
          <Component {...pageProps} />
        </LoginChecker>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
