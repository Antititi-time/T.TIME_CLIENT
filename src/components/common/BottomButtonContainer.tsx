import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';

function BottomButtonContainer() {
  return (
    <StButtomButtonContainer>
      <StButton>내 결과 다시보기</StButton>
      <StButton>공유하기</StButton>
    </StButtomButtonContainer>
  );
}

export default BottomButtonContainer;

const StButtomButtonContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8.4rem;
  background-color: white;
  border-radius: 1.2rem 1.2rem 0 0;
`;

const StButton = styled.button`
  width: 16rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.6rem;
  ${FONT_STYLES.NEXON_B_16};

  &:first-child {
    background-color: ${COLOR.BLUE_1};
    color: ${COLOR.WHITE_100};
  }

  &:last-child {
    background-color: ${COLOR.ORANGE_1};
    color: ${COLOR.WHITE_100};
  }
`;
