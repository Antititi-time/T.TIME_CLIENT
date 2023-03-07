import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import BottomButton from '@src/components/common/BottomButton';
import ImageDiv from '@src/components/common/ImageDiv';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';
import GoogleLoginButton from '@src/components/common/GoogleLoginButton';
import KakaoLoginButton from '@src/components/common/KakaoLoginButton';

function OrganizerOnboarding() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    dotsClass: 'customDots',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    allows: false,
  };
  const goToLastSlide = () => {
    sliderRef.current?.slickGoTo(4);
  };
  return (
    <>
      <StSlider
        {...settings}
        ref={sliderRef}
        afterChange={(newSlide) => {
          setCurrentSlide(newSlide);
        }}>
        {ORGANIZER_SLIDER_ITEMS.map((item, idx) => (
          <StOnboardingWrapper key={idx}>
            <StFlex>
              <StPageText>{ORGANIZER_SLIDER_ITEMS[item.id - 1].text}</StPageText>
              <ImageDiv
                src={ORGANIZER_SLIDER_ITEMS[item.id - 1].image}
                alt="주최자 온보딩 이모티콘"
                className="organizerEmoticon"
                fill={true}
              />
            </StFlex>
          </StOnboardingWrapper>
        ))}
      </StSlider>
      {currentSlide < 4 ? (
        <StSkipButton>
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} handler={goToLastSlide} />
        </StSkipButton>
      ) : (
        <StSocialLoginButton>
          <StInfor>SNS 계정으로 티타임을 편리하게 이용해 보세요.</StInfor>
          <StLoginButtonContainer>
            <GoogleLoginButton />
            <KakaoLoginButton />
          </StLoginButtonContainer>
        </StSocialLoginButton>
      )}
    </>
  );
}

export default OrganizerOnboarding;

const StSkipButton = styled.div`
  position: absolute;
  top: 57.1rem;
  left: 50%;
  transform: translate(-50%);
`;

const StSocialLoginButton = styled.div`
  position: absolute;
  top: 48.3rem;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
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
    width: 2rem;
    height: 2rem;
    margin: 0 0.5rem;
    padding: 0;
    cursor: pointer;
  }
  .customDots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    padding: 0.3rem;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .customDots li button:before {
    font-family: 'slick';
    font-size: 0.6rem;
    line-height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    content: '•';
    text-align: center;
    opacity: 0.25;
    color: ${COLOR.GRAY_9E};
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

const StPageText = styled.p`
  position: relative;
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
  position: relative;
  top: -7.2rem;
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
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
`;

const StLoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 1rem;
`;
