import styled, { keyframes } from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { filterQuestionType } from '@src/hooks/filterQuestionType';
interface graphData {
  result: Array<{ questionType: string; grade: number }>;
}
interface graphWidth {
  data: number;
}

function ResultGraph({ result }: graphData) {
  console.log(result);
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
`;
const StGraphName = styled.p`
  ${FONT_STYLES.PRETENDARD_SB_12};
  width: 4.2rem;
  margin-right: 1.5rem;
  white-space: nowrap;
`;

const graphAnimation = () => keyframes`
  from {
    width: 0;
  }
`;
const StGraphBar = styled.div<graphWidth>`
  display: flex;
  align-items: center;

  .progress {
    appearance: none;
    width: 18.4rem;
    height: 0.6rem;
    margin-right: 1.4rem;
    background: ${COLOR.IVORY_6};
    border-radius: 1.4rem;
  }

  .progressValue {
    width: ${(props: graphWidth) => props.data * 1.84}rem;
    border-radius: 1.4rem;
    height: 0.6rem;
    background: ${COLOR.BLUE_1};
    z-index: 3;
    animation-name: ${() => graphAnimation()};
    animation-duration: 4s;
  }
`;
const StGraphScore = styled.p`
  display: flex;
  justify-content: center;
  width: 1.4rem;
  ${FONT_STYLES.PRETENDARD_B_12};
  color: ${COLOR.BLUE_1};
`;
