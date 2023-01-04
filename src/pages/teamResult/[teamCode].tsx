import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import LogoTop from '@src/components/common/LogoTop';

function TeamResult() {
  return (
    <StTeamResult>
      <LogoTop />
      <StFrame>팀 결과</StFrame>
    </StTeamResult>
  );
}

export default TeamResult;

const StTeamResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StFrame = styled.h1`
  width: 34.6rem;
  height: 100%;
  background-color: ${COLOR.IVORY_1};
`;
