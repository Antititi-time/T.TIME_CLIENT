import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import ImageDiv from '../common/ImageDiv';
import { SubmitButton } from '@src/assets/icons/index';
import { smallLogoIcon } from '@src/assets/icons/index';
import React, { useState } from 'react';

function InputAnswer() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <StForm onSubmit={onSubmit}>
      <ImageDiv src={smallLogoIcon} alt="small Input Logo" className="ButtonLogo" />
      <StInput onChange={onChange} value={value} placeholder="답변을 입력해주세요."></StInput>
      <button>
        <ImageDiv src={SubmitButton} alt="전송 버튼" className="SubmitButton" />
      </button>
    </StForm>
  );
}

export default InputAnswer;

const StForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39rem;
  height: 6.4rem;
  position: fixed;
  z-index: 2;
  bottom: 0;
  background-color: ${COLOR.WHITE_100};
  .ButtonLogo {
    width: 2.4rem;
    height: 4rem;
    margin-left: 1.6rem;
    margin-right: 0.8rem;
  }

  .SubmitButton {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    margin-right: 0.2rem;
  }
`;

const StInput = styled.input`
  width: 32.6rem;
  height: 4rem;
  border: 0.1rem solid ${COLOR.GRAY_EC};
  border-radius: 2.6rem;
  background: ${COLOR.GRAY_EC};
  font-size: 1.7rem;
  ${FONT_STYLES.NEXON_R_16};
  &::placeholder {
    color: ${COLOR.GRAY_7E};
    padding-left: 1.383rem;
  }
`;
