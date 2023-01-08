import styled from 'styled-components';
import TextTop from '@src/components/common/TextTop';
import useManageScroll from '@src/hooks/UseManageScroll';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgCenturyGothicLogo } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import BottomButton from '@src/components/common/BottomButton';
function ConfirmInvite() {
  useManageScroll();
  return (
    <StConfirmInvite>
      <TextTop text={'초대장 만들기'} />
      <StInvitationContainer>
        <div className="invitationImg"></div>
        <StTeamName>&apos;안티티티티프레져프레저안티티&apos;</StTeamName>
        <StRowContainer>
          <ImageDiv src={imgCenturyGothicLogo} alt="T.time_logo" className="imgCenturyGothicLogo" fill></ImageDiv>
          <StInviteComment>에 초대합니다</StInviteComment>
        </StRowContainer>
        <StListContainer>
          <StList>총 OO명</StList>
          <StList>질문 개수: 12개</StList>
          <StList>예상 소요시간: 약 10분 이내</StList>
        </StListContainer>
      </StInvitationContainer>
      <StMessage>위 정보로 티타임 초대장을 만드시겠습니까?</StMessage>
      <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'확인'} />
    </StConfirmInvite>
  );
}
export default ConfirmInvite;

const StConfirmInvite = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: calc(var(--vh) * 100);
  padding-bottom: 4rem;
  .invitationImg {
    width: 12.8rem;
    height: 12.8rem;
    background-color: #e6dfdd;
  }
`;

const StInvitationContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px 38px;
  margin-top: 8.2rem;
  margin-bottom: 7.1rem;
  gap: 10px;
  box-shadow: 0px 2px 13px rgba(100, 98, 94, 0.1);
  border-radius: 1.2rem;
  width: 29.4rem;
  height: 38.6rem;
  background-color: ${COLOR.IVORY_1};
  .imgCenturyGothicLogo {
    position: relative;
    width: 7.2rem;
    height: 2.4rem;
  }
`;

const StTeamName = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.56rem;
`;

const StRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StInviteComment = styled.p`
  color: ${COLOR.ORANGE_TEXT};
  ${FONT_STYLES.NEXON_B_20};
`;

const StListContainer = styled.ol`
  margin-top: 2rem;
  list-style-type: disc;
`;

const StList = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_16};
`;

const StMessage = styled.p`
  color: ${COLOR.GRAY_7E};
  margin-bottom: 1.6rem;
  ${FONT_STYLES.NEXON_R_14};
`;
