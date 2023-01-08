import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgCenturyGothicLogo } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import { getTeamResult } from '@src/services';
import { useQuery } from 'react-query';
import { filterQuestionType } from '@src/hooks/FilterQuestionType';
import { useRouter } from 'next/router';

function SimpleResult() {
  const router = useRouter();
  const teamCode = Number(router.asPath.split('/')[2]);
  const { data } = useQuery('teamResult', () => getTeamResult(teamCode), { enabled: !!teamCode });
  const handleDate = (date: string) => {
    return date && date.replaceAll('-', '.');
  };
  const { date, teamName, good, bad } = data?.data || {};
  return (
    <div>
      <StTeamInfo>
        <StDate>{handleDate(date)}</StDate>
        <StTeamName>&#39;{teamName}&#39;</StTeamName>
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
          <span style={{ color: COLOR.BLUE_TEXT }}>{filterQuestionType(good)}</span>가 가장 뛰어나고,
          <br />
          <span style={{ color: COLOR.ORANGE_TEXT }}>{filterQuestionType(bad)}</span>이 가장 필요해요.
        </p>
      </StTeamInfoDetail>
    </div>
  );
}

export default SimpleResult;

const StTeamInfo = styled.div``;

const StDate = styled.p`
  margin-bottom: 0.8rem;
  color: ${COLOR.GRAY_9E};
  ${FONT_STYLES.PRETENDARD_M_12};
  line-height: 1.432rem;
`;

const StTeamName = styled.p`
  margin-bottom: 0.8rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.24rem;
`;

const StTeamResultText = styled.div`
  display: flex;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_22}
  line-height: 2.64rem;

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
    color: ${COLOR.BLACK};
    ${FONT_STYLES.PRETENDARD_B_14};
  }

  & > p:nth-of-type(2) {
    color: ${COLOR.BLACK};
    ${FONT_STYLES.PRETENDARD_B_20};

    & > span {
      ${FONT_STYLES.PRETENDARD_EB_20};
    }
  }
`;
