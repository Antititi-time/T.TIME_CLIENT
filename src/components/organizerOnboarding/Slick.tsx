import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import React, { useRef, useState } from 'react';
import ImageDiv from '../common/ImageDiv';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import BottomButton from '@src/components/common/BottomButton';
import {
  imgOnbarding1,
  imgOnbarding2,
  imgOnbarding3,
  imgOnbarding4,
  imgOnbarding5,
  imgGoogleIcon,
  imgKakaoIcon,
} from '@src/assets/images';

import Slider from 'react-slick';
import styled from 'styled-components';

function Slick() {
  // const [afterState, setAfterState] = useState(0);

  // const

  // const handleCLick = () => {
  //   setAfterState(afterState + 1);
  // };

  const settings = {
    dots: true,
    dotsClass: 'customDots',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    allows: false,
  };

  return (
    <>
      <StSlider {...settings}>
        <OnboardingWrapper>
          <StFlex>
            <PageText>
              팀워크를 높이고 싶으신가요?
              <span>저 티타미가 도와드릴게요!</span>
            </PageText>
            <ImageDiv src={imgOnbarding1} alt="온보딩 캐릭터 이미지1" className="tTimy1" fill={true} />
            <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
          </StFlex>
        </OnboardingWrapper>
        <OnboardingWrapper>
          <StFlex>
            <PageText>
              초대장을 만들어 <span>팀원들에게 공유해보세요.</span>
            </PageText>
            <ImageDiv src={imgOnbarding2} alt="온보딩 캐릭터 이미지2" className="tTimy2" fill={true} />
            <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
          </StFlex>
        </OnboardingWrapper>
        <OnboardingWrapper>
          <StFlex>
            <PageText>
              &apos;티타미&apos;와의 채팅을 통해 <span>개인의 감정을 털어놓고</span>
            </PageText>
            <ImageDiv src={imgOnbarding3} alt="온보딩 캐릭터 이미지3" className="tTimy3" fill={true} />
            <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
          </StFlex>
        </OnboardingWrapper>
        <OnboardingWrapper>
          <StFlex>
            <PageText>
              개인 혹은 팀 리포트를 통해 <span>우리팀의 생각을 엿볼 수 있어요.</span>
            </PageText>
            <ImageDiv src={imgOnbarding4} alt="온보딩 캐릭터 이미지4" className="tTimy4" fill={true} />
            <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
          </StFlex>
        </OnboardingWrapper>
        <OnboardingWrapper>
          <StFlex>
            <PageText>
              팀원들과 차한잔 마시면서 <span>가볍게 이야기 시작해보세요!</span>
            </PageText>
            <ImageDiv src={imgOnbarding5} alt="온보딩 캐릭터 이미지5" className="tTimy5" fill={true} />
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
        </OnboardingWrapper>
      </StSlider>
    </>
  );
}

export default Slick;
const StSlider = styled(Slider)`
  width: 100vw;
  height: 100vh;
  background-color: ${COLOR.IVORY_1};
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-next {
    right: 0;
    bottom: 0;
  }

  .customDots {
    position: absolute;
    top: 4.1rem;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .customDots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  .customDots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .customDots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: 0.25;
    color: ${COLOR.IVORY_6};
    -webkit-font-smoothing: antialiased;
  }
  .customDots li.slick-active button:before {
    opacity: 1;
    color: ${COLOR.ORANGE_1};
  }
`;

const StFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const OnboardingWrapper = styled.div`
  .tTimy1 {
    position: relative;
    width: 35rem;
    height: 25rem;
    margin: 2.4rem 0 11.9rem 0;
  }

  .tTimy2 {
    position: relative;
    width: 35rem;
    height: 25rem;
    margin: 2.4rem 0 11.9rem 0;
  }

  .tTimy3 {
    position: relative;
    width: 35rem;
    height: 25rem;
    margin: 2.4rem 0 11.9rem 0;
  }

  .tTimy4 {
    position: relative;
    width: 35rem;
    height: 25rem;
    margin: 2.4rem 0 11.9rem 0;
  }

  .tTimy5 {
    position: relative;
    width: 35rem;
    height: 25rem;
  }
`;

const StInfor = styled.p`
  margin-top: 3.1rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
`;

const PageText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12.2rem;
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
