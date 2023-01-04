import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import ImageDiv from '@src/components/common/ImageDiv';
import TeamInfoBlank from '@src/components/invite/TeamInfoBlank';

export default function Invite() {
  return (
    <StContainer>
      <StTitle>초대장 만들기</StTitle>
      <ImageDiv src="" alt="티타임" className="letterImg" />
      <StForm action="post">
        <TeamInfoBlank label="프로젝트 또는 팀 이름" placeholder="14자 이내로 입력해 주세요" />
        <TeamInfoBlank label="팀 인원 수" placeholder="팀의 인원 수를 입력해주세요" />
      </StForm>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  .letterImg {
    width: 16.8rem;
    height: 16.8rem;
    margin: 4.7rem 0;
  }
`;
const StTitle = styled.h1`
  ${FONT_STYLES.PRETENDARD_B_20};
  margin-top: 1.9rem;
`;
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4re;
`;
