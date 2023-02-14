import SEO from '@src/components/common/SEO';
import styled from 'styled-components';
import LogoTop from '@src/components/common/LogoTop';
import ResultFrame from '@src/components/teamResult/ResultFrame';
import BottomButtonContainer from '@src/components/teamResult/BottomButtonContainer';
import { useState, useEffect } from 'react';
import TeamModal from '@src/components/shareModule/TeamModal';
import UnfinishedResult from '../../../components/teamResult/UnfinishedResult';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getCompleted } from '../../../services/index';
import LoadingView from '@src/components/common/LoadingView';
import { getTeamData } from '@src/services/index';
import { TeamInfoData } from '@src/services/types';

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
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();
  const [userId, setUserId] = useState('');
  useEffect(() => {
    setUserId(router.asPath.split('/')[3]);
  }, [router.asPath]);
  useEffect(() => {
    if (userId != '[userId]' && userId) {
      const localId = localStorage.getItem('userId');
      if (userId != 'noUser') {
        setIsUser(true);
      } else if (localId) {
        setIsUser(true);
        setUserId(localId);
      }
    }
  }, [userId]);
  const { data: completeData, isLoading } = useQuery('completeData', () => getCompleted(teamId), {
    enabled: router.isReady,
  });
  const { data } = useQuery('getTeamData', () => getTeamData(teamId), {
    initialData: teamData,
  });

  return (
    <StTeamResult>
      <SEO
        title="T.time | 팀과 내가 함께 성장하는 시간"
        ogTitle={teamData?.teamName + '의 팀결과를 확인해보세요'}
        description="팀 결과를 팀원들과 공유해 깊은 이야기를 나눠보세요.☕️"
        image="/img_teamShare.png"
        url={'https://t-time.vercel.app/myResult/' + teamId + '/noUser'}
      />
      <LogoTop />
      {completeData ? (
        completeData.completed && !isLoading ? (
          <>
            {modalState ? <TeamModal teamName={data?.teamName} setModalState={setModalState} /> : <></>}
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
