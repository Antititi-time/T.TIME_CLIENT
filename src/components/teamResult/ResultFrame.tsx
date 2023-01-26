import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import Chart from './Chart';
import DetailResult from './DetailResult';
import { imgTopLogo } from '@src/assets/images';
import SimpleResult from './SimpleResult';
import ImageDiv from '@src/components/common/ImageDiv';

interface TeamResultProps {
  teamId: number;
}

function TeamResult({ teamId }: TeamResultProps) {
  return (
    <StFrame>
      <SimpleResult teamId={teamId} />
      <StDivder />
      <Chart teamId={teamId} />
      <DetailResult teamId={teamId} />
      <StLogoContainer>
        <ImageDiv src={imgTopLogo} alt="T.time" className="imgTopLogo" fill={true} />
        <p>나와 팀 함께 성장하는 시간</p>
      </StLogoContainer>
    </StFrame>
  );
}

export default TeamResult;

const StFrame = styled.div`
  z-index: 1;
  width: 34.6rem;
  height: 100%;
  margin: 2.6rem 0 14.4rem 0;
  padding: 2.1rem 2.1rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.IVORY_1};
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
`;

const StDivder = styled.div`
  position: relative;
  left: -2.1rem;
  width: 34.7rem;
  height: 0.1rem;
  background-color: ${COLOR.GRAY_EC};
`;

const StLogoContainer = styled.div`
  width: 14.1rem;
  height: 5.6rem;
  margin: 6.8rem auto 0 auto;
  ${FONT_STYLES.NEXON_R_12};
  color: ${COLOR.GRAY_7E};

  .imgTopLogo {
    position: relative;
    width: 5.8rem;
    height: 3rem;
    margin: 0 auto;
    margin-bottom: 1.2rem;
  }
`;
