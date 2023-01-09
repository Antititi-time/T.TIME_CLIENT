import styled from 'styled-components';
import BottomButton from '@src/components/common/BottomButton';
import { COLOR } from '@src/styles/color';

function WatchMyResultButton() {
  return (
    <StWatchMyResultButton>
      <BottomButton width={28.5} color={COLOR.ORANGE_1} text={'개인 결과 보기'} />
    </StWatchMyResultButton>
  );
}

export default WatchMyResultButton;

const StWatchMyResultButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 39rem;
  height: 7.6rem;
  bottom: 0;
  z-index: 1;
  background-color: ${COLOR.WHITE_100};
`;
