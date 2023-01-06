interface graphData {
  data: Array<{ questionType: string; score: number }>;
}

function ResultGraph({ data }: graphData) {
  console.log(data);
  return <>그래프에요</>;
}

export default ResultGraph;
