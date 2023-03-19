import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';
import ImageDiv from './ImageDiv';
import { icnGoogle } from 'public/assets/icons';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { prevPathState } from '@src/atoms/login';
import { useRouter } from 'next/router';
import { DOMAIN } from '@src/constants/domain';

function GoogleLoginButton() {
  const setPrevPath = useSetRecoilState(prevPathState);
  const router = useRouter();
  const redirectLink =
    'https://accounts.google.com/o/oauth2/auth?client_id=' +
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID +
    '&redirect_uri=' +
    DOMAIN +
    '/auth/google' +
    '&response_type=token&' +
    '&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
  const getCurrentPath = () => {
    setPrevPath(router.asPath);
  };

  return (
    <Link href={redirectLink}>
      <StGoogleLoginButton onClick={getCurrentPath}>
        <ImageDiv src={icnGoogle} className="icnGoogle" alt="구글 로고" fill />
        <StText>Google 계정으로 시작하기</StText>
      </StGoogleLoginButton>
    </Link>
  );
}

export default GoogleLoginButton;

const StGoogleLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28.2rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.WHITE_100};
  box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.05);

  .icnGoogle {
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
  }
`;

const StText = styled.p`
  ${FONT_STYLES.PRETENDARD_B_16};
  color: ${COLOR.BLACK};
`;
