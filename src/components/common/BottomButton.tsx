import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';

type BottonButtonProps = {
  width: number;
  color: string;
  text: string;
};

function BottomButton({ width, color, text }: BottonButtonProps) {
  return (
    <StBottomButton width={width} color={color}>
      <StText>{text}</StText>
    </StBottomButton>
  );
}

export default BottomButton;

interface StyledButtonProps {
  readonly width: number;
  readonly color: string;
}

const StBottomButton = styled.div<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  border-radius: 10rem;
  background-color: ${(props) => props.color};
`;

const StText = styled.p`
  color: ${COLOR.WHITE_100};
  ${FONT_STYLES.PRETENDARD_B_16};
`;
