import styled from 'styled-components';

interface graphData {
  result: Array<{ questionType: string; score: number }>;
}

function ResultGraph({ result }: graphData) {
  return (
    <>
      {result.map((data) => (
        <>
          <StGraphContent>
            <StGraphName>{data.questionType}</StGraphName>
            <StGraphBar></StGraphBar>
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
`;
const StGraphName = styled.p``;
const StGraphBar = styled.div``;
const StGraphScore = styled.p``;
