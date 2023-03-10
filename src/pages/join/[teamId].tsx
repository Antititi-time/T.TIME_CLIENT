import SEO from '@src/components/common/SEO';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import TextTop from '@src/components/common/TextTop';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgCenturyGothicLogo, imgJoin } from '@src/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import BottomButton from '@src/components/common/BottomButton';

import { useRouter } from 'next/router';
import { enterChat } from '@src/services';
import { useMutation } from 'react-query';
import { TeamData } from '@src/mocks/types';
import useManageScroll from '@src/hooks/UseManageScroll';
import { useQuery } from 'react-query';
import { getTeamData } from '@src/services';
import GoogleLoginButton from '@src/components/common/GoogleLoginButton';
import KakaoLoginButton from '@src/components/common/KakaoLoginButton';
import { useEffect, useState } from 'react';
import { DOMAIN } from '@src/constants/domain';
import { TeamInfoData } from '@src/services/types';

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
  }, []);

  useEffect(() => {
    if (router.isReady) {
      localStorage.setItem('teamId', String(teamId));
    }
  }, [router]);
  const { data } = useQuery('teamData', () => getTeamData(teamId), {
    enabled: !!teamId,
  });
  const getData = useMutation(() => enterChat(teamId, localStorage.getItem('accessToken')), {
    onSuccess: (response: TeamData) => {
      router.push({
        pathname: `/chat/${response?.teamId}/${response?.userId}`,
        query: { teamName: response?.teamName },
      });
    },
    onError: (error: IApiError) => {
      if (error.response.data.message === '????????? ??????????????????.') {
        alert('???????????? ????????? ????????????.');
      }
    },
  });

  const handleSubmit = () => {
    getData.mutate();
  };

  useEffect(() => {
    const isKakao = navigator.userAgent.match('KAKAOTALK');
    setIsKakaoBrowser(Boolean(isKakao));
  }, []);

  return (
    <StJoin>
      <SEO
        title="T.time | ?????? ?????? ?????? ???????????? ??????"
        ogTitle={teamData?.teamName + '??? ???????????? ???????????????!'}
        description="???????????? ??????, ???????????? ??????????????????.??????"
        url={DOMAIN + '/join/' + teamId}
      />
      <TextTop text={'????????? ????????????'} />
      <ImageDiv src={imgJoin} alt="T.time_logo" className="imgJoin" fill></ImageDiv>
      <StMainContainer>
        <StTeamName>&apos;{data?.teamName}&apos;</StTeamName>
        <StRowContainer>
          <ImageDiv src={imgCenturyGothicLogo} alt="T.time_logo" className="imgCenturyGothicLogo" fill></ImageDiv>
          <StInviteComment>??? ???????????????</StInviteComment>
        </StRowContainer>
        <StListContainer>
          <StList>??? {data?.teamMember}???</StList>
          <StList>?????? ??????: 10???</StList>
          <StList>?????? ????????????: ??? 10??? ??????</StList>
        </StListContainer>
      </StMainContainer>
      {isLogin ? (
        <>
          <StLoginButtonContainer onClick={handleSubmit} isKakaoBrowser={isKakaoBrowser}>
            <StInfoText isLogin={isLogin}>?????? ?????? T.time ??????????????????!</StInfoText>
            <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'????????????'} />
          </StLoginButtonContainer>
        </>
      ) : (
        <>
          <StLoginButtonContainer isKakaoBrowser={isKakaoBrowser}>
            <StInfoText isLogin={isLogin}>T.time ????????? ?????? ???????????? ????????????!</StInfoText>
            {!isKakaoBrowser && <GoogleLoginButton />}
            <KakaoLoginButton />
          </StLoginButtonContainer>
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
  min-width: 39rem;
  width: 100vw;
  min-height: calc(var(--vh) * 100);
  padding-bottom: 4rem;
  background-color: ${COLOR.IVORY_1};

  .imgJoin {
    position: relative;
    width: 16rem;
    height: 11rem;
    margin-top: 8.5rem;
  }
`;

const StMainContainer = styled.div`
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

const StInfoText = styled.p<{ isLogin: string | null }>`
  margin-bottom: 0.8rem;
  margin-top: ${(props) => props.isLogin && '4.4rem'};
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
  text-align: center;
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
`;
