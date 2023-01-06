import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';

function JoinTop() {
  return <StJoinTop>티타임 참여하기</StJoinTop>;
}

export default JoinTop;

const StJoinTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 39rem;
  width: 100vw;
  height: 5.8rem;
  background-color: ${COLOR.WHITE_100};
  backdrop-filter: blur(5px);
  opacity: 0.8;
  ${FONT_STYLES.PRETENDARD_B_20}
`;
