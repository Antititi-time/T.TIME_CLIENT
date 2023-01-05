import LogoTop from 'src/components/common/LogoTop';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
function MyResult() {
  const { isLoading, isError, data, error } = useQuery('myResult', () => {
    axios.get('');
  });
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <LogoTop />
      <StMyResult>
        <StWarningMessage>
          <div className="warn">잠깐!</div>
          카카오톡에서 접속 시, 이미지 저장을 위해 아이폰 사용자는 사파리로 이동해주세요
        </StWarningMessage>
        <StResultCard>
          <StInfoContainer>
            <p className="date">2023.01.31</p>
            <p className="teamName">&#39;안티티티티티티티티타임&#39;</p>
            <div className="resultTitle">
              <p>
                <span className="userName">송하윤</span> 님의
              </p>
              <p>개인 T.time 결과</p>
            </div>
          </StInfoContainer>
          <StUserImage />
          <StResultTitle></StResultTitle>
          <StResultDetail></StResultDetail>
          <StRecommendText></StRecommendText>
          <StGraphTitle></StGraphTitle>
          <StGraphContainer></StGraphContainer>
          <StCardFooter></StCardFooter>
        </StResultCard>
      </StMyResult>
    </>
  );
}
export default MyResult;

const StMyResult = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StWarningMessage = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19.7rem;
  margin: 2.2rem 9.7rem 1.2rem 9.7rem;
  font-size: ${FONT_STYLES.PRETENDARD_M_12};
  color: ${COLOR.GRAY_9E};
  .warn {
    margin-bottom: 0.6rem;
    font-style: ${FONT_STYLES.PRETENDARD_B_12};
    color: ${COLOR.ORANGE_1};
  }
`;
const StResultCard = styled.main`
  width: 34.6rem;
  height: 104.4rem;
  background-color: ${COLOR.IVORY_1};
  border-radius: 1.4rem;
  margin: 0rem 2.2rem 6rem 2.2rem;
  padding: 2.5rem 2.2rem 0rem 2.2rem;
`;
const StInfoContainer = styled.div`
  width: 100%;
  .date {
    font-style: ${FONT_STYLES.PRETENDARD_M_12};
    color: ${COLOR.GRAY_9E};
  }
  .teamName {
    font-style: ${FONT_STYLES.NEXON_B_16};
    color: ${COLOR.GRAY_7E};
    margin: 0.8rem 0 1.2rem 0;
  }
  .resultTitle {
    font-style: ${FONT_STYLES.NEXON_B_22};
    color: ${COLOR.BLACK};
  }
  .resultTitle p {
    margin-bottom: 0.5rem;
  }
  .userName {
    color: ${COLOR.BLUE_TEXT};
  }
`;
const StUserImage = styled.img`
  width: 14.8rem;
  height: 16.4rem;
  margin: 6.2rem 7.6rem 5rem 7.6rem;
`;
const StResultTitle = styled.div`
  width: 18.2rem;
`;
const StResultDetail = styled.div``;
const StRecommendText = styled.article``;
const StGraphTitle = styled.div``;
const StGraphContainer = styled.article``;
const StCardFooter = styled.footer``;
