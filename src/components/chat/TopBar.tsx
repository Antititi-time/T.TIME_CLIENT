import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { useState } from 'react';
import { FONT_STYLES } from '@src/styles/fontStyle';

function TopBar() {
  const [teamName, setTeamName] = useState<string>("'안티티티티티티티티티티티타임'");
  const today = new Date();
  const dayString = today.toLocaleDateString('ko-kr');
  const dayIndex = today.getDay();
  const year = dayString.slice(0, 4);
  const month = dayString.slice(6, 7);
  const date = dayString.slice(9, 10);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const day = week[dayIndex];

  return (
    <div>
      <StTopBox>
        <StTopBarText>{teamName} 의 티타임</StTopBarText>
        <StTopBarToday>
          {year}년 {month}월 {date}일 {day}요일
        </StTopBarToday>
      </StTopBox>
    </div>
  );
}

export default TopBar;

const StTopBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 7rem;
  background-color: rgba(255, 252, 245, 0.8);
  backdrop-filter: blur(0.5rem);
`;

const StTopBarText = styled.p`
  padding-top: 2rem;
  text-align: center;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_B_16};
`;

const StTopBarToday = styled.p`
  padding-bottom: 1.6rem;
  text-align: center;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_R_12};
`;
