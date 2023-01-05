import { FONT_STYLES } from '@src/styles/fontStyle';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
interface labelProps {
  label: string;
  placeholder: string;
}
export default function TeamInfoBlank(props: labelProps) {
  const { label, placeholder } = props;
  return (
    <StContainer>
      <StLabelWrapper>
        <StIcon />
        <StText>{label}</StText>
      </StLabelWrapper>
      <StInput placeholder={placeholder} />
    </StContainer>
  );
}
const StContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.8rem;
  width: 29.4rem;
  height: 7.9rem;
`;
const StLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const StIcon = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
`;

const StText = styled.p`
  color: ${COLOR.BLUE_TEXT};
  font-style: ${FONT_STYLES.NEXON_B_16};
`;

const StInput = styled.input`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.7rem;
  padding-left: 1.2rem;
  border: 0.1rem solid #7e7e7e;
  border-radius: 0.5rem;
  background: #ffffff;
`;
