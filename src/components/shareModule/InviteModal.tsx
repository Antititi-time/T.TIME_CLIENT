import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { icPaste } from 'public/assets/icons';
import { icKakao } from 'public/assets/images';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { shareKakao } from './ShareKakao';
import { useCopyLink, setKakao } from './ShareModule';
import { DOMAIN } from '@src/constants/domain';

interface InviteType {
  setModalState: Dispatch<SetStateAction<boolean>>;
  teamId: string;
  teamName: string;
}

function InviteModal({ setModalState, teamId, teamName }: InviteType) {
  const [teamLink] = useState<string>(`${DOMAIN}/join/${teamId}`);

  useEffect(() => {
    setKakao();
  }, []);

  return (
    <StInviteModal>
      <StBackground>
        <StModal>
          <StModalHeader>공유하기</StModalHeader>
          <StInviteArticle>
            <StArticleTitle>초대 링크</StArticleTitle>
            <StArticleLink>{teamLink}</StArticleLink>
          </StInviteArticle>
          <StButtonContainer>
            <CopyToClipboard text={teamLink}>
              <StCopyButton onClick={useCopyLink}>
                <StButtonIcon src={icPaste.src} />
                <StButtonText>초대링크 복사하기</StButtonText>
              </StCopyButton>
            </CopyToClipboard>
            <StKakaoButton onClick={() => shareKakao(teamLink, teamName, '개인결과')}>
              <StButtonIcon src={icKakao.src} />
              <StButtonText>카카오톡 공유하기</StButtonText>
            </StKakaoButton>
          </StButtonContainer>
          <StFooter onClick={() => setModalState(false)}>닫기</StFooter>
        </StModal>
      </StBackground>
    </StInviteModal>
  );
}

export default InviteModal;

const StInviteModal = styled.div`
  width: 100vw;
  touch-action: none;
  z-index: 3;
`;
const StBackground = styled.main`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.2rem);
  z-index: 6;
`;
const StModal = styled.section`
  position: relative;
  width: 32.8rem;
  height: 45.3rem;
  margin: 7.6rem 3.1rem 0rem 3.1rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  z-index: 7;
  @media screen and (min-width: 1920px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 36rem;
    height: 46.5rem;
    margin-top: 20.1rem;
  }
`;
const StModalHeader = styled.header`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 2.4rem;
  ${FONT_STYLES.PRETENDARD_B_20};
  @media screen and (min-width: 1920px) {
    margin-top: 2.8rem;
    margin-bottom: 2.8rem;
    font-size: 2.4rem;
  }
`;
const StInviteArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 28.2rem;
  height: 12.4rem;
  margin: 2.2rem 2.3rem 0 2.3rem;
  border-radius: 1.2rem;
  background-color: ${COLOR.IVORY_3};
  @media screen and (min-width: 1920px) {
    margin-top: 0;
  }
`;
const StArticleTitle = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 2.8rem;
  ${FONT_STYLES.PRETENDARD_B_16};
  @media screen and (min-width: 1920px) {
    line-height: 160%;
  }
`;
const StArticleLink = styled.div`
  width: 100%;

  margin-top: 0.4rem;
  ${FONT_STYLES.NEXON_R_14};
  font-size: 1.6rem;
  padding-left: 2.8rem;
`;
const StButtonContainer = styled.div`
  margin: 4rem 2.3rem 4rem 2.3rem;
`;
const StCopyButton = styled.button`
  display: flex;
  align-items: center;
  width: 28.2rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.BLUE_1};
`;

const StKakaoButton = styled.button`
  display: flex;
  align-items: center;
  width: 28.2rem;
  height: 4.8rem;
  margin-top: 1.6rem;
  border-radius: 10rem;
  background-color: ${COLOR.ORANGE_1};
`;

const StButtonIcon = styled.img`
  margin-left: 1.8rem;
  margin-right: 4rem;
  width: 2.4rem;
`;

const StButtonText = styled.span`
  color: white;
  ${FONT_STYLES.NEXON_B_16};
`;
const StFooter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  margin-top: 4rem;
  border-top: 0.1rem solid ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
  @media screen and (min-width: 1920px) {
    margin-top: 0;
  }
`;
