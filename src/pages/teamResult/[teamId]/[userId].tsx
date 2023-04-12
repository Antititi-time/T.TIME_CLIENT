import SEO from '@common/SEO';
import styled from 'styled-components';
import LogoTop from '@common/LogoTop';
import ResultFrame from '@src/components/teamResult/ResultFrame';
import BottomButtonContainer from '@src/components/teamResult/BottomButtonContainer';
import { useState, useEffect } from 'react';
import TeamModal from '@src/components/shareModule/TeamModal';
import UnfinishedResult from '../../../components/teamResult/UnfinishedResult';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getCompleted } from '../../../services/index';
import LoadingView from '@common/LoadingView';
import { getTeamData } from '@src/services/index';
import { TeamInfoData } from '@src/services/types';
import { DOMAIN } from '@src/constants/domain';
import Link from 'next/link';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import ToolTip from '@common/ToolTip';

interface ctxType {
  query: {
    teamId: string;
  };
}
interface TeamResultProps {
  teamId: number;
  teamData: TeamInfoData;
}

function TeamResult({ teamId, teamData }: TeamResultProps) {
  const [modalState, setModalState] = useState(false);
  const [completeState, setCompleteState] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();
  const [userId, setUserId] = useState('');
  useEffect(() => {
    setUserId(router.asPath.split('/')[3]);
  }, [router.asPath]);
  useEffect(() => {
    if (userId != '[userId]' && userId) {
      if (userId == 'noUser') {
        setIsUser(false);
      } else {
        setIsUser(true);
      }
    }
  }, [userId]);
  const { data: completeData, isLoading } = useQuery('completeData', () => getCompleted(teamId), {
    enabled: completeState,
    onSuccess: (completeData) => {
      if (completeData.completed) {
        setCompleteState(false);
      }
    },
  });

  return (
    <StTeamResult>
      <SEO
        title="T.time | 팀과 내가 함께 성장하는 시간"
        ogTitle={teamData?.teamName + '의 팀결과를 확인해보세요'}
        description="팀 결과를 팀원들과 공유해 깊은 이야기를 나눠보세요.☕️"
        image="/img_teamShare.png"
        url={DOMAIN + '/myResult/' + teamId + '/noUser'}
      />
      <LogoTop />
      <ToolTip top={5.8} />
      <Link href="/myPage">
        <StMypageLink>지난 T.time 확인하기</StMypageLink>
      </Link>
      {completeData ? (
        completeData.completed && !isLoading ? (
          <>
            {modalState ? <TeamModal teamName={teamData?.teamName} setModalState={setModalState} /> : <></>}
            <ResultFrame teamId={teamId} />
            <BottomButtonContainer teamId={teamId} userId={userId} isUser={isUser} setModalState={setModalState} />
            <StBackground />
          </>
        ) : (
          <UnfinishedResult completeData={completeData} />
        )
      ) : (
        <LoadingView />
      )}
    </StTeamResult>
  );
}
export default TeamResult;

export const getServerSideProps = async (ctx: ctxType) => {
  const teamId = parseInt(ctx.query.teamId);
  const teamData = await getTeamData(teamId);
  return { props: { teamId, teamData } };
};

const StMypageLink = styled.p`
  margin-top: 2.4rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_B_16};
  text-decoration-line: underline;
  text-underline-position: under;
`;

const StTeamResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StBackground = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 67.2rem;
  background: linear-gradient(180deg, #f0e9d8 6.57%, rgba(241, 239, 234, 0) 55.73%, rgba(241, 239, 234, 0) 104.9%);
  transform: rotate(-180deg);
`;
