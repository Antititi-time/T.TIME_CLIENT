import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { Button1 } from '@src/assets/icons/index';
import { Button2 } from '@src/assets/icons/index';
import { Button3 } from '@src/assets/icons/index';
import { Button4 } from '@src/assets/icons/index';
import { Button5 } from '@src/assets/icons/index';
import { COLOR } from '@src/styles/color';

function ChoiceAnswer() {
  return (
    <StChoiceInput>
      <ImageDiv src={Button1} alt="버튼 1번" />
      <ImageDiv src={Button2} alt="버튼 2번" />
      <ImageDiv src={Button3} alt="버튼 3번" />
      <ImageDiv src={Button4} alt="버튼 4번" />
      <ImageDiv src={Button5} alt="버튼 5번" />
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
