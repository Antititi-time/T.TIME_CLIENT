import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import ImageDiv from '@src/components/common/ImageDiv';
import { imgCenturyGothicLogo, imgErrorChr } from 'public/assets/images';
import BottomButton from '../common/BottomButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useCopyLink } from '../shareModule/ShareModule';
import { useRouter } from 'next/router';
import { DOMAIN } from '@src/constants/domain';

interface completeDataType {
  completeData: {
    completed: boolean;
    completedNumber: number;
    totalNumber: number;
    teamName: string;
  };
}

function UnfinishedResult({ completeData }: completeDataType) {
  const { query } = useRouter();
  const teamId = String(query.teamId);
  const resultLink = `${DOMAIN}/teamResult/${teamId}/noUser`;
  const date = new Date();
  const year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  let day: string | number = date.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  return (
    <>
      <StResultCard>
        <StTopContainer>
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
        </StTopContainer>
        <StLine />
        <StBottomContainer>
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
        </StBottomContainer>
      </StResultCard>
      <StOutsideButton onClick={useCopyLink}>
        <BottomButton width={27.3} color={COLOR.ORANGE_1} text={'링크 복사하기'} />
      </StOutsideButton>
    </>
  );
}
export default UnfinishedResult;

const StResultCard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34.6rem;
  height: 53.7rem;
  padding: 2.5rem 2.1rem 0.8rem 2.1rem;
  margin: 2.9rem 2.2rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 766px) {
    width: 68.6rem;
    height: 87.9rem;
    padding-top: 3.9rem;
    padding-left: 4rem;
  }
  @media screen and (min-width: 1920px) {
    width: 120rem;
    height: 72.7rem;
    flex-direction: row;
    padding-bottom: 3.7rem;
  }
`;
const StDate = styled.p`
  margin-bottom: 1.2rem;
  color: ${COLOR.GRAY_9E};
  ${FONT_STYLES.PRETENDARD_M_12}
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_R_20};
  }
  @media screen and (min-width: 1920px) {
    margin-bottom: 0;
  }
`;

const StTeamName = styled.p`
  margin-bottom: 1.2rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_B_16};
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_32};
  }
  @media screen and (min-width: 1920px) {
    line-height: 3.6rem;
    margin-bottom: 0;
    margin-top: 1.2rem;
  }
`;
const StTeamResultText = styled.div`
  display: flex;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_22}
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_40};
  }
  .logo {
    position: relative;
    width: 7.2rem;
    height: 2.8rem;
    bottom: 0.3rem;
    margin: 0 0.4rem;
    @media screen and (min-width: 766px) {
      width: 11rem;
      height: 4.7rem;
      top: 0.4rem;
    }
  }
`;
const StUnfinishImage = styled.div`
  display: flex;
  justify-content: center;
  div img {
    width: 17.9rem;
    height: 17.9rem;
    margin: 3.4rem 6.2rem 2.8rem 6.2rem;
    @media screen and (min-width: 766px) {
      width: 32rem;
      height: 32rem;
      margin-top: 6.8rem;
      margin-bottom: 2rem;
    }
  }
`;
const StInfoTitle = styled.p`
  width: 100%;
  color: ${COLOR.BLACK};
  text-align: center;
  white-space: nowrap;
  ${FONT_STYLES.PRETENDARD_B_20};

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_B_32};
  }
  @media screen and (min-width: 1920px) {
    line-height: 4.8rem;
  }
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
  white-space: nowrap;

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_B_24};
    margin-top: 1.6rem;
  }
`;
const StCurrentStatus = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0 1.3rem 0;
  color: ${COLOR.ORANGE_TEXT};
  ${FONT_STYLES.PRETENDARD_R_14}
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_B_24};
    margin-bottom: 2.4rem;
  }
  @media screen and (min-width: 1920px) {
    margin-top: 6.4rem;
  }
`;
const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 1920px) {
    display: none;
  }
`;
const StOutsideButton = styled.div`
  display: none;
  @media screen and (min-width: 1920px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 9rem;
    margin-bottom: 4rem;
  }
`;
const StTopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const StBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1920px) {
    min-width: 68rem;
  }
`;
const StLine = styled.div`
  display: none;

  @media screen and (min-width: 1920px) {
    width: 0rem;
    height: 100%;
    border: 0.2rem solid #ece7db;
    display: block;
  }
`;
