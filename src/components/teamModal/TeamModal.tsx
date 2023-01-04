import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
export default function TeamModal() {
  return (
    <StBackground>
      <StTeamModal></StTeamModal>
    </StBackground>
  );
}
const StBackground = styled.main`
  width: 39rem;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  overflow: hidden;
`;
const StTeamModal = styled.section`
  width: 32.8rem;
  height: 29.7rem;
  margin: 11.5rem 3.1rem 0rem 3.1rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
`;
const StModalHeader = styled.header`
  display: block;
  width: 7rem;
  margin: 2.4rem 12.9rem 0rem 12.9rem;
  font-style: ${FONT_STYLES.PRETENDARD_B_20};
`;
