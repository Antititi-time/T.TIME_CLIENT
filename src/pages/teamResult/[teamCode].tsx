import styled from 'styled-components';
import LogoTop from '@src/components/common/LogoTop';
import ResultFrame from '@src/components/teamResult/ResultFrame';
import BottomButtonContainer from '@src/components/common/BottomButtonContainer';

function TeamResult() {
  return (
    <StTeamResult>
      <LogoTop />
      <ResultFrame />
      <BottomButtonContainer />
    </StTeamResult>
  );
}

export default TeamResult;

const StTeamResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
