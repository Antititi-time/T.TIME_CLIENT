import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import ImageDiv from '@src/components/common/ImageDiv';
import { imgCenturyGothicLogo, imgErrorChr } from '@src/assets/images';
import BottomButton from '../common/BottomButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useCopyLink } from '../shareModule/ShareModule';
import { useRouter } from 'next/router';

interface completeDataType {
  completeData: {
    completed: boolean;
    completedNumber: number;
    totalNumber: number;
    teamName: string;
  };
}

function UnfinishedResult({ completeData }: completeDataType) {
  const router = useRouter();
  const teamCode = Number(router.asPath.split('/')[2]);
  const userCode = router.asPath.split('/')[3];
  const resultLink = `https://www.ttime.site/teamResult/${teamCode}/${userCode}`;
  const date = new Date();
  const year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  const day: string | number = date.getDate();
  if (month < 10) {
    month = '0' + month;
  }

  return (
    <StResultCard>
      <StDate>{year + '.' + month + '.' + day}</StDate>
      <StTeamName>‘{completeData?.teamName}’</StTeamName>
      <StTeamResultText>
        <p>팀</p>
        <ImageDiv src={imgCenturyGothicLogo} alt="logo" className="logo" fill={true} />
        <p>결과</p>
      </StTeamResultText>
      <StUnfinishImage>
        <ImageDiv src={imgErrorChr} alt="error" fill={false} />
      </StUnfinishImage>
      <StInfoTitle>전체 팀 결과를 볼 수 없습니다.</StInfoTitle>
      <StInfoDetail>아직 다른 팀원들이 티타임 중이에요..!</StInfoDetail>
      <StCurrentStatus>
        현재 완료한 팀원 수: {completeData?.completedNumber}/{completeData?.totalNumber}명
      </StCurrentStatus>
      <CopyToClipboard text={resultLink}>
        <StButtonContainer onClick={useCopyLink}>
          <BottomButton width={27.3} color={COLOR.ORANGE_1} text={'링크 복사하기'} />
        </StButtonContainer>
      </CopyToClipboard>
    </StResultCard>
  );
}
export default UnfinishedResult;

const StResultCard = styled.main`
  width: 34.6rem;
  height: 53.7rem;
  padding: 2.5rem 2.1rem 0.8rem 2.1rem;
  margin: 2.9rem 2.2rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
`;
const StDate = styled.p`
  margin-bottom: 1.2rem;
  color: ${COLOR.GRAY_9E};
  ${FONT_STYLES.PRETENDARD_M_12}
`;

const StTeamName = styled.p`
  margin-bottom: 1.2rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
`;
const StTeamResultText = styled.div`
  display: flex;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_22}

  .logo {
    position: relative;
    width: 7.2rem;
    height: 2.4rem;
    margin: 0 0.4rem;
  }
`;
const StUnfinishImage = styled.div`
  div img {
    width: 17.9rem;
    height: 17.9rem;
    margin: 3.4rem 6.2rem 2.8rem 6.2rem;
  }
`;
const StInfoTitle = styled.p`
  width: 100%;
  color: ${COLOR.BLACK};
  text-align: center;
  ${FONT_STYLES.PRETENDARD_B_20};
`;
const StInfoDetail = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.2rem;
  margin-top: 0.8rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_B_14};
`;
const StCurrentStatus = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0 1.3rem 0;
  color: ${COLOR.ORANGE_TEXT};
  ${FONT_STYLES.PRETENDARD_R_14}
`;
const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
