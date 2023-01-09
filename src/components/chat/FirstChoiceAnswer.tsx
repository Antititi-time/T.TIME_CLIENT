import styled from 'styled-components';
import BottomButton from '@src/components/common/BottomButton';
import { COLOR } from '@src/styles/color';

function FirstChoiceAnswer() {
  return (
    <StChoiceInput>
      <BottomButton width={16} color={COLOR.ORANGE_1} text={'좋아요!'} />
      <BottomButton width={16} color={COLOR.BLUE_1} text={'다음에 할게요..'} />
    </StChoiceInput>
  );
}

export default FirstChoiceAnswer;

const StChoiceInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 39rem;
  height: 7.6rem;
  bottom: 0;
  background-color: ${COLOR.WHITE_100};
  gap: 1.6rem;
  z-index: 3;
`;
