import ErrorPage from '@src/components/common/Error';
import styled from 'styled-components';
import BottomButton from '@src/components/common/BottomButton';
import router from 'next/router';
import { COLOR } from '@src/styles/color';
function Unfinished() {
  return (
    <>
      <ErrorPage title="개인결과를 볼 수 없습니다!" desc="테스트를 완료하지 않아 개인결과를 볼 수 없어요." />
      <StBtnWrapper onClick={() => router.push('/')}>
        <BottomButton color={COLOR.ORANGE_1} width={28.2} text="메인으로 돌아가기" />
      </StBtnWrapper>
    </>
  );
}
const StBtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 3.4rem;
  width: 100%;
  margin-top: 2.4rem;

  @media screen and (min-width: 766px) {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 8.4rem;
    border-radius: 1.2rem 1.2rem 0 0;
    background-color: ${COLOR.WHITE_100};
  }
`;
export default Unfinished;
