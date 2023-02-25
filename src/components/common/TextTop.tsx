import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';

interface TextTopProps {
  text: string;
}

function TextTop({ text }: TextTopProps) {
  const range = Math.floor((20 / 100) * 100);
  return (
    <StTest>
      <Progress>
        <Dealt range={range} />
      </Progress>
      <StTextTop>{text}</StTextTop>
    </StTest>
  );
}

export default TextTop;

const StTest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
`;

const StTextTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  flex-direction: column;
  min-width: 39rem;
  width: 100vw;
  height: 5.8rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(0.5rem);
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_B_20}
`;

const Progress = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${COLOR.GRAY_EC};
`;

const Dealt = styled.div<{ range: number }>`
  width: ${(props) => props.range + '%'};
  height: 100%;
  background-color: ${COLOR.ORANGE_1};
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  transition: all 1s;
`;
