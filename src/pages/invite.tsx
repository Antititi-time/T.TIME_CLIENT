import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
// import ImageDiv from '@src/components/common/ImageDiv';
import TeamInfoBlank from '@src/components/invite/TeamInfoBlank';
import BottomButton from '@src/components/common/BottomButton';
import { COLOR } from '@src/styles/color';

export default function Invite() {
  return (
    <StContainer>
      <StTitle>초대장 만들기</StTitle>
      {/* <ImageDiv src="" alt="초대장이미지" className="letterImg" layout="fill" /> */}
      <div className="letterImg"></div>
      <StForm action="post">
        <TeamInfoBlank label="프로젝트 또는 팀 이름" placeholder="14자 이내로 입력해 주세요" />
        <TeamInfoBlank label="팀 인원 수" placeholder="팀의 인원 수를 입력해주세요" />
      </StForm>
      <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'다음'} />
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  padding-bottom: 4rem;
  background-color: ${COLOR.IVORY_1};
  text-align: center;
  .letterImg {
    width: 16.8rem;
    height: 16.8rem;
    margin: 4.7rem 0;
    background-color: aliceblue;
  }
`;
const StTitle = styled.h1`
  margin-top: 1.9rem;
  ${FONT_STYLES.PRETENDARD_B_16};
`;
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 8.4rem;
`;
