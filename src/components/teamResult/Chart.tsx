import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import { TeamScore } from '@src/mocks/types';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js/auto';
import { COLOR } from '@src/styles/color';

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

function Chart() {
  const { data } = useQuery('favorite', () => axios.post('/api/result/team/score/teamId'));
  const chartData = {
    labels: ['협업', '성장', '동기부여', '개인생활', '건강'],
    datasets: [
      {
        label: '팀 점수',
        data: [62, 68, 68, 67, 67],
        backgroundColor: 'rgba(255, 108, 61, 0.2)',
      },
    ],
  };
  const options = {
    elements: {
      line: {
        borderWidth: 2,
        borderColor: COLOR.ORANGE_1,
      },
      point: {
        pointBackgroundColor: COLOR.ORANGE_1,
      },
    },
    // scales: {
    //   ticks: {
    //     min: 0,
    //     max: 100,
    //     stepSize: 25,
    //   },
    //   angleLines: {
    //     display: false,
    //   },
    // },
  };
  const Chart = () => {
    return (
      <StRadar>
        <Radar data={chartData} options={options} />
      </StRadar>
    );
  };

  return (
    <StChart>
      {data?.data[0].data.map((data: TeamScore) => (
        <div key={data.questionType}>{data.grade}</div>
      ))}
      <Chart />
    </StChart>
  );
}

export default Chart;

const StChart = styled.div`
  height: 44.2rem;
`;

const StRadar = styled.div`
  width: 30.2rem;
  height: 27.8rem;
`;
