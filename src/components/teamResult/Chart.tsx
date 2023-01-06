import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import { TeamScore } from '@src/mocks/types';

function Chart() {
  const { data } = useQuery('favorite', () => axios.post('/api/result/team/score/teamId'));
  console.log(data?.data[0].data);
  return (
    <StChart>
      {data?.data[0].data.map((data: TeamScore) => (
        <div key={data.questionType}>{data.grade}</div>
      ))}
    </StChart>
  );
}

export default Chart;

const StChart = styled.div`
  height: 44.2rem;
`;
