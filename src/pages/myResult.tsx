import LogoTop from 'src/components/common/LogoTop';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';
function MyResult() {
  const { isLoading, isError, data, error } = useQuery('myResult', () => {
    axios.get('/api/result/ttime');
  });
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <LogoTop />
      <StMyResult>
        <StWarningMessage></StWarningMessage>
        <StResultCard>
          <StInfoContainer></StInfoContainer>
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

const StMyResult = styled.div``;
const StWarningMessage = styled.header``;
const StResultCard = styled.main``;
const StInfoContainer = styled.div``;
const StUserImage = styled.img``;
const StResultTitle = styled.div``;
const StResultDetail = styled.div``;
const StRecommendText = styled.article``;
const StGraphTitle = styled.div``;
const StGraphContainer = styled.article``;
const StCardFooter = styled.footer``;
