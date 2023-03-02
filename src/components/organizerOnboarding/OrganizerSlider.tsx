import React from 'react';
// import { useState } from 'react';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import BottomButton from '@src/components/common/BottomButton';
import ImageDiv from '../common/ImageDiv';
import { imgGoogleIcon, imgKakaoIcon } from '@src/assets/images';

interface OrganizerSliderProps {
  id: number;
}

function OrganizerSlider({ id }: OrganizerSliderProps) {
  return (
    <StOnboardingWrapper>
      <StFlex>
        <PageText>{ORGANIZER_SLIDER_ITEMS[id - 1].text}</PageText>
        <ImageDiv
          src={ORGANIZER_SLIDER_ITEMS[id - 1].image}
          alt="주최자 온보딩 이모티콘"
          className="organizerEmoticon"
          fill={true}
        />
        {id < 5 ? (
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
        ) : (
          <>
            <StInfor>SNS 계정으로 티타임을 편리하게 이용해 보세요.</StInfor>
            <GoogleLoginButton>
              <ImageDiv src={imgGoogleIcon} alt="구글 아이콘" className="googleIcon" fill={true} />
              <GoogleLoginText>Google 계정으로 시작하기</GoogleLoginText>
            </GoogleLoginButton>
            <KakaoLoginButton>
              <ImageDiv src={imgKakaoIcon} alt="카카오 아이콘" className="kakaoIcon" fill={true} />
              <KakaoLoginText>카카오 계정으로 시작하기</KakaoLoginText>
            </KakaoLoginButton>
          </>
        )}
      </StFlex>
    </StOnboardingWrapper>
  );
}

export default OrganizerSlider;

const PageText = styled.p`
  margin-top: 12.2rem;
  text-align: center;
  ${FONT_STYLES.PRETENDARD_B_16};
  white-space: pre-wrap;
`;

const StFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const StOnboardingWrapper = styled.div`
  overflow: hidden;
  .organizerEmoticon {
    position: relative;
    width: 35rem;
    height: 25rem;
    margin: 2.4rem 0 11.9rem 0;
  }
`;

const StInfor = styled.p`
  margin-top: 3.1rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
`;

const GoogleLoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28.2rem;
  margin-top: 1rem;
  padding: 1.3rem 0rem;
  border-radius: 10rem;
  background-color: ${COLOR.WHITE_100};
  color: ${COLOR.BLACK};
  .googleIcon {
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const GoogleLoginText = styled.p`
  padding-left: 0.8rem;
  ${FONT_STYLES.PRETENDARD_B_16};
`;

const KakaoLoginText = styled.p`
  padding-left: 0.8rem;
  ${FONT_STYLES.PRETENDARD_B_16};
`;

const KakaoLoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28.2rem;
  margin-top: 1.6rem;
  padding: 1.3rem 0rem;

  border-radius: 10rem;
  background-color: ${COLOR.KAKAO_YELLOW};
  color: ${COLOR.BLACK};
  .kakaoIcon {
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
  }
`;
