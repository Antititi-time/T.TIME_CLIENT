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

interface IApiError {
  response: {
    data: {
      message: string;
      status: number;
      success: boolean;
    };
  };
}

function Join() {
  useManageScroll();
  const router = useRouter();
  const teamId = Number(router.asPath.split('/')[2]);
  const [isLogin, setIsLogin] = useState<string | null>('');
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
  const getData = useMutation(
    () =>
      enterChat(
        teamId,

        localStorage.getItem('accessToken'),
      ),
    {
      onSuccess: (response: TeamData) => {
        router.push({
          pathname: `/chat/${response?.teamId}/${response?.userId}`,
          query: { teamName: response?.teamName },
        });
      },
      onError: (error: IApiError) => {
        if (error.response.data.message === '중복된 닉네임입니다.') {
          alert('닉네임은 중복이 불가해요.');
        }
      },
    },
  );

  const handleSubmit = () => {
    getData.mutate();
  };

  return (
    <StJoin>
      <SEO title="T.time | 팀과 내가 함께 성장하는 시간" description="초대장이 도착했어요!" />
      <TextTop text={'티타임 참여하기'} />
      <ImageDiv src={imgJoin} alt="T.time_logo" className="imgJoin" fill></ImageDiv>
      <StMainContainer>
        <StTeamName>&apos;{data?.teamName}&apos;</StTeamName>
        <StRowContainer>
          <ImageDiv src={imgCenturyGothicLogo} alt="T.time_logo" className="imgCenturyGothicLogo" fill></ImageDiv>
          <StInviteComment>에 초대합니다</StInviteComment>
        </StRowContainer>
        <StListContainer>
          <StList>총 {data?.teamMember}명</StList>
          <StList>질문 개수: 10개</StList>
          <StList>예상 소요시간: 약 10분 이내</StList>
        </StListContainer>
      </StMainContainer>

      {isLogin ? (
        <>
          <StLoginInfoText>지금 바로 T.time 시작해보세요!</StLoginInfoText>
          <StButtonContainer onClick={handleSubmit}>
            <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'다음'} />
          </StButtonContainer>
        </>
      ) : (
        <>
          <StUnLoginInfoText>지금 바로 T.time 시작해보세요!</StUnLoginInfoText>
          <GoogleLoginButton />
          <StKakaoButtonContainer>
            <KakaoLoginButton />
          </StKakaoButtonContainer>
        </>
      )}
    </StJoin>
  );
}

export default Join;

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

const StLoginInfoText = styled.p`
  margin-top: 10.4rem;
  margin-bottom: 1rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
`;
const StUnLoginInfoText = styled.p`
  margin-top: 6rem;
  margin-bottom: 1rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
`;
const StList = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_16};
`;

const StKakaoButtonContainer = styled.div`
  margin-top: 1.6rem;
`;

const StButtonContainer = styled.button``;
