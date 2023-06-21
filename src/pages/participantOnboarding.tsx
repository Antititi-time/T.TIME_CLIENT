import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import Link from 'next/link';
import LogoTop from '@common/LogoTop';
import BottomButton from '@common/BottomButton';
import ImageDiv from '@common/ImageDiv';
import ToolTipIcon from '@src/components/common/ToolTipIcon';

import {
  imgParticipantFirst,
  imgParticipantSecond,
  imgParticipantThird,
  imgParticipantFourth,
  imgParticipantTart,
  imgParticipantCanele,
} from 'public/assets/images';

function ParticipantOnboarding() {
  const [teamId, setTeamId] = useState<string | null>('');
  useEffect(() => {
    setTeamId(localStorage.getItem('teamId'));
    const localNickname = localStorage.getItem('nickName');
    if (localNickname) setNickName(localNickname);
  }, []);
  const [nickName, setNickName] = useState('');
  return (
    <StParticipantOnboarding>
      <Link href={`/join/${teamId}`}>
        <StartButton>
          <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'시작하기'} />
        </StartButton>
      </Link>
      <StLogo>
        <LogoTop />
      </StLogo>
      <ToolTipIcon top={5.8} />

      <StFirstPart>
        <StFirstText className="font">
          티타임은 나와 팀이 <StBlueText>함께</StBlueText>
          <br /> <StOrangeText>성장</StOrangeText>하도록 돕는 서비스예요.
        </StFirstText>
        <ImageDiv src={imgParticipantFirst} alt="imgParticipantFirst" className="imgParticipantFirst" fill={true} />
      </StFirstPart>
      <StSecondPart>
        <StSecondText className="font">
          티타미의 질문에
          <br /> <StOrangeText>솔직하게 </StOrangeText>대답해주세요.
        </StSecondText>
        <ImageDiv
          src={imgParticipantSecond.src}
          alt="imgParticipantSecond"
          className="imgParticipantSecond"
          fill={true}
        />
      </StSecondPart>
      <StThirdPart>
        <StWrapper>
          <StThirdText className="font">
            점수는 <br />
            <StOrangeText>1점 ~ 5점</StOrangeText>으로 <br />
            구성되어 있어요.
          </StThirdText>
        </StWrapper>
        <ImageDiv src={imgParticipantThird.src} alt="imgParticipantThird" className="imgParticipantThird" fill={true} />
      </StThirdPart>
      <StFourthPart>
        <StFourthText className="font">
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
        <StSixthText className="font">
          우리는 <StOrangeText>{nickName}</StOrangeText>님이
          <br /> 티타임에 솔직하게 <br />
          참여해주실 것이라고 믿어요 :)
        </StSixthText>
        <ImageDiv src={imgParticipantTart.src} alt="imgParticipantTart" className="imgParticipantTart" fill={true} />
      </StSixthPart>
    </StParticipantOnboarding>
  );
}

export default ParticipantOnboarding;

const StWrapper = styled.div`
  max-width: 39rem;
  margin-left: 11rem;
  @media screen and (min-width: 766px) {
    margin-left: auto;
  }
`;

const StLogo = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

const StartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  filter: drop-shadow(0 0.2rem 1rem rgba(255, 108, 61, 0.5));
  z-index: 2;
  margin: 23rem 0 0 -13.5rem;
  @media screen and (min-width: 766px) {
    top: 85%;
    margin: 0;
    transform: translateX(-50%);

    > div {
      width: 40rem;
      height: 8rem;
      > p {
        font-size: 3.2rem;
      }
    }
  }
`;

const StSixthText = styled.p`
  text-align: center;
  ${FONT_STYLES.NEXON_B_22};
  line-height: 3.08rem;
`;

const StSixthPart = styled.div`
  .imgParticipantTart {
    position: relative;
    top: 50%;
    left: 50%;
    width: 47.8rem;
    height: 34rem;
    margin-top: 3rem;
    margin-left: -19.9rem;
  }
  .imgParticipantTart {
    @media screen and (min-width: 766px) {
      scale: 1.15;
      left: 0;
      margin: 8.5rem auto 0 auto;
      transform: translateX(11rem);
    }
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
    height: 28rem;
  }

  @media screen and (min-width: 766px) {
    left: 0;
    margin: 0;
    .imgParticipantCanele {
      scale: 1.15;
    }
  }
`;

const StFourthText = styled.p`
  margin-top: 8.678rem;
  text-align: center;
  ${FONT_STYLES.NEXON_B_22};
  line-height: 3.08rem;

  @media screen and (min-width: 766px) {
    margin-top: 10rem;
    margin-bottom: 6.4rem;
  }
`;

const StFourthPart = styled.div`
  .imgParticipantFourth {
    position: relative;
    top: 50%;
    left: 50%;
    width: 32.9rem;
    height: 32.9rem;
    margin-left: -16.45rem;

    @media screen and (min-width: 766px) {
      width: 68.6rem;
      height: 68.6rem;
      left: auto;
      margin: 0 auto;
    }
  }
`;

const StThirdText = styled.p`
  position: relative;
  text-align: right;
  left: -50%;
  margin-right: -8.25rem;
  ${FONT_STYLES.NEXON_B_22};
  line-height: 3.08rem;
  @media screen and (min-width: 766px) {
    top: -1rem;
    left: auto;
    margin-right: 4rem;
  }
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
    margin-left: -1.2rem;
  }
  @media screen and (min-width: 766px) {
    left: auto;
    margin: 0 auto;
    .imgParticipantThird {
      width: 67.4rem;
      height: 61.1rem;
      margin-left: -3rem;
    }
  }
`;

const StSecondText = styled.p`
  margin: 4.036rem 0 0 2.5rem;
  ${FONT_STYLES.NEXON_B_22};
  line-height: 3.08rem;

  @media screen and (min-width: 766px) {
    margin-top: 12.9rem;
    margin-left: 2rem;
  }
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

  @media screen and (min-width: 766px) {
    left: auto;
    margin: 0;
    .imgParticipantSecond {
      margin: 0 auto;
      width: 78.9rem;
      height: 75.5rem;
    }
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
  margin-top: 6rem;
  ${FONT_STYLES.NEXON_B_22};
  line-height: 3.08rem;

  @media screen and (min-width: 766px) {
    margin: 5.8rem auto 0 auto;
  }
`;

const StFirstPart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media screen and (min-width: 766px) {
    margin-top: 4.8rem;
  }

  .imgParticipantFirst {
    position: relative;
    width: 30.1rem;
    height: 24.6rem;
    margin-top: 3.3rem;

    @media screen and (min-width: 766px) {
      width: 59.9rem;
      height: 46.4rem;
      margin-top: 8.8rem;
    }
  }
`;

const StParticipantOnboarding = styled.div`
  width: 100vw;
  overflow: hidden;

  @media screen and (min-width: 766px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 76rem;
    .font {
      ${FONT_STYLES.NEXON_B_24};
    }
  }
`;
