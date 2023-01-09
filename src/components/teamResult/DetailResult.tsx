import styled, { css } from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { useEffect, useState } from 'react';
import { getTeamDetailResult } from '@src/services';
import { useQuery } from 'react-query';
import { TeamDetailResult } from '@src/services/types';

function DetailResult() {
  const categoryList = ['협업', '동기부여', '성장', '개인생활', '건강'];
  const [questionOneList, setQuestionOneList] = useState<TeamDetailResult[]>([]);
  const [questionTwoList, setQuestionTwoList] = useState<TeamDetailResult[]>([]);
  const [currentTab, setCurrentTab] = useState(categoryList[0]);
  const { data } = useQuery('teamDetailResult', () => getTeamDetailResult(729262811, 'a'));

  useEffect(() => {
    data?.data.forEach((answer: TeamDetailResult) => {
      if (answer.questionNumber === 1) {
        setQuestionOneList((prev) => [...prev, answer]);
      } else {
        setQuestionTwoList((prev) => [...prev, answer]);
      }
    });
  }, [data]);

  console.log(questionOneList);
  console.log(questionTwoList);

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
          <StQuestionAnswerContainer>
            <StQuestion>Q1. 팀의 목표와 방향성에 대해 팀 모두가 동일하게 생각하고 있어요.</StQuestion>
            <StAnswerList>
              {questionOneList.map((answer) => {
                return (
                  <StAnswerItem key={answer.nickname}>
                    <StName max={answer.grade === 5} min={answer.grade === 1}>
                      {answer.nickname}
                    </StName>
                    <StAnswer>
                      <span>{answer.grade}</span>
                      <p>{answer.answer}</p>
                    </StAnswer>
                  </StAnswerItem>
                );
              })}
            </StAnswerList>
            <StQuestion>Q2. 팀의 목표와 방향성에 대해 팀 모두가 동일하게 생각하고 있어요.</StQuestion>
            <StAnswerList>
              {questionTwoList.map((answer) => {
                return (
                  <StAnswerItem key={answer.nickname}>
                    <StName max={answer.grade === 5} min={answer.grade === 1}>
                      {answer.nickname}
                    </StName>
                    <StAnswer>
                      <span>{answer.grade}</span>
                      <p>{answer.answer}</p>
                    </StAnswer>
                  </StAnswerItem>
                );
              })}
            </StAnswerList>
          </StQuestionAnswerContainer>
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
  height: 100%;
  padding-bottom: 1.8rem;
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

const StQuestionAnswerContainer = styled.div`
  & > div:first-of-type {
    margin-bottom: 4.4rem;
  }
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
  height: 100%;
  color: ${COLOR.BLACK};
`;

const StAnswerItem = styled.div`
  display: flex;
`;

const StName = styled.p<{ max: boolean; min: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.8rem;
  height: 2.2rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.GRAY_F9};
  background-color: ${({ max }) => max && COLOR.ORANGE_2};
  background-color: ${({ min }) => min && COLOR.BLUE_2};
  ${FONT_STYLES.PRETENDARD_SB_12};
`;

const StAnswer = styled.div`
  display: flex;
  align-items: center;
  width: 22.6rem;
  min-height: 2.2rem;
  margin-left: 0.4rem;
  border-radius: 0.8rem;
  background-color: ${COLOR.GRAY_F9};

  & > span {
    margin-left: 0.8rem;
    ${FONT_STYLES.PRETENDARD_B_12};
  }

  & > p {
    margin-left: 0.8rem;
    ${FONT_STYLES.PRETENDARD_M_12};
  }
`;
