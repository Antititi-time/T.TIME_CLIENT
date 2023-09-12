import SEO from '@common/SEO';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import TextTop from '@common/TextTop';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgJoin, imgJoinLogo } from 'public/assets/images';
import ImageDiv from '@common/ImageDiv';
import BottomButton from '@common/BottomButton';

import { useRouter } from 'next/router';
import { enterChat, getTeamData } from '@src/services';
import { useMutation } from 'react-query';
import { TeamData } from '@src/mocks/types';
import useManageScroll from '@src/hooks/UseManageScroll';
import GoogleLoginButton from '@common/GoogleLoginButton';
import KakaoLoginButton from '@common/KakaoLoginButton';
import { useEffect, useState } from 'react';
import { DOMAIN } from '@src/constants/domain';
import { TeamInfoData } from '@src/services/types';

import ToolTipIcon from '@src/components/common/ToolTipIcon';

interface ctxType {
  query: {
    teamId: number;
    teamData: string;
  };
}

interface JoinProps {
  teamId: number;
  teamData: TeamInfoData;
}

interface IApiError {
  response: {
    data: {
      message: string;
      status: number;
      success: boolean;
    };
  };
}

function Join({ teamId, teamData }: JoinProps) {
  useManageScroll();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<string | null>('');
  const [isKakaoBrowser, setIsKakaoBrowser] = useState(false);
  useEffect(() => {
    setIsLogin(localStorage.getItem('accessToken'));
    const isKakao = navigator.userAgent.match('KAKAOTALK');
    setIsKakaoBrowser(Boolean(isKakao));
    localStorage.setItem('teamId', String(teamId));
  }, []);

  const getData = useMutation(() => enterChat(teamId, localStorage.getItem('accessToken')), {
    onSuccess: (response: TeamData) => {
      router.push({
        pathname: `/chat/${response?.teamId}/${response?.userId}`,
        query: { teamName: response?.teamName },
      });
    },
    onError: (error: IApiError) => {
      if (error.response.data.status === 403) {
        alert('모든 팀원이 T.time에 참여했어요.');
        router.push('/');
      }
    },
  });

  const handleSubmit = () => {
    getData.mutate();
  };

  return (
    <StJoin>
      <SEO
        title="T.time | 팀과 내가 함께 성장하는 시간"
        ogTitle={teamData?.teamName + '팀 초대장이 도착했어요!'}
        description="초대장을 열고, 티타임에 입장해보세요.☕️"
        url={DOMAIN + '/join/' + teamId}
      />
      <TextTop text={'티타임 참여하기'} />
      <StMainContainer>
        <ImageDiv src={imgJoin} alt="T.time_logo" className="imgJoin" fill></ImageDiv>
        <StMainBox>
          <ToolTipIcon top={5.8} />
          <StTeamName>&apos;{teamData?.teamName}&apos;</StTeamName>
          <StRowContainer>
            <ImageDiv src={imgJoinLogo} alt="T.time_logo" className="imgCenturyGothicLogo" fill></ImageDiv>
            <StInviteComment>에 초대합니다</StInviteComment>
          </StRowContainer>
          <StListContainer>
            <StList>총 {teamData?.teamMember}명</StList>
            <StList>질문 개수: 10개</StList>
            <StList>예상 소요시간: 약 10분 이내</StList>
          </StListContainer>
        </StMainBox>
      </StMainContainer>
      {isLogin ? (
        <>
          <StLoginContainer onClick={handleSubmit} isKakaoBrowser={isKakaoBrowser}>
            <StInfoText isLogin={isLogin}>지금 바로 T.time 시작해보세요!</StInfoText>
            <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'시작하기'} />
          </StLoginContainer>
        </>
      ) : (
        <>
          <StLoginContainer isKakaoBrowser={isKakaoBrowser}>
            <StInfoText isLogin={isLogin}>T.time 참여를 위해 로그인이 필요해요!</StInfoText>
            <StLoginButtonContainer isKakaoBrowser={isKakaoBrowser}>
              {!isKakaoBrowser && <GoogleLoginButton />}
              <KakaoLoginButton />
            </StLoginButtonContainer>
          </StLoginContainer>
        </>
      )}
    </StJoin>
  );
}

