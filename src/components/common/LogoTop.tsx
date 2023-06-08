import styled from 'styled-components';
import { imgTopLogo } from 'public/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import Link from 'next/link';

function LogoTop() {
  return (
    <StLogoTop>
      <Link href="/">
        <ImageDiv src={imgTopLogo} alt="T.time" className="imgTopLogo" fill={true} />
      </Link>
    </StLogoTop>
  );
}

export default LogoTop;

const StLogoTop = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100vw;
  height: 5.8rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.5rem);

  @media screen and (max-width: 765px) {
    justify-content: center;
  }

  @media screen and (min-width: 766px) and (max-width: 1921px) {
    justify-content: left;
    padding-left: 4rem;
  }

  .imgTopLogo {
    position: relative;
    width: 5.8rem;
    height: 3rem;
  }
`;
