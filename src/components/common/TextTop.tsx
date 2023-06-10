import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';
import ImageDiv from './ImageDiv';
import { imgTopLogo } from 'public/assets/images';
interface TextTopProps {
  text: string;
}

function TextTop({ text }: TextTopProps) {
  return (
    <>
      <StTextTop>
        <ImageDiv src={imgTopLogo} alt="T.time" className="imgTopLogo" fill={true} />
        {text}
      </StTextTop>
    </>
  );
}

export default TextTop;

const StTextTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: row;
  min-width: 39rem;
  width: 100vw;
  height: 5.8rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(0.5rem);
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_B_20}

  .imgTopLogo {
    @media screen and (max-width: 766px) {
      display: hidden;
      width: 0;
      height: 0;
    }
    position: absolute;
    left: 0;
    width: 5.8rem;
    height: 3rem;
    margin-left: 4rem;
  }
`;
