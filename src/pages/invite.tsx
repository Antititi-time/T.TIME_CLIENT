import styled from 'styled-components';
// import ImageDiv from '@src/components/common/ImageDiv';
import TeamInput from '@src/components/invite/TeamInput';
import TextTop from '@src/components/common/TextTop';
import BottomButton from '@src/components/common/BottomButton';
import { COLOR } from '@src/styles/color';
import useManageScroll from '@src/hooks/UseManageScroll';

function Invite() {
  useManageScroll();
  return (
    <StInvite>
      {/* <ImageDiv src="" alt="초대장이미지" className="letterImg" layout="fill" /> */}
      <TextTop text={'초대장 만들기'} />
      <div className="letterImg"></div>
      <StForm action="post">
        <TeamInput label="프로젝트 또는 팀 이름" placeholder="14자 이내로 입력해 주세요" />
        <TeamInput label="팀 인원 수" placeholder="팀의 인원 수를 입력해주세요" />
      </StForm>
      <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'다음'} />
    </StInvite>
  );
}

export default Invite;

const StInvite = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: calc(var(--vh) * 100);
  padding-bottom: 4rem;
  background-color: ${COLOR.IVORY_1};
  text-align: center;
  .letterImg {
    width: 16.8rem;
    height: 16.8rem;
    margin-top: 9rem;
    margin-bottom: 4.7rem;
    background-color: aliceblue;
  }
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 8.4rem;
`;
