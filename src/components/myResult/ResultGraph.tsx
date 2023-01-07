import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { filterQuestionType } from '@src/hooks/FilterQuestionType';
interface graphData {
  result: Array<{ questionType: string; score: number }>;
}

function ResultGraph({ result }: graphData) {
  return (
    <>
      {result.map((data) => (
        <>
          <StGraphContent>
            <StGraphName>{filterQuestionType(data.questionType)}</StGraphName>
            <StGraphBar>
              <progress id="progress" value={data.score} max="10"></progress>
            </StGraphBar>
            <StGraphScore>{data.score}</StGraphScore>
          </StGraphContent>
        </>
      ))}
    </>
  );
}

export default ResultGraph;

const StGraphContent = styled.div`
  display: flex;
  margin-bottom: 0.7rem;
`;
const StGraphName = styled.p`
  ${FONT_STYLES.PRETENDARD_SB_12};
  width: 4.2rem;
  margin-right: 1.5rem;
  white-space: nowrap;
`;
const StGraphBar = styled.div`
  #progress {
    appearance: none;
    width: 18.4rem;
    height: 0.6rem;
    margin-right: 1.4rem;
  }
  #progress::-webkit-progress-bar {
    background: ${COLOR.IVORY_6};
    border-radius: 1.4rem;
  }
  #progress::-webkit-progress-value {
    border-radius: 1.4rem;
    background: ${COLOR.BLUE_1};
  }
`;
const StGraphScore = styled.p`
  display: flex;
  justify-content: center;
  width: 1.4rem;
  ${FONT_STYLES.PRETENDARD_B_12};
  color: ${COLOR.BLUE_1};
`;
