import styled, { css } from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { useState } from 'react';

function DetailResult() {
  const categoryList = ['협업', '동기부여', '성장', '개인생활', '건강'];
  const [currentTab, setCurrentTab] = useState(categoryList[0]);

  return (
    <StDetailResult>
      <StTitle>상세 결과</StTitle>
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
            <StAnswerItem>
              <StName>가나다라</StName>
              <StAnswer>
                <span>5</span>
                <p>팀에서 일할수록 점점 더 잘하고 싶어져요.</p>
              </StAnswer>
            </StAnswerItem>
            <StAnswerItem>
              <StName>가나다라</StName>
              <StAnswer>
                <span>5</span>
                <p>팀에서 일할수록 점점 더 잘하고 싶어져요.</p>
              </StAnswer>
            </StAnswerItem>
            <StAnswerItem>
              <StName>가나다라</StName>
              <StAnswer>
                <span>5</span>
                <p>팀에서 일할수록 점점 더 잘하고 싶어져요.</p>
              </StAnswer>
            </StAnswerItem>
            <StAnswerItem>
              <StName>가나다라</StName>
              <StAnswer>
                <span>5</span>
                <p>팀에서 일할수록 점점 더 잘하고 싶어져요.</p>
              </StAnswer>
            </StAnswerItem>
            <StAnswerItem>
              <StName>가나다라</StName>
              <StAnswer>
                <span>5</span>
                <p>팀에서 일할수록 점점 더 잘하고 싶어져요.</p>
              </StAnswer>
            </StAnswerItem>
          </StAnswerList>
        </StTextContainer>
      </StResultContainer>
    </StDetailResult>
  );
}

export default DetailResult;

const StDetailResult = styled.div`
  height: 100%;
`;

const StTitle = styled.h2`
  margin-bottom: 0.6rem;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.24rem;
`;

const StResultContainer = styled.div`
  position: relative;
  left: -0.3rem;
  width: 31.1rem;
  //임시.
  height: 50rem;
  border-radius: 1.2rem;
  background-color: ${COLOR.WHITE_100};
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
  border-bottom: 0.2rem solid transparent;
  ${FONT_STYLES.PRETENDARD_M_12};
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 0.2rem solid ${COLOR.BLUE_TEXT};
      color: ${COLOR.BLUE_TEXT};
    `}
`;

const StTextContainer = styled.div`
  margin: 3.1rem 1.05rem 1.8rem 1.05rem;
`;

const StCategoryTitle = styled.h3`
  margin-bottom: 2.05rem;
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_20};
`;

const StQuestion = styled.p`
  margin-bottom: 1.2rem;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_14};
  line-height: 2rem;
`;

const StAnswerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 28.9rem;
  height: 17.6rem;
  color: ${COLOR.BLACK};
`;

const StAnswerItem = styled.div`
  display: flex;
`;

const StName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.8rem;
  height: 2.2rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.ORANGE_2};
  ${FONT_STYLES.PRETENDARD_SB_12};
`;

const StAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22.6rem;
  min-height: 2.2rem;
  margin-left: 0.4rem;
  border-radius: 0.8rem;
  background-color: ${COLOR.GRAY_F9};

  & > span {
    ${FONT_STYLES.PRETENDARD_B_12};
  }

  & > p {
    margin-left: 0.8rem;
    ${FONT_STYLES.PRETENDARD_M_12};
  }
`;
