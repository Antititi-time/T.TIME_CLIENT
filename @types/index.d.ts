export type chartBackgroundColor = {
  scales: {
    r: {
      ticks: {
        stepSize: number;
        display: boolean;
      };
      grid: {
        color: string;
      };
      pointLabels: {
        font: {
          size: number;
          weight: string;
          family: string;
        };
        color: string;
      };
      angleLines: {
        display: boolean;
      };
      suggestedMin: number;
      suggestedMax: number;
      backgroundColor: string;
    };
  };
  plugins: {
    legend: {
      display: false;
    };
  };
};
