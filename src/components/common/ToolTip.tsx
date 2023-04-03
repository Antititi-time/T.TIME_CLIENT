import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';
import ImageDiv from '../common/ImageDiv';
import { imgToolTipIcon, imgDeleteButton } from 'public/assets/images';

function ToolTip() {
  return (
    <StToolTip>
      <a target="_blank" href="https://walla.my/t.time" rel="noreferrer">
        <StToolTipIcon>
          <ImageDiv src={imgToolTipIcon} alt="주최자 프로필 사진" className="imgToolTipIcon" fill={true} />
        </StToolTipIcon>
      </a>
      <StMessageBox className="hi">
        <StMessage>T-time에 제안해주세요.</StMessage>
        <StDeleteButton>
          <ImageDiv src={imgDeleteButton} alt="주최자 프로필 사진" className="imgDeleteButton" fill={true} />
        </StDeleteButton>
      </StMessageBox>
    </StToolTip>
  );
}

export default ToolTip;

const StToolTip = styled.div`
  &:hover .hi {
    display: block;
  }
`;

const StDeleteButton = styled.div`
  .imgDeleteButton {
    position: relative;
    width: 1.4rem;
    height: 1.4rem;
    top: -3.2rem;
    right: 0.3rem;
  }
`;

const StMessage = styled.p`
  margin: 0.5rem 0 0 1.2rem;
  color: ${COLOR.ORANGE_1};
  ${FONT_STYLES.PRETENDARD_B_14};
`;

const StMessageBox = styled.div`
  display: none;
  position: fixed;
  top: 2.6rem;
  right: 3.2rem;
  width: 19.8rem;
  height: 3.2rem;
  border-radius: 10rem;
  background-color: ${COLOR.WHITE_100};
  z-index: 1;
`;

const StToolTipIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 1.6rem;
  right: 1.6rem;
  width: 5.6rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.ORANGE_1};
  z-index: 2;
  .imgToolTipIcon {
    position: relative;
    width: 2.2rem;
    height: 2.2rem;
  }
`;
