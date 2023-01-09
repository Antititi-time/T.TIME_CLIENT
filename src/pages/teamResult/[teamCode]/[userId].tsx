import styled from 'styled-components';
import LogoTop from '@src/components/common/LogoTop';
import ResultFrame from '@src/components/teamResult/ResultFrame';
import BottomButtonContainer from '@src/components/teamResult/BottomButtonContainer';
import { useState } from 'react';
import TeamModal from '@src/components/shareModule/TeamModal';
function TeamResult() {
  const [modalState, setModalState] = useState(false);
  return (
    <StTeamResult>
      {modalState ? <TeamModal setModalState={setModalState} /> : null}
      <LogoTop />
      <ResultFrame />
      <BottomButtonContainer isUser={true} setModalState={setModalState} />
      <StBackground />
    </StTeamResult>
  );
}

export default TeamResult;

const StTeamResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StBackground = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 67.2rem;
  background: linear-gradient(180deg, #f0e9d8 6.57%, rgba(241, 239, 234, 0) 55.73%, rgba(241, 239, 234, 0) 104.9%);
  transform: rotate(-180deg);
`;
