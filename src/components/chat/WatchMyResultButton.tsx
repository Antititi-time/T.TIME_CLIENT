import styled from 'styled-components';
import BottomButton from '@src/components/common/BottomButton';
import { COLOR } from '@src/styles/color';
import Link from 'next/link';
import { patchComplete } from '@src/services';
interface watchResultType {
  teamId: string;
  userId: string;
}

function WatchMyResultButton({ teamId, userId }: watchResultType) {
  return (
    <StWatchMyResultButton onClick={() => patchComplete(Number(teamId), localStorage.getItem('accessToken'))}>
      <Link href={`/myResult/${teamId}/${userId}`}>
        <BottomButton width={28.5} color={COLOR.ORANGE_1} text={'개인 결과 보기'} />
      </Link>
    </StWatchMyResultButton>
  );
}

export default WatchMyResultButton;

const StWatchMyResultButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 7.6rem;
  bottom: 0;
  z-index: 1;
  background-color: ${COLOR.WHITE_100};

  @media screen and (min-width: 1920px) {
    margin: 0 -40rem;
    padding: 0 60rem;
  }

  @media screen and (min-width: 744px) {
    margin: 0 -3.5rem;
  }
`;
