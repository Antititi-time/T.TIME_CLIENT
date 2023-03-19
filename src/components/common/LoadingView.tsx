import { imgLoading } from 'public/assets/images';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import styled from 'styled-components';
function LoadingView() {
  return (
    <StLoadingView>
      <StLoadingText>Loading...</StLoadingText>
      <img src={imgLoading.src} alt="loadingView" />
    </StLoadingView>
  );
}
export default LoadingView;

const StLoadingView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50rem;
  touch-action: none;
  img {
    width: 20rem;
    height: 20rem;
  }
`;
const StLoadingText = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_20};
`;
