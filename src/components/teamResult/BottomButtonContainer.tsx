import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import BottomButton from '../common/BottomButton';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import Link from 'next/link';
interface buttonPropsType {
  isUser: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
  userId: string;
  teamId: number;
}
function BottomButtonContainer({ isUser, setModalState, userId, teamId }: buttonPropsType) {
  const myResultUrl = `/myResult/${teamId}/${userId}`;
  return (
    <StButtomButtonContainer>
      {isUser ? (
        <>
          <Link href={myResultUrl}>
            <BottomButton width={16} color={COLOR.BLUE_1} text={'내 결과 다시보기'} />
          </Link>
          <StButtonContainer onClick={() => setModalState(true)}>
            <BottomButton width={16} color={COLOR.ORANGE_1} text={'공유하기'} />
          </StButtonContainer>
        </>
      ) : (
        <StButtonContainer onClick={() => setModalState(true)}>
          <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'공유하기'} />
        </StButtonContainer>
      )}
    </StButtomButtonContainer>
  );
}

export default BottomButtonContainer;

const StButtomButtonContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  gap: 1.6rem;
  bottom: 0;
  width: 100vw;
  height: 8.4rem;
  border-radius: 1.2rem 1.2rem 0 0;
  background-color: white;
`;
const StButtonContainer = styled.div`
  pointer: cursor;
`;
