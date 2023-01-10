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

function TeamResult() {
  const [modalState, setModalState] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();
  const teamId = Number(router.asPath.split('/')[2]);
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
  const { data } = useQuery('teamResult', () => getCompleted(teamId), {
    enabled: !!teamId,
  });

  return (
    <StTeamResult>
      <LogoTop />
      {data ? (
        !data?.completed ? (
          <>
            <ResultFrame teamCode={teamCode} />
            <BottomButtonContainer />
            <StBackground />
          </>
        ) : (
          <UnfinishedResult completeData={data} />
        )

      ) : (
        <LoadingView />
      )}
    </StTeamResult>
  );
}
export default TeamResult;
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
