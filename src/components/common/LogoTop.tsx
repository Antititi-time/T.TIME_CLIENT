import styled from 'styled-components';
import { imgTopLogo } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';

function LogoTop() {
  return (
    <StLogoTop>
      <ImageDiv src={imgTopLogo} alt="T.time" className="imgTopLogo" fill={true} />
    </StLogoTop>
  );
}

export default LogoTop;

const StLogoTop = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: sticky;
  top: 0;
  width: 100vw;
  height: 5.8rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  .imgTopLogo {
    position: relative;
    width: 5.8rem;
    height: 3rem;
  }
`;
