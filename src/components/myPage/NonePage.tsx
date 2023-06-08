import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { imgNoHistory } from 'public/assets/images';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';

function NonePage() {
  return (
    <StNonePage>
      <ImageDiv src={imgNoHistory} alt={'무기록 이미지'} className="noHistoryImg" fill={true} />
      <StNoneText>아직 티타임을 진행하지 않으셨군요!</StNoneText>
      <StNoneText>첫 티타임에 참여해보세요 :)</StNoneText>
    </StNonePage>
  );
}

const StNonePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1.2rem;

  @media screen and (max-width: 766px) {
    width: 35.6rem;
    height: 44.5rem;
  }

  @media screen and (min-width: 766px) and (max-width: 1920px) {
    width: 64rem;
    height: 67.8rem;
    margin-bottom: 8.8rem;
  }

  @media screen and (min-width: 1921px) {
    width: 120rem;
    height: 65.7rem;
    margin-bottom: 8.8rem;
  }

  .noHistoryImg {
    position: relative;

    @media screen and (max-width: 766px) {
      width: 20rem;
      height: 20rem;
      margin: 7.8rem 0 2rem 0;
    }

    @media screen and (min-width: 766px) and (max-width: 1920px) {
      width: 32rem;
      height: 32rem;
      margin: 11.6rem 0 4rem 0;
    }

    @media screen and (min-width: 1921px) {
      width: 40rem;
      height: 40rem;
      margin: 4.8rem 0 4rem 0;
    }
  }
`;

const StNoneText = styled.p`
  width: 100%;
  color: ${COLOR.GRAY_9E};
  text-align: center;

  @media screen and (max-width: 766px) {
    ${FONT_STYLES.NEXON_B_16};
    line-height: 140%;
  }

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.NEXON_B_24};
    line-height: 150%;
  }
`;

export default NonePage;
