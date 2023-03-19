import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { imgNoHistory } from '@src/assets/images';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';

function NonePage() {
  return (
    <StNonePage>
      <ImageDiv src={imgNoHistory} alt={'무기록 이미지'} className="noHistoryImg" fill={true} />
      <StNoneText>아직 티타임을 진행하지 않으셨군요! 첫 티타임에 참여해보세요 :)</StNoneText>
    </StNonePage>
  );
}

const StNonePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 35.6rem;
  height: 44.5rem;
  background: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  .noHistoryImg {
    position: relative;
    width: 20rem;
    height: 20rem;
    margin-top: 7.8rem;
  }
`;

const StNoneText = styled.p`
  width: 24.7rem;
  margin-top: 2rem;
  color: ${COLOR.GRAY_9E};
  ${FONT_STYLES.NEXON_B_16};
  text-align: center;
  line-height: 140%;
`;

export default NonePage;
