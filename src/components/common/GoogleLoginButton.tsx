import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';
import ImageDiv from './ImageDiv';
import { icnGoogle } from '@src/assets/icons';
import Link from 'next/link';

function GoogleLoginButton() {
  const redirectLink =
    'https://accounts.google.com/o/oauth2/auth?client_id=' +
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID +
    '&redirect_uri=' +
    process.env.NEXT_PUBLIC_REDIRECT_URL +
    '&response_type=token&' +
    '&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

  return (
    <Link href={redirectLink}>
      <StGoogleLoginButton>
        <ImageDiv src={icnGoogle} className="icnGoogle" alt="구글 아이콘" fill />
        <StText>Google 계정으로 시작하기</StText>
      </StGoogleLoginButton>
    </Link>
  );
}

export default GoogleLoginButton;

const StGoogleLoginButton = styled.button`
  //position, top 임의 값 나중에 삭제할 것.
  position: relative;
  top: 80rem;
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
`;
