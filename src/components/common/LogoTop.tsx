import styled from 'styled-components';
import { imgTopLogo } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';

function TeamResult() {
  return (
    <StLogoTop>
      <ImageDiv src={imgTopLogo} alt="T.time" className="imgTopLogo" />
    </StLogoTop>
  );
}

export default TeamResult;

const StLogoTop = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.8rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;
