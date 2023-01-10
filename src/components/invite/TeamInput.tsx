import { FONT_STYLES } from '@src/styles/fontStyle';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import React from 'react';
interface labelProps {
  label: string;
  placeholder: string;
  validation: RegExp;
  pattern?: string;
  alertMsg: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputVal: string;
}
function TeamInput(props: labelProps) {
  const { label, placeholder, validation, alertMsg, pattern, setInput, inputVal } = props;
  const validate = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (!validation.test(value) && value !== '') alert(alertMsg);
    else {
      setInput(value);
    }
  };
  return (
    <StTeamInput>
      <StLabelWrapper>
        <StText>{label}</StText>
      </StLabelWrapper>
      <StInput value={inputVal} placeholder={placeholder} pattern={pattern} onInput={(e) => validate(e)} />
    </StTeamInput>
  );
}

export default TeamInput;

const StTeamInput = styled.div`
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

const StText = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_16};
`;

const StInput = styled.input`
  width: 121.428571429%;
  padding-top: 1.82142856rem;
  padding-bottom: 2.06428571rem;
  padding-left: 1.45714285rem;
  border: 0.1rem solid #7e7e7e;
  border-radius: 0.60714286rem;
  background: #ffffff;
  font-size: 1.7rem;
  ${FONT_STYLES.NEXON_R_16};
  transform: scale(0.8235);
  transform-origin: left top;
  &::placeholder {
    color: ${COLOR.GRAY_7E};
  }
  :focus {
    outline: none;
  }
`;
