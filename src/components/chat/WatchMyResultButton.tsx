import styled from 'styled-components';
import BottomButton from '@src/components/common/BottomButton';
import { COLOR } from '@src/styles/color';
import Link from 'next/link';
import { patchComplete } from '../../services/index';

interface watchResultType {
  teamId: string;
  userId: string;
}

function WatchMyResultButton({ teamId, userId }: watchResultType) {
  return (
    <StWatchMyResultButton onClick={() => patchComplete(Number(userId), { userId: userId, completed: true })}>
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
`;
