import styled from 'styled-components';
import { useQuery } from 'react-query';
import { TeamScore } from '@src/mocks/types';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import type { ChartOptions } from 'chart.js';
import { getTeamChartResult } from '@src/services';

ChartJS.register();

interface TeamResultProps {
  teamId: number;
}

function Chart({ teamId }: TeamResultProps) {
  const { data } = useQuery('teamChartResult', () => getTeamChartResult(teamId), {
    enabled: !!teamId,
  });

  const setInOrder = (data: TeamScore[]) => {
    data.sort(function (a: TeamScore, b: TeamScore) {
      return a.questionType < b.questionType ? -1 : a.questionType > b.questionType ? 1 : 0;
    });
    return data.map((item: TeamScore) => item.grade);
  };

  const setInChartOrder = (array: number[]) => {
    const newArray = array.splice(3);
    newArray?.unshift(array[1]);
    newArray?.unshift(array[2]);
    newArray?.unshift(array[0]);
    return newArray;
  };

  const chartData = {
    labels: ['협업', '성장', '동기부여', '개인생활', '건강'],
    datasets: [
      {
        label: '팀 점수',
        data: data && setInChartOrder(setInOrder(data.data)),
        backgroundColor: 'rgba(255, 108, 61, 0.2)',
      },
    ],
  };

  const chartOptions: ChartOptions<'radar'> & ChartOptions = {
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
          stepSize: 2.5,
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
        suggestedMax: 10,
        backgroundColor: 'white',
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 0,
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
