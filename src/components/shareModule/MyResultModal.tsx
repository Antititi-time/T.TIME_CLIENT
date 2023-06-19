import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { icPaste } from 'public/assets/icons';
import { icKakao } from 'public/assets/images';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react';
import { shareKakao } from './ShareKakao';
import { useCopyLink, setKakao } from './ShareModule';
import { Dispatch, SetStateAction } from 'react';
import { DOMAIN } from '@src/constants/domain';
interface sharePropsType {
  setModalState: Dispatch<SetStateAction<boolean>>;
  userName: string;
  userId: string;
  teamId: string;
}
function MyResultModal({ setModalState, userName, userId, teamId }: sharePropsType) {
  const [myResultLink] = useState<string>(`${DOMAIN}/myResult/${teamId}/${userId}`);
  useEffect(() => {
    setKakao();
  }, []);
  return (
    <StMyResultModal>
      <StBackground>
        <StTeamModal>
          <StModalHeader>내 결과 공유하기</StModalHeader>
          <StButtonContainer>
            <CopyToClipboard text={myResultLink}>
              <StCopyButton onClick={useCopyLink}>
                <StButtonIcon src={icPaste.src} />
                <StButtonText className="copyText">링크 복사하기</StButtonText>
              </StCopyButton>
            </CopyToClipboard>
            <StKakaoButton onClick={() => shareKakao(myResultLink, userName, '내 결과')}>
              <StButtonIcon src={icKakao.src} />
              <StButtonText>카카오톡 공유하기</StButtonText>
            </StKakaoButton>
          </StButtonContainer>
          <StFooter onClick={() => setModalState(false)}>닫기</StFooter>
        </StTeamModal>
      </StBackground>
    </StMyResultModal>
  );
}

export default MyResultModal;

const StMyResultModal = styled.div`
  width: 100vw;
  touch-action: none;
  z-index: 2;
`;
const StBackground = styled.main`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.2rem);
`;
const StTeamModal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36rem;
  height: 29.7rem;
  margin: 11.8rem 3.1rem 0rem 3.1rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  @media screen and (min-width: 766px) {
    margin-top: 14.2rem;
  }
`;
const StModalHeader = styled.header`
  width: 100%;
  text-align: center;
  margin-top: 2.8rem;
  ${FONT_STYLES.PRETENDARD_B_20};
`;
const StButtonContainer = styled.div`
  margin: 4rem 2.3rem 3rem 2.3rem;
`;
const StCopyButton = styled.button`
  display: flex;
  align-items: center;
  width: 28rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.BLUE_1};
`;

const StKakaoButton = styled.button`
  display: flex;
  align-items: center;
  width: 28rem;
  height: 4.8rem;
  margin-top: 1.6rem;
  border-radius: 10rem;
  background-color: ${COLOR.ORANGE_1};
`;

const StButtonIcon = styled.img`
  margin-left: 1.8rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const StButtonText = styled.span`
  margin-left: 4.6rem;
  color: white;
  ${FONT_STYLES.NEXON_B_16};

  &.copyText {
    margin-left: 6.2rem;
  }
`;

const StFooter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  border-top: 0.1rem solid ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
`;
