import SEO from '@common/SEO';
import styled from 'styled-components';
import TextTop from '@common/TextTop';
import useManageScroll from '@src/hooks/UseManageScroll';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgJoinLogo } from 'public/assets/images';
import { imgInvitation } from 'public/assets/images';
import ImageDiv from '@common/ImageDiv';
import BottomButton from '@common/BottomButton';
import { useState } from 'react';
import { useRouter } from 'next/router';
import InviteModal from '@src/components/shareModule/InviteModal';
import Link from 'next/link';
import { DOMAIN } from '@src/constants/domain';
import ToolTipIcon from '@src/components/common/ToolTipIcon';

interface ctxType {
  query: {
    teamId: number;
    teamName: string;
  };
}

interface ConfirmInviteProps {
  teamId: number;
  teamName: string;
}

function ConfirmInvite({ teamId, teamName }: ConfirmInviteProps) {
  const router = useRouter();
  useManageScroll();
  const [isConfirmed, setIsconfirmed] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <StConfirmInvite>
      <SEO
        title="T.time | 팀과 내가 함께 성장하는 시간"
        ogTitle={teamName + '팀 초대장이 도착했어요!'}
        description="초대장을 열고, 티타임에 입장해보세요.☕️"
        url={DOMAIN + '/join/' + teamId}
      />
      {modalState && teamName ? (
        <InviteModal teamName={teamName} setModalState={setModalState} teamId={String(router.query.teamId)} />
      ) : null}
      <TextTop text={'초대장 만들기'} />
      <ToolTipIcon top={5.8} />
      <StInvitationContainer>
        <ImageDiv src={imgInvitation} alt="초대장이미지" className="invitationImg" />
        <StLine />
        <div>
          <div>
            <StTeamName>&apos;{teamName}&apos;</StTeamName>
            <StRowContainer>
              <ImageDiv src={imgJoinLogo} alt="T.time_logo" className="imgCenturyGothicLogo" fill></ImageDiv>
              <StInviteComment>에 초대합니다.</StInviteComment>
            </StRowContainer>
            <StListContainer>
              <StList>총 {router.query.teamNum}명</StList>
              <StList>질문 개수: 5개</StList>
              <StList>예상 소요시간: 약 10분 이내</StList>
            </StListContainer>
          </div>
        </div>
      </StInvitationContainer>
      <StBtnContainer className={isConfirmed ? 'flex-container' : ''}>
        {isConfirmed ? (
          <BottomButton
            width={28.2}
            color={COLOR.BLUE_1}
            text={'초대장 공유하기'}
            handler={() => setModalState(true)}
          />
        ) : (
          <StMessage>위 정보로 티타임 초대장을 만드시겠습니까?</StMessage>
        )}

        {!isConfirmed ? (
          <BottomButton
            width={28.2}
            color={COLOR.ORANGE_1}
            text={isConfirmed ? '티타임 참여하기' : '확인'}
            handler={() => setIsconfirmed(true)}
          />
        ) : (
          <Link href={`/join/${router.query.teamId}`}>
            <BottomButton width={28.2} color={COLOR.ORANGE_1} text={isConfirmed ? '티타임 참여하기' : '확인'} />
          </Link>
        )}
      </StBtnContainer>
    </StConfirmInvite>
  );
}
export default ConfirmInvite;

export const getServerSideProps = async (ctx: ctxType) => {
  const teamId = ctx.query.teamId;
  const teamName = ctx.query.teamName;
  return { props: { teamId, teamName } };
};

const StConfirmInvite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: calc(var(--vh) * 100);
  padding-bottom: 8rem;
  .invitationImg img {
    width: 12.8rem;
    height: 12.8rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 766px) {
      width: 16rem;
      height: 16rem;
    }
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
    width: 5.2rem;
    height: 3.2rem;
    bottom: 0.4rem;
    @media screen and (min-width: 766px) {
      height: 2.4rem;
      width: 4rem;
      bottom: 0;
    }
  }
  @media screen and (min-width: 766px) {
    flex-direction: row;
    gap: unset;
    width: 68.6rem;
    height: 37.6rem;
    padding: 0;
    margin-top: 9.8rem;
    & > div:first-child {
      width: 27.2rem;
      text-align: center;
    }
    & > div:last-child {
      display: flex;
      justify-content: center;
      width: 41.4rem;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 84.8rem;
    & > div:first-child {
      width: 37.7rem;
    }
    & > div:last-child {
      width: 47.1rem;
    }
  }
`;

const StLine = styled.div`
  display: none;
  width: 0.2rem;
  height: calc(100% - 3.1rem);
  background-color: ${COLOR.IVORY_3};
  @media screen and (min-width: 766px) {
    display: block;
  }
`;

const StTeamName = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.56rem;
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_20}
  }
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
  @media screen and (min-width: 766px) {
    margin-top: 4.6rem;
  }
`;

const StList = styled.li`
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_16};
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_R_18};
  }
`;

const StMessage = styled.p`
  margin-top: 7.1rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.NEXON_R_14};

  @media screen and (min-width: 766px) {
    margin-top: auto;
  }
`;

const StBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 1.6rem;

  &.flex-container {
    flex-direction: column;
    margin-top: 3.9rem;
    @media screen and (min-width: 766px) {
      flex-direction: row-reverse;
      gap: 6.8rem;
      align-items: flex-end;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    gap: 2rem;
  }
`;
