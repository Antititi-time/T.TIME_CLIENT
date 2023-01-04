import { css } from 'styled-components';

type Font = {
  font: 'Pretendard' | 'NEXON Lv1 Gothic Low OTF' | 'century-gothic';
  size: number;
  weight: 'R' | 'M' | 'SB' | 'B' | 'EB';
  height: number;
};

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'R':
      return 400;
    case 'M':
      return 500;
    case 'SB':
      return 600;
    case 'B':
      return 700;
    case 'EB':
    default:
      return 800;
  }
};

export const FONT = ({ font, size, weight, height }: Font) => css`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard-dynamic-subset.css');
  }
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
  }
  @font-face {
    font-family: 'century-gothic';
    src: url('https://fonts.cdnfonts.com/css/century-gothic') format('woff');
  }

  font-family: ${font};
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  letter-spacing: -0.01em;
  line-height: ${height}px;
`;

export const FONT_STYLES = {
  PRETENDARD_R_14: FONT({ font: 'Pretendard', size: 14, weight: 'R', height: 22 }),
  PRETENDARD_M_12: FONT({ font: 'Pretendard', size: 12, weight: 'M', height: 14 }),
  PRETENDARD_SB_12: FONT({ font: 'Pretendard', size: 12, weight: 'SB', height: 14 }),
  PRETENDARD_B_12: FONT({ font: 'Pretendard', size: 12, weight: 'B', height: 14 }),
  PRETENDARD_B_14: FONT({ font: 'Pretendard', size: 14, weight: 'B', height: 22 }),
  PRETENDARD_B_16: FONT({ font: 'Pretendard', size: 16, weight: 'B', height: 22 }),
  PRETENDARD_B_20: FONT({ font: 'Pretendard', size: 20, weight: 'B', height: 24 }),
  PRETENDARD_EB_20: FONT({ font: 'Pretendard', size: 20, weight: 'EB', height: 24 }),
  NEXON_R_12: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 12, weight: 'R', height: 14 }),
  NEXON_R_13: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 13, weight: 'R', height: 14 }),
  NEXON_R_14: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 14, weight: 'R', height: 16 }),
  NEXON_R_16: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 16, weight: 'R', height: 18 }),
  NEXON_B_12: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 12, weight: 'B', height: 14 }),
  NEXON_B_14: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 14, weight: 'B', height: 16 }),
  NEXON_B_16: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 16, weight: 'B', height: 14 }),
  NEXON_B_20: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 20, weight: 'B', height: 23 }),
  NEXON_B_22: FONT({ font: 'NEXON Lv1 Gothic Low OTF', size: 22, weight: 'B', height: 25 }),
  CENTURY_B_22: FONT({ font: 'century-gothic', size: 22, weight: 'B', height: 27 }),
};
