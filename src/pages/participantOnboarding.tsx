import React from 'react';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoTop from '@src/components/common/LogoTop';
import BottomButton from '@src/components/common/BottomButton';

import ImageDiv from '@src/components/common/ImageDiv';
import {
  imgParticipantFirst,
  imgParticipantSecond,
  imgParticipantThird,
  imgParticipantFourth,
  imgParticipantTart,
  imgParticipantCanele,
} from '@src/assets/images';

function ParticipantOnboarding() {
  const router = useRouter();
  return (
    <StParticipantOnboarding>
      <Link href={`/join/${router.query.teamId}`}>
        <StartButton>
          <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'시작하기'} />
        </StartButton>
      </Link>
      <LogoTop />
      <StFirstPart>
        <StFirstText>
          티타임은 나와 팀이 <StBlueText>함께</StBlueText>
          <br /> <StOrangeText>성장</StOrangeText>하도록 돕는 서비스에요.
        </StFirstText>
        <ImageDiv src={imgParticipantFirst} alt="imgParticipantFirst" className="imgParticipantFirst" fill={true} />
      </StFirstPart>
      <StSecondPart>
        <StSecondText>
          티타미의 질문에
          <br /> <StOrangeText>솔직하게</StOrangeText>대답해주세요.
        </StSecondText>
        <ImageDiv
          src={imgParticipantSecond.src}
          alt="imgParticipantSecond"
          className="imgParticipantSecond"
          fill={true}
        />
      </StSecondPart>
      <StThirdPart>
        <StThirdText>
          점수는 <br />
          <StOrangeText>1점 ~ 5점</StOrangeText>으로 <br />
          구성되어 있어요.
        </StThirdText>
        <ImageDiv src={imgParticipantThird.src} alt="imgParticipantThird" className="imgParticipantThird" fill={true} />
      </StThirdPart>
      <StFourthPart>
        <StFourthText>
          <StOrangeText>왜</StOrangeText> 그 점수를 선택했는지
          <br /> 간단하게 작성해주세요.
        </StFourthText>
        <ImageDiv
          src={imgParticipantFourth.src}
          alt="imgParticipantFourth"
          className="imgParticipantFourth"
          fill={true}
        />
      </StFourthPart>
      <StFifthPart>
        <ImageDiv
          src={imgParticipantCanele.src}
          alt="imgParticipantCanele"
          className="imgParticipantCanele"
          fill={true}
        />
      </StFifthPart>
      <StSixthPart>
        <StSixthText>
          우리는 <StOrangeText>티타임짱..</StOrangeText>님이
          <br /> 티타임에 솔직하게 <br />
          참여해주실 것이라고 믿어요 :)
        </StSixthText>
        <ImageDiv src={imgParticipantTart.src} alt="imgParticipantTart" className="imgParticipantTart" fill={true} />
      </StSixthPart>
    </StParticipantOnboarding>
  );
}

export default ParticipantOnboarding;

const StartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  filter: drop-shadow(0 0.2rem 1rem rgba(255, 108, 61, 0.5));
  z-index: 2;
  margin: 30rem 0 0 -13.5rem;
`;

const StSixthText = styled.p`
  text-align: center;
  ${FONT_STYLES.NEXON_B_22};
`;

const StSixthPart = styled.div`
  .imgParticipantTart {
    position: relative;
    top: 50%;
    left: 50%;
    width: 47.8rem;
    height: 37.5rem;
    margin-top: 3rem;
    margin-left: -19.9rem;
  }
`;

const StFifthPart = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -0.5rem;
  margin-left: -25.4rem;
  .imgParticipantCanele {
    position: relative;
    width: 42.7rem;
    height: 30.8rem;
  }
`;

const StFourthText = styled.p`
  margin-top: 8.678rem;
  text-align: center;
  ${FONT_STYLES.NEXON_B_22};
`;

const StFourthPart = styled.div`
  .imgParticipantFourth {
    position: relative;
    top: 50%;
    left: 50%;
    width: 32.9rem;
    height: 32.9rem;
    margin-left: -16.45rem;
  }
`;

const StThirdText = styled.p`
  position: relative;
  text-align: right;
  left: -50%;
  margin-right: -8.25rem;
  ${FONT_STYLES.NEXON_B_22};
`;

const StThirdPart = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -22rem;
  .imgParticipantThird {
    position: relative;
    width: 39.4rem;
    height: 36.022rem;
    margin-top: -14.011rem;
  }
`;

const StSecondText = styled.p`
  margin: 4.036rem 0 0 2.5rem;
  ${FONT_STYLES.NEXON_B_22};
`;

const StSecondPart = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -18.25rem;
  margin-top: -1rem;
  .imgParticipantSecond {
    position: relative;
    width: 39.6rem;
    height: 37.1rem;
    margin-left: 4.4rem;
  }
`;

const StOrangeText = styled.span`
  color: ${COLOR.ORANGE_1};
`;

const StBlueText = styled.span`
  color: ${COLOR.BLUE_1};
`;

const StFirstText = styled.p`
  text-align: center;
  margin-top: 3rem;
  ${FONT_STYLES.NEXON_B_22};
`;

const StFirstPart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  .imgParticipantFirst {
    position: relative;
    width: 30.1rem;
    height: 24.6rem;
    margin-top: 3.3rem;
  }
`;

const StParticipantOnboarding = styled.div`
  overflow: hidden;
`;
