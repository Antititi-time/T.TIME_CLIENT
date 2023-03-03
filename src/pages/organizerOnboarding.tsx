import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { imgGoogleIcon, imgKakaoIcon } from '@src/assets/images';
import BottomButton from '@src/components/common/BottomButton';
import ImageDiv from '@src/components/common/ImageDiv';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';

function OrganizerOnboarding() {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: true,
    dotsClass: 'customDots',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    allows: false,
  };
  const on = () => {
    sliderRef.current?.slickGoTo(4);
  };
  return (
    <StSlider {...settings} ref={sliderRef}>
      {ORGANIZER_SLIDER_ITEMS.map((item, idx) => (
        <StOnboardingWrapper key={idx}>
          <StFlex>
            <PageText>{ORGANIZER_SLIDER_ITEMS[item.id - 1].text}</PageText>
            <ImageDiv
              src={ORGANIZER_SLIDER_ITEMS[item.id - 1].image}
              alt="주최자 온보딩 이모티콘"
              className="organizerEmoticon"
              fill={true}
            />
            {item.id < 5 ? (
              <div onClick={on}>
                <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
              </div>
            ) : (
              <StSocialLoginButton>
                <StInfor>SNS 계정으로 티타임을 편리하게 이용해 보세요.</StInfor>
                <GoogleLoginButton>
                  <ImageDiv src={imgGoogleIcon} alt="구글 아이콘" className="googleIcon" fill={true} />
                  <GoogleLoginText>Google 계정으로 시작하기</GoogleLoginText>
                </GoogleLoginButton>
                <KakaoLoginButton>
                  <ImageDiv src={imgKakaoIcon} alt="카카오 아이콘" className="kakaoIcon" fill={true} />
                  <KakaoLoginText>카카오 계정으로 시작하기</KakaoLoginText>
                </KakaoLoginButton>
              </StSocialLoginButton>
            )}
          </StFlex>
        </StOnboardingWrapper>
      ))}
    </StSlider>
  );
}

export default OrganizerOnboarding;

const StSocialLoginButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSlider = styled(Slider)`
  display: flex;
  flex-direction: center;
  align-items: center;
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
    width: 10px;
    height: 10px;
    padding: 3px;
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
    width: 1rem;
    height: 1rem;
    content: '•';
    text-align: center;
    opacity: 0.25;
    color: ${COLOR.IVORY_6};
    -webkit-font-smoothing: antialiased;
  }
  .customDots li.slick-active button:before {
    position: absolute;
    top: 0.5rem;
    width: 2rem;
    height: 1rem;
    margin: 0rem 0rem 0rem -0.4rem;
    content: '';
    border-radius: 5rem;
    background-color: ${COLOR.ORANGE_1};
    color: ${COLOR.ORANGE_1};
    opacity: 1;
  }
`;

const PageText = styled.p`
  margin-top: 7.2rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
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
