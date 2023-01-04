import styled from 'styled-components';
import { imgTopLogo } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';

function LogoTop() {
  return (
    <StLogoTop>
      <ImageDiv src={imgTopLogo} alt="T.time" className="imgTopLogo" />
    </StLogoTop>
  );
}

export default LogoTop;

const StLogoTop = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5.8rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;
