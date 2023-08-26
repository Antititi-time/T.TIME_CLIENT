import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
interface props {
  teamName: string | string[] | undefined;
  questionIndex: number;
}

function TopBar({ teamName, questionIndex }: props) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const dayIndex = today.getDay();
  const weekList = ['일', '월', '화', '수', '목', '금', '토'];
  const day = weekList[dayIndex];

  const range = (questionIndex: number) => {
    if (questionIndex === 0) {
      return 0;
    }
    return ((questionIndex % 2 === 0 ? questionIndex - 2 : questionIndex - 1) / 2) * 10;
  };

  return (
    <StTopBar>
      <StProgress>
        <StProBar range={range(questionIndex) * 2} />
      </StProgress>
      <StTopBox>
        <StTopBarText>&apos;{teamName}&apos; 의 티타임</StTopBarText>
        <StTopBarToday>
          {year}년 {month}월 {date}일 {day}요일
        </StTopBarToday>
      </StTopBox>
    </StTopBar>
  );
}

export default TopBar;

const StTopBar = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StTopBox = styled.div`
  width: 100vw;
  height: 7rem;
  background-color: rgba(255, 252, 245, 0.8);
  backdrop-filter: blur(0.5rem);
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

const StProgress = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${COLOR.GRAY_EC};
`;

const StProBar = styled.div<{ range: number }>`
  width: ${(props) => props.range + '%'};
  height: 100%;
  background-color: ${COLOR.ORANGE_1};
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  transition: all 1s;
`;
