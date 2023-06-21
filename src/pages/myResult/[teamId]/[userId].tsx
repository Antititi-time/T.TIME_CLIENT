import SEO from '@common/SEO';
import LogoTop from 'src/components/common/LogoTop';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import ImageDiv from '@common/ImageDiv';
import { icDots } from 'public/assets/icons';
import { UserData } from '@src/mocks/types';
import { RESULT_MESSAGE } from '@src/constants/myResult/resultMessage';
import { setConstantIndex } from '@src/hooks/SetConstantIndex';
import { imgTopLogo } from 'public/assets/images';
import ResultGraph from '@src/components/myResult/ResultGraph';
import { getMyResult } from '@src/services';
import BottomBtnContainer from '@src/components/myResult/BottomBtnContainer';
import LoadingView from '@common/LoadingView';
import MyResultModal from '@src/components/shareModule/MyResultModal';
import { useRouter } from 'next/router';
import { imgCenturyGothicLogo } from 'public/assets/images';
import { DOMAIN } from '@src/constants/domain';
import ToolTip from '@common/ToolTip';
import Link from 'next/link';

interface ctxType {
  query: {
    userId: string;
    teamId: string;
  };
}
interface userIdType {
  userId: string;
  teamId: number;
  myResultData: UserData;
}

function MyResult({ userId, teamId, myResultData }: userIdType) {
  const [resultData, setResultData] = useState<UserData>();
  const [resultCharacter, setResultCharacter] = useState(0);
  const [isVisitor, setIsVisitor] = useState(false);
  const { isReady, push } = useRouter();

  const [modalState, setModalState] = useState(false);
  useEffect(() => {
    if (myResultData.result.length < 5) push('/unfinished');
    setResultData(myResultData);
    const inputData = setConstantIndex(myResultData?.result[4]?.questionType);
    setResultCharacter(inputData);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    if (localStorage.getItem('accessToken')) {
      setIsVisitor(false);
    } else {
      setIsVisitor(true);
    }
  }, [isReady]);

  const handleDate = (date: string) => {
    return date && date.replaceAll('-', '.');
  };

  return (
    <StmyResultPage>
      <SEO
        title="T.time | 팀과 내가 함께 성장하는 시간"
        ogTitle={myResultData.nickname + '님의 T.time 결과를 확인해보세요'}
        description="개인결과는 링크가 있는 사람만 볼 수 있어요.☕️"
        image="/img_personalShare.png"
        url={DOMAIN + `/myResult/${teamId}/` + userId}
      />
      <LogoTop />
      <ToolTip top={5.8} />
      {resultData ? (
        <StMyResult>
          {modalState && (
            <MyResultModal
              userId={userId}
              teamId={String(teamId)}
              userName={resultData.nickname}
              setModalState={setModalState}
            />
          )}
          <Link href="/myPage">
            <StMypageLink>지난 T.time 확인하기</StMypageLink>
          </Link>
          <StResultCard>
            <StInfoContainer>
              <p className="date">{handleDate(resultData.date)}</p>
              <p className="teamName">&#39;{resultData.teamName}&#39;</p>
              <div className="resultTitle">
                <p>
                  <span className="userName">{resultData.nickname}</span> 님의
                </p>
                <StTeamResultText>
                  <p>개인</p>
                  <img src={imgCenturyGothicLogo.src} alt="T.time" className="logo" />
                  <p>결과</p>
                </StTeamResultText>
              </div>
            </StInfoContainer>
            <StUserImage src={RESULT_MESSAGE[resultCharacter]?.imageUrl}></StUserImage>
            <StResultTitle>
              <p className="feedback">{RESULT_MESSAGE[resultCharacter]?.feedback}</p>
              <p>{RESULT_MESSAGE[resultCharacter]?.title}</p>
            </StResultTitle>
            <StDotsImage>
              <ImageDiv src={icDots} alt="dots" className="dots" fill={false} />
            </StDotsImage>
            <StResultDetail>
              {RESULT_MESSAGE[resultCharacter]?.resultDetail.map((text: string) => (
                <p key={text}>{text}</p>
              ))}
            </StResultDetail>
            <StRecommendText>
              {RESULT_MESSAGE[resultCharacter]?.recommendText.map((text: string) => (
                <p key={text}>
                  • <> </>
                  {text}
                </p>
              ))}
            </StRecommendText>
            <article style={{ width: '100%' }}>
              <StGraphTitle>전체 항목 결과 그래프</StGraphTitle>
              <StGraphContainer>
                <ResultGraph result={resultData?.result} />
              </StGraphContainer>
            </article>
            <StCardFooter>
              <img src={imgTopLogo.src} alt="logo-img" />
              나와 팀 함께 성장하는 시간
            </StCardFooter>
          </StResultCard>
        </StMyResult>
      ) : (
        <LoadingView />
      )}
      {!isVisitor && <BottomBtnContainer teamId={String(teamId)} userId={userId} setModalState={setModalState} />}
    </StmyResultPage>
  );
}
export default MyResult;
export const getServerSideProps = async (ctx: ctxType) => {
  const userId = ctx.query.userId;
  const teamId = parseInt(ctx.query.teamId);
  const myResultData = await getMyResult(userId, teamId);
  return { props: { userId, teamId, myResultData } };
};
const StMypageLink = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_B_16};
  text-decoration-line: underline;
  text-underline-position: under;
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_B_18};
  }
