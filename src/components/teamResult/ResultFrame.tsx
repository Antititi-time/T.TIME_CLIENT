import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import Chart from './Chart';

function TeamResult() {
  return (
    <StFrame>
      <StFrameContainer>
        <StTeamInfo>
          <p>2023.01.04</p>
          <h2>안티티티티티티티타임</h2>
          <h1>
            팀 <span>T</span>
            <span>.</span>
            time 결과
          </h1>
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

const StTeamInfo = styled.div`
  & > p {
    color: ${COLOR.GRAY_9E};
    ${FONT_STYLES.PRETENDARD_M_12}
    margin-bottom: 0.4rem;
  }

  & > h2 {
    color: ${COLOR.GRAY_7E};
    ${FONT_STYLES.NEXON_B_16};
    margin-bottom: 1.2rem;
  }

  & > h1 {
    color: ${COLOR.BLACK};
    ${FONT_STYLES.CENTURY_B_22}
    margin-bottom: 3.5rem;

    & > span:first-of-type {
      ${FONT_STYLES.CENTURY_B_22}
      color: ${COLOR.ORANGE_1};
    }

    & > span:last-of-type {
      ${FONT_STYLES.CENTURY_B_22}
      color: ${COLOR.BLUE_1};
    }
  }
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
    ${FONT_STYLES.PRETENDARD_EB_20};

    & > span:first-of-type {
      color: ${COLOR.BLUE_TEXT};
    }
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
