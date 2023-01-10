import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { Button1 } from '@src/assets/icons/index';
import { Button2 } from '@src/assets/icons/index';
import { Button3 } from '@src/assets/icons/index';
import { Button4 } from '@src/assets/icons/index';
import { Button5 } from '@src/assets/icons/index';
import { COLOR } from '@src/styles/color';
import { useState } from 'react';

interface choiceType {
  setIndex: Dispatch<SetStateAction<number>>;
  index: number;
  setInput: Dispatch<SetStateAction<boolean>>;
  teamCode: number;
}

function ChoiceAnswer({ setIndex, index, setInput, teamCode }: choiceType) {
  const [choice, setChoice] = useState<any>(0);
  const numbers = [Button1, Button2, Button3, Button4, Button5];
  const handleChoiceBtn = (Item: any) => {
    setChoice(Item);
    setIndex(index + 1);
    setInput(false);
  };

  return (
    <StChoiceInput>
      {numbers.map((Item: any, index: any) => (
        <button key={index} onClick={(Item) => handleChoiceBtn(Item)}>
          <ImageDiv src={Item} alt={`버튼 ${index}번`} />
        </button>
      ))}
    </StChoiceInput>
  );
}

export default ChoiceAnswer;

const StChoiceInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39rem;
  height: 6.4rem;
  position: fixed;
  z-index: 1;
  gap: 2.6rem;
  bottom: 0;
  background-color: ${COLOR.WHITE_100};
`;
