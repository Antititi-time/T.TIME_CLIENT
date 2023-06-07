import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import ImageDiv from './ImageDiv';
import { imgToolTipIcon } from 'public/assets/images';

interface StToolTipProps {
  top?: number;
}

function ToolTipIcon({ top }: StToolTipProps) {
  return (
    <StToolTip top={top}>
      <a target="_blank" href="https://walla.my/t.time" rel="noreferrer">
        <StToolTipIcon>
          <ImageDiv src={imgToolTipIcon} alt="주최자 프로필 사진" className="imgToolTipIcon" fill={true} />
        </StToolTipIcon>
      </a>
    </StToolTip>
  );
}

export default ToolTipIcon;

const StToolTip = styled.div<StToolTipProps>`
  position: fixed;
  top: ${(props) => props.top}rem;
  right: 0;
  z-index: 6;
  @media (min-width: 766px) {
    top: 2rem;
    right: 4rem;
  }
  @media (min-width: 1920px) {
    top: 4.5rem;
    right: 26.4rem;
  }
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
