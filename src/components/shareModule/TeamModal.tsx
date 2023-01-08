import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { icKakao, icPaste } from '@src/assets/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react';
import { shareKakao } from './ShareKakao';
import { useCopyLink, setKakao } from './ShareModule';
function TeamModal() {
  const [teamCode] = useState<string>('team');
  const [teamLink] = useState<string>(`http://192.168.0.134:3000/${teamCode}/result`);
  useEffect(() => {
    setKakao();
  }, []);
  return (
    <StTeamRecordModal>
      <StBackground>
        <StTeamModal>
          <StModalHeader>공유하기</StModalHeader>
          <StButtonContainer>
            <CopyToClipboard text={teamLink}>
              <StCopyButton onClick={useCopyLink}>
                <StButtonIcon src={icPaste.src} />
                <StButtonText>초대링크 복사하기</StButtonText>
              </StCopyButton>
            </CopyToClipboard>
            <StKakaoButton onClick={() => shareKakao(teamLink, teamCode, '팀결과')}>
              <StButtonIcon src={icKakao.src} />
              <StButtonText>카카오톡 공유하기</StButtonText>
            </StKakaoButton>
          </StButtonContainer>
          <StFooter>닫기</StFooter>
        </StTeamModal>
      </StBackground>
    </StTeamRecordModal>
  );
}

export default TeamModal;

const StTeamRecordModal = styled.div`
  width: 100vw;
  touch-action: none;
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
  width: 32.8rem;
  height: 29.7rem;
  margin: 11.5rem 3.1rem 0rem 3.1rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
`;
const StModalHeader = styled.header`
  display: block;
  width: 8rem;
  margin: 2.4rem 12.9rem 0rem 12.9rem;
  white-space: wrap;
  ${FONT_STYLES.PRETENDARD_B_20};
`;
const StButtonContainer = styled.div`
  margin: 4rem 2.3rem 3rem 2.3rem;
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
  ${FONT_STYLES.PRETENDARD_B_16};
`;
const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.8rem;
  margin-top: 3rem;
  border-top: 0.1rem solid ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
`;
