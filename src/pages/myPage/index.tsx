import LogoTop from '@src/components/common/LogoTop';
import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';
import { useQuery } from 'react-query';
import { getMyPage } from '@src/services';
import router from 'next/router';
import { useState } from 'react';
import NonePage from '@src/components/myPage/NonePage';
import BottomButton from '@src/components/common/BottomButton';
import ToolTip from '@src/components/common/ToolTip';

interface myPageDataType {
  date: string;
  teamName: string;
  teamId: string;
}
function MyPage() {
  const { data } = useQuery('myPageData', () => getMyPage(localStorage.getItem('accessToken')), {
    retry: false,
    onSuccess: ({ history }) => {
      if (history.length === 0) {
        setIsNone(true);
      }
    },
  });
  const userId = data ? data.userId : null;
  const [isNone, setIsNone] = useState(false);
  return (
    <StMyPage>
      <LogoTop />
      <ToolTip top={5.8} />
      <StLogoutBtn
        onClick={() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('nickName');
          router.push('/organizerOnboarding');
        }}>
        Logout
      </StLogoutBtn>
      <StMainContainer>
        <StResultWrapper>
          <StTitle>{data?.userName}의 지난 T.time</StTitle>
          {isNone ? (
            <NonePage />
          ) : (
            <StResultContainer>
              {data?.history.map(({ date, teamName, teamId }: myPageDataType) => {
                const options: Intl.DateTimeFormatOptions = {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                };
                const dateObj = new Date(date);
                const processDate = dateObj.toLocaleDateString('ko-kr', options).replaceAll(' ', '');
                return (
                  <StResult key={teamName}>
                    <StDate>진행일 : {processDate}</StDate>
                    <StTeam>
                      ‘{teamName}’ 팀의 <span>T</span>
                      <span>.</span>time
                    </StTeam>
                    <StButtonWrapper>
                      <StResultBtn onClick={() => router.push(`myResult/${teamId}/${userId}`)}>
                        개인 결과 보기
                      </StResultBtn>
                      <StResultBtn
                        onClick={() => {
                          router.push(`teamResult/${teamId}/${userId}`);
                        }}>
                        팀 결과 보기
                      </StResultBtn>
                    </StButtonWrapper>
                  </StResult>
                );
              })}
            </StResultContainer>
          )}
          <StBtnWrapper onClick={() => router.push('/')}>
            <BottomButton color={COLOR.ORANGE_1} width={28.2} text="메인으로 돌아가기" />
          </StBtnWrapper>
        </StResultWrapper>
      </StMainContainer>
    </StMyPage>
  );
}
export default MyPage;

const StMyPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const StMainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${COLOR.IVORY_3};
`;
const StResultWrapper = styled.div`
  width: 35.6rem;
`;

const StResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
const StResult = styled.div`
  width: 100%;
  height: 12.7rem;
  padding: 1.2rem;
  border-radius: 1.2rem;
  background-color: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
`;
const StLogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  width: 5.7rem;
  height: 2.6rem;
  border: 0.2rem solid ${COLOR.GRAY_7E};
  border-radius: 2rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12}
  z-index: 3;
`;
const StTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1.6rem;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_B_20};
`;
const StDate = styled.div`
  height: 1.4rem;
  margin-bottom: 0.8rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12}
  line-height: 1.4rem;
`;
const StTeam = styled.h4`
  height: 2.2rem;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 140%;
  span:first-child {
    color: ${COLOR.ORANGE_1};
  }
  span:last-child {
    color: ${COLOR.BLUE_TEXT};
  }
`;
const StButtonWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2.5rem;
`;
const StResultBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 3.4rem;
  border-radius: 2rem;
  color: ${COLOR.WHITE_100};
  ${FONT_STYLES.PRETENDARD_B_16}
  &:nth-of-type(1) {
    background-color: ${COLOR.ORANGE_1};
  }
  &:nth-of-type(2) {
    background-color: ${COLOR.BLUE_TEXT};
  }
`;

const StBtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`;
