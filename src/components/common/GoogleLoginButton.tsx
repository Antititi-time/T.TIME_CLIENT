import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';
import ImageDiv from './ImageDiv';
import { icnGoogle } from '@src/assets/icons';

function GoogleLoginButton() {
  return (
    <StGoogleLoginButton>
      <ImageDiv src={icnGoogle} className="icnGoogle" alt="구글 아이콘" fill />
      <StText>Google 계정으로 시작하기</StText>
    </StGoogleLoginButton>
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
`;
