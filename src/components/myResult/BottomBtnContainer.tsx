import styled from 'styled-components';
import Link from 'next/link';
import BottomButton from '../common/BottomButton';
import { COLOR } from '@src/styles/color';
import { Dispatch, SetStateAction } from 'react';
interface BottomBtnProps {
  teamId: string;
  userId: string;
  setModalState: Dispatch<SetStateAction<boolean>>;
}

function BottomBtnContainer({ userId, teamId, setModalState }: BottomBtnProps) {
  return (
    <StButtomBtnContainer>
      <Link href={`/teamResult/${teamId}/${userId}`}>
        <BottomButton width={16} color={COLOR.BLUE_1} text={'전체 결과 보기'} />
      </Link>

      <StButtonContainer>
        <BottomButton width={16} color={COLOR.ORANGE_1} text={'공유하기'} handler={() => setModalState(true)} />
      </StButtonContainer>
    </StButtomBtnContainer>
  );
}
export default BottomBtnContainer;

const StButtomBtnContainer = styled.div`
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
  cursor: pointer;
`;
