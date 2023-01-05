import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import Chart from './Chart';
import DetailResult from './DetailResult';
import { imgCenturyGothicLogo } from '@src/assets/images';
import { logoIcon } from '@src/assets/icon';
import ImageDiv from '../common/ImageDiv';

function TeamResult() {
  return (
    <StFrame>
      <StFrameContainer>
        <StTeamInfo>
          <StDate>2023.01.04</StDate>
          <StTeamName>안티티티티티티티타임</StTeamName>
          <StTeamResultText>
            <p>팀</p>
            <ImageDiv src={imgCenturyGothicLogo} alt="logo" className="logo" fill={true} />
            <p>결과</p>
          </StTeamResultText>
        </StTeamInfo>
        <StImageContainer>
          <div></div>
          <div></div>
        </StImageContainer>
        <StTeamInfoDetail>
          <p>우리 팀은요..</p>
          <p>
            <span style={{ color: COLOR.BLUE_TEXT }}>동기부여</span>가 가장 뛰어나고,
            <br />
            <span style={{ color: COLOR.ORANGE_TEXT }}>성장</span>이 가장 필요해요.
          </p>
        </StTeamInfoDetail>
        <StDivder />
        <Chart />
        <DetailResult />
        <StLogo>
          <ImageDiv src={logoIcon} alt="T.time" className="logoIcon" fill={true} />
          <p>나와 팀 함께 성장하는 시간</p>
        </StLogo>
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
  margin-bottom: 0.4rem;
  color: ${COLOR.GRAY_9E};
  ${FONT_STYLES.PRETENDARD_M_12}
`;

const StTeamName = styled.h2`
  margin-bottom: 1.2rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
`;

const StTeamResultText = styled.div`
  display: flex;
  ${FONT_STYLES.NEXON_B_22}

  .logo {
    position: relative;
    width: 7.2rem;
    height: 2.4rem;
    margin: 0 0.4rem;
  }
`;

const StImageContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin: 5.2rem 0 3.3rem 2.4rem;

  & > div {
    width: 12rem;
    height: 12rem;
    background-color: ${COLOR.GRAY_9E};
  }
`;

const StTeamInfoDetail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5.2rem;
  text-align: center;

  & > p:first-of-type {
    margin-bottom: 0.6rem;
    ${FONT_STYLES.PRETENDARD_B_14};
  }

  & > p:nth-of-type(2) {
    ${FONT_STYLES.PRETENDARD_B_20};

    & > span {
      ${FONT_STYLES.PRETENDARD_EB_20};
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

const StLogo = styled.div`
  width: 14.1rem;
  height: 5.6rem;
  margin: 6.8rem auto 0 auto;
  ${FONT_STYLES.NEXON_R_12};
  color: ${COLOR.GRAY_7E};

  .logoIcon {
    position: relative;
    width: 5.8rem;
    height: 3rem;
    margin: 0 auto;
    margin-bottom: 1.2rem;
  }
`;
