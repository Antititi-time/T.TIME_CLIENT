import styled, { css } from 'styled-components';
import { Button1 } from 'public/assets/icons/index';
import { Button2 } from 'public/assets/icons/index';
import { Button3 } from 'public/assets/icons/index';
import { Button4 } from 'public/assets/icons/index';
import { Button5 } from 'public/assets/icons/index';
import { COLOR } from '@src/styles/color';
import { Dispatch, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';
import { FONT_STYLES } from '@src/styles/fontStyle';

interface choiceType {
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  setGrade: Dispatch<SetStateAction<number>>;
  setInput: Dispatch<SetStateAction<boolean>>;
  setChat: Dispatch<SetStateAction<(string | StaticImageData)[]>>;
}

function ChoiceAnswer({ setQuestionIndex, setInput, setChat, setGrade }: choiceType) {
  const numbers = [Button1, Button2, Button3, Button4, Button5];
  const handleChoiceBtn = (index: number) => {
    setQuestionIndex((prev) => prev + 1);
    setInput(false);
    setGrade(index + 1);
    setChat((prev) => prev.concat(`A${index + 1}점`));
  };

  return (
    <StChoiceInput>
      {numbers.map((Item: string, index: number) => (
        <StSelectButton key={index} onClick={() => handleChoiceBtn(index)}>
          <StRoundButton text={index + 1}>{index + 1}</StRoundButton>
        </StSelectButton>
      ))}
    </StChoiceInput>
  );
}

export default ChoiceAnswer;

const StRoundButton = styled.div<{ text: number }>`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #6faedc;
  padding-top: 0.7rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: ${COLOR.WHITE_100};
  ${FONT_STYLES.PRETENDARD_EB_20};

  ${({ text }) =>
    text == 2 &&
    css`
      background-color: #86baba;
    `}
  ${({ text }) =>
    text == 3 &&
    css`
      background-color: #efc865;
    `}
    ${({ text }) =>
    text == 4 &&
    css`
      background-color: #ffa16c;
    `}
    ${({ text }) =>
    text == 5 &&
    css`
      background-color: #ff8159;
    `}
`;

const StSelectButton = styled.button`
  display: inline-block;
`;

const StChoiceInput = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 6.4rem;
  position: fixed;
  z-index: 1;
  gap: -1.2rem;
  bottom: 0;
  background-color: ${COLOR.WHITE_100};
  z-index: 1;
  ${FONT_STYLES.NEXON_R_13};

  @media screen and (min-width: 766px) {
    margin: 0 -4rem;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 -25.7rem;
    padding: 0 33rem;
  }
`;
