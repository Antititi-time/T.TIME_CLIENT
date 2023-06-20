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
  margin-top: 17.9rem;
  touch-action: none;

  @media screen and (min-width: 766px) {
    margin-top: 13.8rem;
  }

  img {
    width: 20rem;
    height: 20rem;
    margin-top: 2.1rem;

    @media screen and (min-width: 766px) {
      width: 24rem;
      height: 24rem;
      margin-top: 0.8rem;
    }
  }
`;
const StLoadingText = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_20};

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_24};
  }
`;
