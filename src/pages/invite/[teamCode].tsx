import styled from 'styled-components';
import TextTop from '@src/components/common/TextTop';
import useManageScroll from '@src/hooks/UseManageScroll';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgCenturyGothicLogo } from '@src/assets/images';
import { imgInvitation } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import BottomButton from '@src/components/common/BottomButton';
import { useState } from 'react';
import { useRouter } from 'next/router';

function ConfirmInvite() {
  const router = useRouter();
  useManageScroll();
  const [isConfirmed, setIsconfirmed] = useState<boolean>(false);
  return (
    <StConfirmInvite>
      <TextTop text={'초대장 만들기'} />
      <StInvitationContainer>
        <ImageDiv src={imgInvitation} alt="초대장이미지" className="invitationImg"></ImageDiv>
        <StTeamName>&apos;{router.query.teamName}&apos;</StTeamName>
        <StRowContainer>
          <ImageDiv src={imgCenturyGothicLogo} alt="T.time_logo" className="imgCenturyGothicLogo" fill></ImageDiv>
          <StInviteComment>에 초대합니다</StInviteComment>
        </StRowContainer>
        <StListContainer>
          <StList>총 {router.query.teamNum}명</StList>
          <StList>질문 개수: 12개</StList>
          <StList>예상 소요시간: 약 10분 이내</StList>
        </StListContainer>
      </StInvitationContainer>
      {isConfirmed ? (
        <StBtnWrapper>
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'초대장 공유하기'} />
        </StBtnWrapper>
      ) : (
        <StMessage>위 정보로 티타임 초대장을 만드시겠습니까?</StMessage>
      )}
      <StConfirmBtn onClick={() => setIsconfirmed(true)}>
        <BottomButton width={28.2} color={COLOR.ORANGE_1} text={isConfirmed ? '티타임 참여하기' : '확인'} />
      </StConfirmBtn>
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
  .invitationImg img {
    width: 12.8rem;
    height: 12.8rem;
    margin-bottom: 1rem;
  }
`;

const StInvitationContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 29.4rem;
  height: 38.6rem;
  padding: 4rem 2.4rem 3.8rem;
  margin-top: 8.2rem;
  border-radius: 1.2rem;
  background-color: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1.3rem rgba(100, 98, 94, 0.1);
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
  list-style-type: disc;
  margin-top: 2rem;
`;

const StList = styled.li`
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_16};
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

const StMessage = styled.p`
  margin-top: 7.1rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_R_14};
`;

const StBtnWrapper = styled.div`
  margin-top: 3.9rem;
  cursor: pointer;
`;

const StConfirmBtn = styled.div`
  margin-top: 1.6rem;
  cursor: pointer;
`;
