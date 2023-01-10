import styled from 'styled-components';
import BottomButton from '@src/components/common/BottomButton';
import { COLOR } from '@src/styles/color';
import { Dispatch, SetStateAction } from 'react';
interface firstChoiceType {
  setIndex: Dispatch<SetStateAction<number>>;
  index: number;
  setInput: Dispatch<SetStateAction<boolean>>;
  teamCode: number;
}

function FirstChoiceAnswer({ setIndex, index, setInput, teamCode }: firstChoiceType) {
  return (
    <StChoiceInput>
      <StButtonContainer
        onClick={() => {
          setIndex(index + 1);
          setInput(false);
        }}>
        <BottomButton width={28.5} color={COLOR.ORANGE_1} text={'좋아요!'} />
      </StButtonContainer>
    </StChoiceInput>
  );
}

export default FirstChoiceAnswer;
const StButtonContainer = styled.div``;
const StChoiceInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 7.6rem;
  bottom: 0;
  background-color: ${COLOR.WHITE_100};
  gap: 1.6rem;
  z-index: 3;
`;
