import styled, { css } from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { useEffect, useState } from 'react';
import { getTeamDetailResult } from '@src/services';
import { useQuery } from 'react-query';
import { TeamDetailResult } from '@src/services/types';
import { filterQuestionCategory } from '@src/hooks/FilterQuestionType';
import { QUESTION_TEXT } from '@src/constants/teamResult/questionText';
import { imgCategoryA, imgCategoryB, imgCategoryC, imgCategoryD, imgCategoryE } from '@src/assets/images';
import ImageDiv from '../common/ImageDiv';
import { CategoryType, CATEGORY_LIST } from '@src/constants/teamResult/categoryList';

interface TeamResultProps {
  teamId: number;
}

function DetailResult({ teamId }: TeamResultProps) {
  const [questionOneList, setQuestionOneList] = useState<TeamDetailResult[]>([]);
  const [questionTwoList, setQuestionTwoList] = useState<TeamDetailResult[]>([]);
  const [currentTab, setCurrentTab] = useState<CategoryType>('협업');
  const { data } = useQuery(
    ['teamDetailResult', currentTab],
    () => getTeamDetailResult(teamId, filterQuestionCategory(currentTab)),
    {
      enabled: !!teamId,
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    setQuestionOneList([]);
    setQuestionTwoList([]);
    data?.data.map((answer: TeamDetailResult) => {
      if (answer.questionNumber === 1) {
        setQuestionOneList((prev) => [...prev, answer]);
      } else {
        setQuestionTwoList((prev) => [...prev, answer]);
      }
    });
  }, [data, currentTab]);

  const handleSorting = (list: TeamDetailResult[]) => {
    const sortedList = list.sort((a, b) => {
      if (a.nickname < b.nickname) return -1;
      if (a.nickname > b.nickname) return 1;
      return 0;
    });
    return sortedList;
  };

  const handleNickname = (nickname: string) => {
    if (nickname.length > 4) {
      return nickname.slice(0, 3) + '...';
    } else {
      return nickname;
    }
  };

  const handleCategoryEmoticon = (category: string) => {
    switch (category) {
      case CATEGORY_LIST[0]:
        return imgCategoryA;
      case CATEGORY_LIST[1]:
        return imgCategoryB;
      case CATEGORY_LIST[2]:
        return imgCategoryC;
      case CATEGORY_LIST[3]:
        return imgCategoryD;
      case CATEGORY_LIST[4]:
        return imgCategoryE;
      default:
        return '';
    }
  };

  return (
    <StDetailResult>
      <StTitle>상세 결과</StTitle>
      <StResultContainer>
        <StTab>
          {CATEGORY_LIST.map((category) => (
            <StTabItem key={category} isActive={currentTab === category} onClick={() => setCurrentTab(category)}>
              {category}
            </StTabItem>
          ))}
        </StTab>
        <StTextContainer>
          <StCategoryTitleContainer>
            <ImageDiv src={handleCategoryEmoticon(currentTab)} alt={currentTab} className="emoticon" fill />
            <h3>{currentTab}</h3>
          </StCategoryTitleContainer>
          <StQuestionAnswerContainer>
            <StQuestion>Q1. {QUESTION_TEXT[currentTab][0]}</StQuestion>
            <StAnswerList>
              {handleSorting(questionOneList).map(({ grade, nickname, answer }, index) => (
                <StAnswerItem key={index}>
                  <StName maxStyle={grade === 5} minStyle={grade === 1}>
                    {handleNickname(nickname)}
                  </StName>
                  <StAnswer>
                    <span>{grade}</span>
                    <p>{answer}</p>
                  </StAnswer>
                </StAnswerItem>
              ))}
            </StAnswerList>
            <StQuestion>Q2. {QUESTION_TEXT[currentTab][1]}</StQuestion>
            <StAnswerList>
              {handleSorting(questionTwoList).map(({ grade, nickname, answer }, index) => (
                <StAnswerItem key={index}>
                  <StName maxStyle={grade === 5} minStyle={grade === 1}>
                    {nickname}
                  </StName>
                  <StAnswer>
                    <span>{grade}</span>
                    <p>{answer}</p>
                  </StAnswer>
                </StAnswerItem>
              ))}
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

const StCategoryTitleContainer = styled.div`
  display: flex;
  & > h3 {
    margin-bottom: 2rem;
    color: ${COLOR.BLUE_TEXT};
    ${FONT_STYLES.NEXON_B_20};
  }

  .emoticon {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.5rem;
  }
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

const StName = styled.p<{ maxStyle: boolean; minStyle: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.8rem;
  height: 2.2rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.GRAY_F9};
  background-color: ${({ maxStyle }) => maxStyle && COLOR.ORANGE_2};
  background-color: ${({ minStyle }) => minStyle && COLOR.BLUE_2};
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
    height: 100%;
    padding: 0.4rem 0;
    margin-left: 0.8rem;
    ${FONT_STYLES.PRETENDARD_B_12};
  }

  & > p {
    padding: 0.4rem 0.8rem 0.4rem 0;
    margin-left: 0.8rem;
    ${FONT_STYLES.PRETENDARD_M_12};
  }
`;
