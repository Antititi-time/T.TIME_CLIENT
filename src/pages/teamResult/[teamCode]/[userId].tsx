import styled from 'styled-components';
import LogoTop from '@src/components/common/LogoTop';
import ResultFrame from '@src/components/teamResult/ResultFrame';
import BottomButtonContainer from '@src/components/common/BottomButtonContainer';
import UnfinishedResult from '../../../components/teamResult/UnfinishedResult';
import { useQuery } from 'react-query';
import { getCompleted } from '../../../services/index';
import { useRouter } from 'next/router';

function TeamResult() {
  const router = useRouter();

  const teamCode = Number(router.asPath.split('/')[2]);
  const { data } = useQuery('teamResult', () => getCompleted(teamCode), {
    enabled: !!teamCode,
  });

  return (
    <StTeamResult>
      <LogoTop />
      {data?.completed ? (
        <>
          <ResultFrame />
          <BottomButtonContainer />
          <StBackground />
        </>
      ) : (
        <UnfinishedResult completeData={data} />
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
