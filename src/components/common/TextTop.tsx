import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';

interface TextTopProps {
  text: string;
}

function TextTop({ text }: TextTopProps) {
  return <StTextTop>{text}</StTextTop>;
}

export default TextTop;

const StTextTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  min-width: 39rem;
  width: 100vw;
  height: 5.8rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(0.5rem);
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_B_20}
`;
