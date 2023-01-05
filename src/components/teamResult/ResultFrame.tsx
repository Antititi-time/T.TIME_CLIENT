import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import Chart from './Chart';
import DetailResult from './DetailResult';

function TeamResult() {
  return (
    <StFrame>
      <StFrameContainer>
        <StTeamInfo>
          <StDate>2023.01.04</StDate>
          <StTeamName>안티티티티티티티타임</StTeamName>
          <div>팀 결과</div>
        </StTeamInfo>
        <StTeamInfoDetail>
          <p>우리 팀은요..</p>
          <p>
            <span>동기부여</span>가 가장 뛰어나고,
            <br />
            <span>성장</span>이 가장 필요해요.
          </p>
        </StTeamInfoDetail>
        <StDivder />
        <Chart />
        <DetailResult />
      </StFrameContainer>
    </StFrame>
  );
}

export default TeamResult;

const StFrame = styled.div`
  width: 34.6rem;
  height: 100%;
  margin-top: 2.6rem;
  background-color: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1.4rem;
`;

const StFrameContainer = styled.div`
  margin: 2.1rem 2.1rem;
`;

const StTeamInfo = styled.div``;

const StDate = styled.p`
  color: ${COLOR.GRAY_9E};
  ${FONT_STYLES.PRETENDARD_M_12}
  margin-bottom: 0.4rem;
`;

const StTeamName = styled.h2`
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
  margin-bottom: 1.2rem;
`;

const StTeamInfoDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 5.2rem;

  & > p:first-of-type {
    ${FONT_STYLES.PRETENDARD_B_14};
    margin-bottom: 0.4rem;
  }

  & > p:nth-of-type(2) {
    ${FONT_STYLES.PRETENDARD_B_20};

    & > span:first-of-type {
      ${FONT_STYLES.PRETENDARD_EB_20};
      color: ${COLOR.BLUE_TEXT};
    }
    ${FONT_STYLES.PRETENDARD_EB_20};
    & > span:last-of-type {
      color: ${COLOR.ORANGE_TEXT};
    }
  }
`;

const StDivder = styled.div`
  position: relative;
  left: -2.1rem;
  width: 34.7rem;
  height: 0.1rem;
  background-color: ${COLOR.GRAY_EC};
`;