export default Join;

export const getServerSideProps = async (ctx: ctxType) => {
  const teamId = ctx.query.teamId;
  const teamData = await getTeamData(teamId);
  return { props: { teamId, teamData } };
};

const StJoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 39rem;
  width: 100vw;
  min-height: calc(var(--vh) * 100);
  padding-bottom: 4rem;
  background-color: ${COLOR.IVORY_1};
`;

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .imgJoin {
    position: relative;
    width: 16rem;
    height: 11rem;
    margin-top: 8.5rem;

    @media screen and (min-width: 766px) {
      width: 22.4rem;
      height: 15.4rem;
      margin-top: 0rem;
      margin-right: 2.4rem;
    }

    @media screen and (min-width: 1200px) {
      margin-right: 7.7rem;
    }
  }

  @media screen and (min-width: 766px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 68.6rem;
    height: 37.6rem;
    margin-top: 15rem;
    background-color: ${COLOR.WHITE_100};
    border-radius: 1.4rem;
    box-shadow: 0rem 0.2rem 1.3rem rgba(0, 0, 0, 0.05);
  }
  @media screen and (min-width: 1200px) {
    width: 84.8rem;
  }
`;

const StMainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 29.4rem;
  height: 20.8rem;
  padding: 3rem 2.4rem 3rem 2.4rem;
  margin: 2rem 0rem 3.2rem 0rem;
  border-radius: 1.2rem;
  background-color: ${COLOR.WHITE_100};
  box-shadow: 0rem 0.2rem 1.3rem rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 766px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35rem;
    height: 35rem;
    border-left: 2px solid ${COLOR.GRAY_EC};
    box-shadow: none;
    border-radius: 0;
    padding: 0rem;
    margin: 0rem;
  }

  .imgCenturyGothicLogo {
    position: relative;
    width: 5.2rem;
    height: 3.2rem;
    bottom: 0.4rem;
  }
`;

const StTeamName = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.56rem;

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_20}
    align-self:flex-start;
    margin-left: 5.6rem;
  }
`;

const StRowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 766px) {
    margin-bottom: 6.6rem;
    align-self: flex-start;
    margin-left: 5.6rem;
  }
`;

const StInviteComment = styled.p`
  color: ${COLOR.ORANGE_TEXT};
  ${FONT_STYLES.NEXON_B_20};
`;

const StListContainer = styled.ol`
  list-style-type: disc;
`;

const StList = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_16};

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_R_18}
  }
`;

const StInfoText = styled.p<{ isLogin: string | null }>`
  margin-bottom: 0.8rem;
  margin-top: ${(props) => props.isLogin && '4.4rem'};
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
  text-align: center;

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_M_16};
    margin-bottom: 1.6rem;
    margin-top: ${(props) => props.isLogin && '2.3rem'};
  }
`;

const StLoginContainer = styled.div<{ isKakaoBrowser: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 1rem;
  margin-top: ${(props) => (props.isKakaoBrowser ? '7.6rem' : '1rem')};
  margin-bottom: 8rem;
  button:first-child {
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 766px) {
    margin-top: 3rem;
  }
`;

const StLoginButtonContainer = styled.div<{ isKakaoBrowser: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 1rem;
  margin-top: ${(props) => (props.isKakaoBrowser ? '7.6rem' : '1rem')};

  button:first-child {
    margin-bottom: 1.6rem;
  }
  @media screen and (min-width: 766px) {
    flex-direction: row;
    width: 62.8rem;
    justify-content: space-around;
    margin-top: 1.6rem;
  }
`;
