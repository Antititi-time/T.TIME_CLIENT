import React from 'react';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgGoogleIcon, imgKakaoIcon } from '@src/assets/images';
import ImageDiv from '../common/ImageDiv';

function LastOrganizerSlider() {
  return (
    <div>
      <StOnboardingWrapper>
        <StFlex>
          <PageText>{ORGANIZER_SLIDER_ITEMS[4].text}</PageText>
          <ImageDiv
            src={ORGANIZER_SLIDER_ITEMS[4].image}
            alt="주최자 온보딩 이모티콘"
            className="organizerEmoticon"
            fill={true}
          />
          <StInfor>SNS 계정으로 티타임을 편리하게 이용해 보세요.</StInfor>
          <GoogleLoginButton>
            <ImageDiv src={imgGoogleIcon} alt="구글 아이콘" className="googleIcon" fill={true} />
            <GoogleLoginText>Google 계정으로 시작하기</GoogleLoginText>
          </GoogleLoginButton>
          <KakaoLoginButton>
            <ImageDiv src={imgKakaoIcon} alt="카카오 아이콘" className="kakaoIcon" fill={true} />
            <KakaoLoginText>카카오 계정으로 시작하기</KakaoLoginText>
          </KakaoLoginButton>
        </StFlex>
      </StOnboardingWrapper>
    </div>
  );
}

export default LastOrganizerSlider;

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

const GoogleLoginText = styled.p`
  padding-left: 0.8rem;
  ${FONT_STYLES.PRETENDARD_B_16};
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

const StInfor = styled.p`
  margin-top: 3.1rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
`;

const PageText = styled.p`
  margin-top: 12.2rem;
  text-align: center;
  ${FONT_STYLES.NEXON_B_20};
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
  }
`;
