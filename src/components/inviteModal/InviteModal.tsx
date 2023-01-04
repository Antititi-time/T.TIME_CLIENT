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

  const CopyLink = () => {
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
    <>
      <STBackGround>
        <STModal>
          <STModalHeader>공유하기</STModalHeader>
          <STInviteArticle>
            <STArticleTitle>초대 링크</STArticleTitle>
            <STArticleLink>{teamLink}</STArticleLink>
          </STInviteArticle>
          <STButtonZone>
            <CopyToClipboard text={teamLink}>
              <STCopyButton onClick={() => CopyLink()}>
                <STButtonIcon src={icPaste.src} />
                <STButtonText>초대링크 복사하기</STButtonText>
              </STCopyButton>
            </CopyToClipboard>
            <STKakaoButton>
              <STButtonIcon src={icKakao.src} />
              <STButtonText onClick={() => onKakaoShare()}>카카오톡 공유하기</STButtonText>
            </STKakaoButton>
          </STButtonZone>
          <STFooter>닫기</STFooter>
        </STModal>
      </STBackGround>
    </>
  );
}

const STBackGround = styled.main`
  width: 39rem;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  overflow: hidden;
`;
const STModal = styled.section`
  position: relative;
  width: 32.8rem;
  height: 45.3rem;
  margin: 7.6rem 3.1rem 0rem 3.1rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  overflow: hidden;
`;
const STModalHeader = styled.header`
  display: block;
  width: 7rem;
  margin: 2.4rem 12.9rem 0rem 12.9rem;
  font-style: ${FONT_STYLES.PRETENDARD_B_20};
`;
const STInviteArticle = styled.article`
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
const STArticleTitle = styled.div`
  width: 22.6rem;
  font-style: ${FONT_STYLES.PRETENDARD_B_14};
`;
const STArticleLink = styled.div`
  width: 22.6rem;
  margin-top: 0.4rem;
  font-style: ${FONT_STYLES.NEXON_R_14};
`;
const STButtonZone = styled.article`
  margin: 4rem 2.3rem 4rem 2.3rem;
`;
const STCopyButton = styled.button`
  display: flex;
  align-items: center;
  width: 28.2rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.BLUE_1};
`;

const STKakaoButton = styled.button`
  display: flex;
  align-items: center;
  width: 28.2rem;
  height: 4.8rem;
  margin-top: 1.6rem;
  border-radius: 10rem;
  background-color: ${COLOR.ORANGE_1};
`;

const STButtonIcon = styled.img`
  margin-left: 1.8rem;
  margin-right: 4rem;
`;

const STButtonText = styled.span`
  color: white;
  font-style: ${FONT_STYLES.PRETENDARD_B_16};
`;
const STFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.8rem;
  margin-top: 4rem;
  border-top: 1px solid #7e7e7e;
  font-style: ${FONT_STYLES.NEXON_B_16};
`;
