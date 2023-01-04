import styled, { css } from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { useState } from 'react';

function DetailResult() {
  const categoryList = ['협업', '동기부여', '성장', '개인생활', '건강'];
  const [currentTab, setCurrentTab] = useState(categoryList[0]);
  return (
    <StDetailResult>
      <h2>상세 결과</h2>
      <StResultContainer>
        <StTab>
          {categoryList.map((category) => {
            return (
              <StTabItem key={category} isActive={currentTab === category} onClick={() => setCurrentTab(category)}>
                {category}
              </StTabItem>
            );
          })}
        </StTab>
        <StTextContainer>
          <StCategoryTitle>{currentTab}</StCategoryTitle>
          <StQuestion>Q1. 팀의 목표와 방향성에 대해 팀 모두가 동일하게 생각하고 있어요.</StQuestion>
          <StAnswerList>
            <StName>가나다라</StName>
            <StAnswer>5 팀에서 일할수록 점점 더 잘하고 싶어져요.</StAnswer>
          </StAnswerList>
        </StTextContainer>
      </StResultContainer>
    </StDetailResult>
  );
}

export default DetailResult;

const StDetailResult = styled.div`
  height: 100%;

  & > h2 {
    ${FONT_STYLES.NEXON_B_16};
    margin-bottom: 0.6rem;
  }
`;

const StResultContainer = styled.div`
  position: relative;
  left: -0.3rem;
  width: 31.1rem;
  //임시
  height: 50rem;
  background-color: ${COLOR.WHITE_100};
  border-radius: 1.2rem;
`;

const StTab = styled.ul`
  display: flex;
`;

const StTabItem = styled.li<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.2rem;
  height: 4.4rem;
  ${FONT_STYLES.PRETENDARD_M_12};
  border-bottom: 0.2rem solid transparent;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${COLOR.BLUE_TEXT};
      border-bottom: 0.2rem solid ${COLOR.BLUE_TEXT};
    `}
`;

const StTextContainer = styled.div`
  margin: 3.1rem 1.05rem 1.8rem 1.05rem;
`;

const StCategoryTitle = styled.h3`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_20};
`;

const StQuestion = styled.p`
  ${FONT_STYLES.NEXON_B_14};
  font-weight: 900;
`;

const StAnswerList = styled.div`
  width: 28.9rem;
`;

const StName = styled.p`
  ${FONT_STYLES.PRETENDARD_SB_12};
`;

const StAnswer = styled.p`
  ${FONT_STYLES.PRETENDARD_M_12};
`;
