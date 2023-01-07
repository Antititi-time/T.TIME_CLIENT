import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import { TeamScore } from '@src/mocks/types';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
  BarElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Title,
  SubTitle,
} from 'chart.js/auto';
import { COLOR } from '@src/styles/color';
import type { ChartData } from 'chart.js';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { useEffect, useState } from 'react';

interface ChartProps {
  data: ChartData<'radar'>;
  options: ChartData<'radar'>;
}

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
  BarElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Title,
  SubTitle,
);

function Chart() {
  const { data } = useQuery('favorite', () => axios.post('/api/result/team/score/teamId'));
  const [teamScoreList, setTeamScoreList] = useState<number[]>();

  useEffect(() => {
    setTeamScoreList(data?.data[0].data.map((data: TeamScore) => data.grade));
  }, [data]);

  const chartData = {
    labels: ['협업', '성장', '동기부여', '개인생활', '건강'],
    datasets: [
      {
        label: '팀 점수',
        data: teamScoreList,
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
    scales: {
      r: {
        ticks: {
          stepSize: 25,
          display: false,
        },
        grid: {
          color: COLOR.GRAY_9E,
        },
        //협업, 건강, 성장, ,,,
        pointLabels: {
          font: {
            size: 12,
            weight: 700,
            family: 'Pretendard',
          },
          color: 'black',
        },
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        backgroundColor: 'white',
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    // animation: {
    //   duration: 0,
    // },
  };

  return (
    <StChart>
      <h2>
        항목별
        <br />팀 평균 그래프
      </h2>
      <StRadar>
        <Radar data={chartData} options={options} />
      </StRadar>
    </StChart>
  );
}

export default Chart;

const StChart = styled.div`
  & > h2 {
    ${FONT_STYLES.NEXON_B_16};
    line-height: 2.24rem;
    margin-top: 3rem;
  }
`;

const StRadar = styled.div`
  width: 30.2rem;
  height: 30.2rem;
  margin: 3rem 0 6rem 0;
`;
