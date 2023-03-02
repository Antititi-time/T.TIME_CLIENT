import React from 'react';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ImageDiv from '@src/components/common/ImageDiv';
import {
  imgTopLogo,
  imgParticipantFirst,
  imgParticipantSecond,
  imgParticipantThird,
  imgParticipantFourth,
  imgParticipantTart,
  imgParticipantCanele,
} from '@src/assets/images';

function participantOnboarding() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <StParticipantOnboarding>
      <Link href={`/join/${router.query.teamId}`}>
        <StartButton>
          <StButtonText>시작하기</StButtonText>
        </StartButton>
      </Link>
      <StTopBar>
        <ImageDiv src={imgTopLogo} alt="TopLogo" className="topLogo" fill={true} />
      </StTopBar>
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

export default participantOnboarding;

const StButtonText = styled.p`
  color: ${COLOR.WHITE_100};
  ${FONT_STYLES.PRETENDARD_B_16};
`;

const StartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 4rem;
  width: 28.2rem;
  height: 4.8rem;
  margin-left: 5.4rem;
  border-radius: 10rem;
  background-color: ${COLOR.ORANGE_1};
  filter: drop-shadow(0 0.2rem 1rem rgba(255, 108, 61, 0.5));
  z-index: 2;
`;

const StSixthText = styled.p`
  text-align: center;
  ${FONT_STYLES.NEXON_R_22};
`;

const StSixthPart = styled.div`
  .imgParticipantTart {
    position: relative;
    width: 47.8rem;
    height: 37.5rem;
    margin: 1.5rem 0 0 1.6rem;
  }
`;

const StFifthPart = styled.div`
  .imgParticipantCanele {
    position: relative;
    width: 42.7rem;
    height: 30.8rem;
    margin: 0.637rem 0 0 -5.748rem;
  }
`;

const StFourthText = styled.p`
  margin-top: -8.678rem;
  text-align: center;
  ${FONT_STYLES.NEXON_R_22};
`;

const StFourthPart = styled.div`
  .imgParticipantFourth {
    position: relative;
    width: 32.9rem;
    height: 32.9rem;
    margin-left: 2.7rem;
  }
`;

const StThirdText = styled.p`
  margin: 2.779rem 2.1rem 0rem 0rem;
  text-align: right;
  ${FONT_STYLES.NEXON_R_22};
  z-index: 1;
`;

const StThirdPart = styled.div`
  .imgParticipantThird {
    position: relative;
    position: relative;
    top: -15rem;
    left: -2.5rem;
    width: 39.4rem;
    height: 36.022rem;
  }
`;

const StSecondText = styled.p`
  margin: 4.036rem 0 0 2.5rem;
  ${FONT_STYLES.NEXON_R_22};
`;

const StSecondPart = styled.div`
  .imgParticipantSecond {
    position: relative;
    width: 39.6rem;
    height: 37.1rem;
    margin-left: 5.5rem;
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
  margin-top: 8.8rem;
  ${FONT_STYLES.NEXON_R_22};
`;

const StFirstPart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .imgParticipantFirst {
    position: relative;
    width: 30.1rem;
    height: 24.6rem;
    margin-top: 3.3rem;
  }
`;

const StTopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5.8rem;
  background-color: ${COLOR.WHITE_100};
  z-index: 2;
  opacity: 80%;
  .topLogo {
    position: relative;
    width: 5.8rem;
    height: 3rem;
    z-index: 3;
  }
`;

const StParticipantOnboarding = styled.div`
  overflow: hidden;
`;
