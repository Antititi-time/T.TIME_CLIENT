import { imgLoading } from '@src/assets/images';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import styled from 'styled-components';
import ImageDiv from './ImageDiv';
function LoadingView() {
  return (
    <StLoadingView>
      <StLoadingText>Loading...</StLoadingText>
      <ImageDiv src={imgLoading} alt="loadingView"></ImageDiv>
    </StLoadingView>
  );
}
export default LoadingView;

const StLoadingView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 20rem;
    height: 20rem;
  }
`;
const StLoadingText = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_20};
`;
