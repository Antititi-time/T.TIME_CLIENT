import styled, { keyframes } from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { filterQuestionType } from '@src/hooks/FilterQuestionType';
import { useRouter } from 'next/router';
interface graphData {
  result: Array<{ questionType: string; grade: number }>;
}

interface graphWidth {
  data: number;
}

function ResultGraph({ result }: graphData) {
  const { query, isReady } = useRouter();

  if (isReady && String(query.teamId) !== 'noTeam') {
    localStorage.setItem('userId', String(query.userId));
  }

  return (
    <>
      {result?.map((data) => (
        <StGraphContent key={data.questionType}>
          <StGraphName>{filterQuestionType(data.questionType)}</StGraphName>
          <StGraphBar data={data.grade}>
            <div className="progress">
              <div className="progressValue"></div>
            </div>
          </StGraphBar>
          <StGraphScore>{data.grade}</StGraphScore>
        </StGraphContent>
      ))}
    </>
  );
}

export default ResultGraph;

const StGraphContent = styled.div`
  display: flex;
  margin-bottom: 0.7rem;
  @media screen and (min-width: 766px) {
    align-items: center;
    margin-top: 1.1rem;
  }
`;
const StGraphName = styled.div`
  ${FONT_STYLES.PRETENDARD_SB_12};
  width: 4.2rem;
  margin-right: 1rem;
  white-space: nowrap;
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_M_20};
    min-width: 7.1rem;
    margin-right: 1.6rem;
  }
`;

const graphAnimation = () => keyframes`
  from {
    width: 0;
  }`;
const StGraphBar = styled.div<graphWidth>`
  display: flex;
  align-items: center;

  .progress {
    width: 18.4rem;
    height: 0.6rem;
    margin-right: 1.4rem;
    background: ${COLOR.IVORY_6};
    border-radius: 1.4rem;
    @media screen and (min-width: 766px) {
      width: 43.2rem;
      height: 1.2rem;
    }
    @media screen and (min-width: 1200px) {
      width: 54.6rem;
    }
  }
  .progressValue {
    width: ${(props: graphWidth) => props.data * 1.84}rem;
    border-radius: 1.4rem;
    height: 0.6rem;
    background: ${COLOR.BLUE_1};
    z-index: 1;
    animation-name: ${graphAnimation};
    animation-duration: 6s;
    @media screen and (min-width: 766px) {
      width: ${(props: graphWidth) => props.data * 4.32}rem;
      height: 1.2rem;
    }
    @media screen and (min-width: 1200px) {
      width: ${(props: graphWidth) => props.data * 5.46}rem;
    }
  }
`;
const StGraphScore = styled.p`
  display: flex;
  justify-content: center;
  width: 1.4rem;
  ${FONT_STYLES.PRETENDARD_B_12};
  color: ${COLOR.BLUE_1};
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_B_20};
    margin-left: 1rem;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 2rem;
  }
`;
