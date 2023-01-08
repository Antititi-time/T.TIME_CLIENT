import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';

function TopBar() {
  const teamName = "'안티티티티티티티티티티티타임'";
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-kr');
  const dayIndex = today.getDay();
  const year = dateString.slice(0, 4);
  const month = dateString.slice(6, 7);
  const date = dateString.slice(9, 10);
  const weekList = ['일', '월', '화', '수', '목', '금', '토'];
  const day = weekList[dayIndex];

  return (
    <StTopBox>
      <StTopBarText>{teamName} 의 티타임</StTopBarText>
      <StTopBarToday>
        {year}년 {month}월 {date}일 {day}요일
      </StTopBarToday>
    </StTopBox>
  );
}

export default TopBar;

const StTopBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 7rem;
  background-color: rgba(255, 252, 245, 0.8);
  backdrop-filter: blur(0.5rem);
  z-index: 1;
`;

const StTopBarText = styled.p`
  padding-top: 2rem;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_14};
  text-align: center;
`;

const StTopBarToday = styled.p`
  padding-bottom: 1.6rem;
  text-align: center;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_R_12};
`;
