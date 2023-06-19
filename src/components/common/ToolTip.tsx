import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';
import ImageDiv from '../common/ImageDiv';
import { imgToolTipIcon } from 'public/assets/images';

import { useState, useEffect } from 'react';

interface StToolTipProps {
  top?: number;
}

function ToolTip({ top }: StToolTipProps) {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <StToolTip top={top}>
      <a target="_blank" href="https://walla.my/t.time" rel="noreferrer">
        <StToolTipIcon>
          <ImageDiv src={imgToolTipIcon} alt="주최자 프로필 사진" className="imgToolTipIcon" fill={true} />
        </StToolTipIcon>
      </a>
      {alert && (
        <StMessageBox>
          <StMessage>T-time에 제안해주세요.</StMessage>
        </StMessageBox>
      )}
    </StToolTip>
  );
}

export default ToolTip;

const StToolTip = styled.div<StToolTipProps>`
  position: fixed;
  top: ${(props) => props.top}rem;
  right: 0;
  z-index: 6;
  @media (min-width: 766px) {
    right: 4rem;
  }
  @media (min-width: 1200px) {
    right: 8.8rem;
  }
`;

const StMessage = styled.p`
  margin: 0.5rem 0 0 1.2rem;
  color: ${COLOR.ORANGE_1};
  ${FONT_STYLES.PRETENDARD_B_14};
`;

const StMessageBox = styled.div`
  position: absolute;
  top: 2.6rem;
  right: 3.2rem;
  width: 19.8rem;
  height: 3.2rem;
  border-radius: 10rem;
  background-color: ${COLOR.WHITE_100};
  z-index: 4;
`;

const StToolTipIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 5.6rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.ORANGE_1};
  z-index: 5;
  .imgToolTipIcon {
    position: relative;
    width: 2.2rem;
    height: 2.2rem;
  }
`;
