import LogoTop from 'src/components/common/LogoTop';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { icDots } from '@src/assets/icons';
import { UserData } from '@src/mocks/types';
import { RESULT_MESSAGE } from '@src/constants/myResult/resultMessage';
import { setConstantIndex } from '@src/hooks/SetConstantIndex';
import { imgTopLogo } from '@src/assets/images';
// import { logoIcon } from '@src/assets/icons';
import ResultGraph from '@src/components/myResult/ResultGraph';
import { getMyResult } from '@src/services';
interface ctxType {
  query: {
    userId: string;
  };
}
interface userIdType {
  userId: number;
}
function MyResult({ userId }: userIdType) {
  const [resultData, setResultData] = useState<UserData>();
  const [resultCharacter, setResultCharacter] = useState(0);
  const { data } = useQuery('userData', () => getMyResult(userId));

  useEffect(() => {
    setResultData(data);
    const inputData = setConstantIndex(data?.result[4].questionType);
    setResultCharacter(inputData);
  }, [data]);

  return (
    <StmyResultPage>
      <LogoTop />
      {resultData ? (
        <StMyResult>
          <StWarningMessage>
            <p>잠깐!</p>
            카카오톡에서 접속 시, 이미지 저장을 위해 아이폰 사용자는 사파리로 이동해주세요
          </StWarningMessage>
          <StResultCard>
            <StInfoContainer>
              <p className="date">{resultData.date}</p>
              <p className="teamName">&#39;{resultData.teamName}&#39;</p>
              <div className="resultTitle">
                <p>
                  <span className="userName">{resultData.nickname}</span> 님의
                </p>
                <p>개인 T.time 결과</p>
              </div>
            </StInfoContainer>
            <StUserImage src={RESULT_MESSAGE[resultCharacter].imageUrl} />
            <StResultTitle>
              <p className="feedback">{RESULT_MESSAGE[resultCharacter].feedback}</p>
              <p>{RESULT_MESSAGE[resultCharacter].title}</p>
            </StResultTitle>
            <StDotsImage src={icDots.src}></StDotsImage>
            <StResultDetail>
              {RESULT_MESSAGE[resultCharacter].resultDetail.map((text: string) => (
                <p key={text}>{text}</p>
              ))}
            </StResultDetail>
            <StRecommendText>
              {RESULT_MESSAGE[resultCharacter].recommendText.map((text: string) => (
                <p key={text}>• {text}</p>
              ))}
            </StRecommendText>
            <article>
              <StGraphTitle>전체 항목 결과 그래프</StGraphTitle>
              <StGraphContainer>
                <ResultGraph result={resultData.result} />
              </StGraphContainer>
            </article>
            <StCardFooter>
              <img src={imgTopLogo.src} />
              나와 팀 함께 성장하는 시간
            </StCardFooter>
          </StResultCard>
        </StMyResult>
      ) : (
        <>로딩중</>
      )}
    </StmyResultPage>
  );
}
export default MyResult;

const StmyResultPage = styled.div``;

const StMyResult = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;
const StWarningMessage = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 19.7rem;
  margin: 2.2rem 9.7rem 1.2rem 9.7rem;
  color: ${COLOR.GRAY_9E};
  ${FONT_STYLES.PRETENDARD_M_12};
  p {
    margin-bottom: 0.6rem;
    color: ${COLOR.ORANGE_1};
    ${FONT_STYLES.PRETENDARD_B_12};
  }
`;
const StResultCard = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 34.6rem;
  min-height: 104.4rem;
  padding: 2.5rem 2.2rem 0.8rem 2.2rem;
  margin: 0rem 2.2rem 6rem 2.2rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
`;
const StInfoContainer = styled.div`
  width: 100%;
  .date {
    ${FONT_STYLES.PRETENDARD_M_12};
    color: ${COLOR.GRAY_9E};
  }
  .teamName {
    ${FONT_STYLES.NEXON_B_16};
    color: ${COLOR.GRAY_7E};
    margin: 0.8rem 0 1.2rem 0;
  }
  .resultTitle {
    ${FONT_STYLES.NEXON_B_22};
    color: ${COLOR.BLACK};
  }
  .resultTitle p {
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
  .userName {
    color: ${COLOR.BLUE_TEXT};
  }
`;
const StDotsImage = styled.img`
  width: 2.2rem;
  height: 0.4rem;
  margin: 2.3rem 0 1.2rem 0;
`;
const StUserImage = styled.img`
  width: 30rem;
  height: 20rem;
  margin: 6.2rem 7.6rem 5rem 7.6rem;
`;
const StResultTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 18.2rem;
  height: 4.2rem;
  color: ${COLOR.ORANGE_TEXT};
  ${FONT_STYLES.PRETENDARD_EB_20};
  white-space: nowrap;
  .feedback {
    margin-bottom: 0.4rem;
    color: ${COLOR.BLUE_TEXT};
    ${FONT_STYLES.PRETENDARD_B_12};
  }
`;
const StResultDetail = styled.div`
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_R_14};
  font-size: 1.3rem;
  p {
    display: flex;
    justify-content: center;
  }
`;
const StRecommendText = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  width: 30.4rem;
  height: auto;
  padding: 1.6rem 1.1rem 1.6rem 1.1rem;
  margin: 1.8rem 0 4.4rem 0;
  border: 0.2rem solid ${COLOR.IVORY_3};
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_5};
  color: ${COLOR.BLACK};
  ${FONT_STYLES.PRETENDARD_M_12};
  line-height: 1.8rem;

  p {
    margin: 0.35rem 0rem 0.35rem 0.9rem;
    text-indent: -0.9rem;
  }
`;
const StGraphTitle = styled.p`
  width: 30.4rem;
  ${FONT_STYLES.NEXON_B_16};
  white-space: nowrap;
`;
const StGraphContainer = styled.article`
  width: 30.4rem;
  height: 15rem;
  padding: 2.5rem 1.5rem 2.5rem 2rem;
  margin: 1rem 0 4.6rem 0;
  border-radius: 1.4rem;
  border: 0.2rem solid ${COLOR.IVORY_3};
  background-color: ${COLOR.IVORY_5};
`;
const StCardFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 14.1rem;
  height: 5.6rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_R_12};
  img {
    width: 5.8rem;
    height: 3rem;
    margin-bottom: 1.2rem;
  }
`;
export async function getServerSideProps(ctx: ctxType) {
  const userId = parseInt(ctx.query.userId);
  return { props: { userId } };
}