`;

const StmyResultPage = styled.div``;

const StMyResult = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

const StResultCard = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 34.6rem;
  min-height: 104.4rem;
  padding: 2.5rem 2.2rem 4rem 2.2rem;
  margin: 2.6rem 2.2rem 12rem 2.2rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 766px) {
    width: 68.6rem;
    min-height: 146rem;
    padding-top: 3.2rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media screen and (min-width: 1200px) {
    width: 84.8rem;
  }
`;
const StInfoContainer = styled.div`
  width: 100%;

  .date {
    ${FONT_STYLES.PRETENDARD_M_12};
    color: ${COLOR.GRAY_9E};
    line-height: 1.432rem;
    @media screen and (min-width: 766px) {
      ${FONT_STYLES.PRETENDARD_M_14};
      line-height: 2.2rem;
    }
  }
  .teamName {
    ${FONT_STYLES.NEXON_B_16};
    margin: 0.8rem 0 1.2rem 0;
    color: ${COLOR.GRAY_7E};
    line-height: 2.24rem;
  }
  .resultTitle {
    ${FONT_STYLES.NEXON_B_22};
    color: ${COLOR.BLACK};
    line-height: 2.64rem;
    @media screen and (min-width: 766px) {
      ${FONT_STYLES.NEXON_B_24};
      margin-bottom: 0;
    }
  }
  .resultTitle p {
    margin-bottom: 0.5rem;
    @media screen and (min-width: 766px) {
      ${FONT_STYLES.NEXON_B_24};
      margin-bottom: 0;
    }
  }
  .userName {
    color: ${COLOR.BLUE_TEXT};
  }
`;
const StTeamResultText = styled.div`
  display: flex;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_22}
  line-height: 2.64rem;
  .logo {
    position: relative;
    width: 7.2rem;
    height: 2.8rem;
    bottom: 0.3rem;
    margin: 0 0.4rem;
    @media screen and (min-width: 766px) {
      width: 8rem;
      height: 3.2rem;
      margin: 0 0.4rem;
      top: 0rem;
    }
  }
`;
const StDotsImage = styled.div`
  width: 2.2rem;
  min-height: 0.4rem;
  margin: 2.3rem 0 1.2rem 0;
  @media screen and (min-width: 766px) {
    padding-top: 3rem;
    margin-bottom: 1.6rem;
  }
`;
const StUserImage = styled.img`
  .userImage img {
    width: 30rem;
    height: 20rem;
  }
  width: 30rem;
  height: 20rem;
  margin: 6.2rem 7.6rem 4rem 7.6rem;
  @media screen and (min-width: 766px) {
    width: 36rem;
    height: 24rem;
  }
`;
const StResultTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 18.2rem;
  height: 4.2rem;
  color: ${COLOR.ORANGE_TEXT};
  ${FONT_STYLES.PRETENDARD_EB_20};
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_24};
  }
  white-space: nowrap;
  .feedback {
    margin-bottom: 0.4rem;
    color: ${COLOR.BLUE_TEXT};
    ${FONT_STYLES.PRETENDARD_B_12};
    @media screen and (min-width: 766px) {
      ${FONT_STYLES.PRETENDARD_B_20};
    }
  }
`;
const StResultDetail = styled.div`
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_R_14};
  font-size: 1.3rem;
  p {
    display: flex;
    justify-content: center;
    @media screen and (min-width: 766px) {
      ${FONT_STYLES.PRETENDARD_R_20};
      line-height: 3.6rem;
    }
  }
`;
const StRecommendText = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1.6rem 1.1rem 1.6rem 1.1rem;
  margin: 1.8rem 0 4.4rem 0;
  border: 0.2rem solid ${COLOR.IVORY_3};
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_5};
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_M_12};
  line-height: 1.8rem;
  white-space: pre-wrap;
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_R_20};
    padding-left: 2.4rem;
    line-height: 3.6rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  p {
    margin: 0.35rem 0rem 0.35rem 0.9rem;
    text-indent: -0.9rem;
    white-space: pre-wrap;
    @media screen and (min-width: 766px) {
      white-space: nowrap;
    }
  }
`;
const StGraphTitle = styled.p`
  width: 30.4rem;
  ${FONT_STYLES.NEXON_B_16};
  white-space: nowrap;
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_20};
  }
`;
const StGraphContainer = styled.article`
  width: 100%;
  height: 15rem;
  padding: 2.2rem 1.5rem 2.2rem 2rem;
  margin: 1rem 0 4.6rem 0;
  border-radius: 1.4rem;
  border: 0.2rem solid ${COLOR.IVORY_3};
  background-color: ${COLOR.IVORY_5};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 766px) {
    height: 24.3rem;
    margin-top: 2.5rem;
    padding: 1.5rem 2.4rem 1.5rem 2.4rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 1.5rem 4rem 1.5rem 4rem;
  }
`;
const StCardFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 14.1rem;
  height: 5.6rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_R_12};
  white-space: nowrap;

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_R_16};
    margin-bottom: 3rem;
  }
  img {
    width: 5.8rem;
    height: 3rem;
    margin-bottom: 1.2rem;
    @media screen and (min-width: 766px) {
      width: 8.7rem;
      height: 4.5rem;
    }
  }
`;
