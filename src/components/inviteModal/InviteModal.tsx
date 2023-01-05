import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { icKakao, icPaste } from '@src/assets/icons';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { shareKakao } from './ShareKakao';

export default function InviteModal() {
  const [teamCode, setTeamCode] = useState<string>('ttime');
  const [teamLink, setTeamLink] = useState<string>(`http://192.168.0.134:3000/${teamCode}`);

  const copyLink = () => {
    try {
      alert('클립보드에 복사되었습니다.');
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };
  useEffect((): void => {
    const script: HTMLScriptElement = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const onKakaoShare = () => {
    shareKakao(teamLink, teamCode, '개인결과');
  };
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
              <StCopyButton onClick={() => copyLink()}>
                <StButtonIcon src={icPaste.src} />
                <StButtonText>초대링크 복사하기</StButtonText>
              </StCopyButton>
            </CopyToClipboard>
            <StKakaoButton onClick={() => onKakaoShare()}>
              <StButtonIcon src={icKakao.src} />
              <StButtonText>카카오톡 공유하기</StButtonText>
            </StKakaoButton>
          </StButtonContainer>
          <StFooter>닫기</StFooter>
        </StModal>
      </StBackground>
    </StInviteModal>
  );
}

const StInviteModal = styled.div``;
const StBackground = styled.main`
  width: 39rem;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  overflow: hidden;
`;
const StModal = styled.section`
  position: relative;
  width: 32.8rem;
  height: 45.3rem;
  margin: 7.6rem 3.1rem 0rem 3.1rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  overflow: hidden;
`;
const StModalHeader = styled.header`
  display: block;
  width: 7rem;
  margin: 2.4rem 12.9rem 0rem 12.9rem;
  font-style: ${FONT_STYLES.PRETENDARD_B_20};
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
`;
const StArticleTitle = styled.div`
  width: 22.6rem;
  font-style: ${FONT_STYLES.PRETENDARD_B_14};
`;
const StArticleLink = styled.div`
  width: 22.6rem;
  margin-top: 0.4rem;
  font-style: ${FONT_STYLES.NEXON_R_14};
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
`;

const StButtonText = styled.span`
  color: white;
  font-style: ${FONT_STYLES.PRETENDARD_B_16};
`;
const StFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.8rem;
  margin-top: 4rem;
  border-top: 0.1rem solid ${COLOR.GRAY_7E};
  font-style: ${FONT_STYLES.NEXON_B_16};
`;
