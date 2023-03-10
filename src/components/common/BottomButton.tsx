import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';

interface BottomButtonProps {
  width: number;
  color: string;
  text?: string;
  handler?: () => void;
}

function BottomButton({ width, color, text, handler }: BottomButtonProps) {
  return (
    <StBottomButton width={width} color={color} onClick={handler}>
      <StText>{text}</StText>
    </StBottomButton>
  );
}

export default BottomButton;

const StBottomButton = styled.div<BottomButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}rem;
  padding: 1.3rem 0rem;
  border-radius: 10rem;
  background-color: ${(props) => props.color};
`;

const StText = styled.p`
  color: ${COLOR.WHITE_100};
  ${FONT_STYLES.PRETENDARD_B_16};
`;
