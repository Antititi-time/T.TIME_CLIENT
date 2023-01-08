import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import { TeamScore } from '@src/mocks/types';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { useEffect, useState } from 'react';
import type { ChartOptions } from 'chart.js';

ChartJS.register();

function Chart() {
  const { data } = useQuery('favorite', () => axios.post('/api/result/team/score/teamId'));
  const [teamScoreList, setTeamScoreList] = useState<number[]>();
  interface ChartElementsCustomType {
    elements: {
      point: {
        pointBackgroundColor: string;
      };
    };
  }

  useEffect(() => {
    setTeamScoreList(data?.data[0].data.map((data: TeamScore) => data.grade));
  }, [data]);

  const chartData = {
    labels: ['협업', '성장', '동기부여', '개인생활', '건강'],
    datasets: [
      {
        label: '팀 점수',
        data: teamScoreList ? teamScoreList : [0],
        backgroundColor: 'rgba(255, 108, 61, 0.2)',
      },
    ],
  };
  const chartOptions: ChartOptions<'radar'> & ChartElementsCustomType = {
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
        pointLabels: {
          font: {
            size: 12,
            weight: '700',
            family: 'Pretendard',
          },
          color: COLOR.BLACK,
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
  };

  return (
    <StChart>
      <StTitle>
        항목별
        <br />팀 평균 그래프
      </StTitle>
      <StRadar>
        <Radar data={chartData} options={chartOptions} />
      </StRadar>
    </StChart>
  );
}

export default Chart;

const StChart = styled.div``;

const StTitle = styled.h2`
  margin-top: 3rem;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.24rem;
`;

const StRadar = styled.div`
  width: 30.2rem;
  height: 30.2rem;
  margin: 3rem 0 6rem 0;
`;
