import styled from 'styled-components';
import BottomButton from '@src/components/common/BottomButton';
import { COLOR } from '@src/styles/color';
import { Dispatch, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';
interface firstChoiceType {
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  questionIndex: number;
  setInput: Dispatch<SetStateAction<boolean>>;
  setChat: Dispatch<SetStateAction<(string | StaticImageData)[]>>;
}

function FirstChoiceAnswer({ setQuestionIndex, questionIndex, setInput, setChat }: firstChoiceType) {
  return (
    <StChoiceInput>
      <StButtonContainer
        onClick={() => {
          setChat((prev) => prev.concat(`A네 좋아요!`));
          setQuestionIndex(questionIndex + 1);
          setInput(false);
        }}>
        <BottomButton width={28.5} color={COLOR.ORANGE_1} text={'네 좋아요!'} />
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

  @media screen and (min-width: 1920px) {
    margin: 0 -40rem;
  }
  @media screen and (min-width: 766px) {
    margin: 0 -3.5rem;
  }
`;
