import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import BottomButton from '@src/components/common/BottomButton';
import ImageDiv from '@src/components/common/ImageDiv';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';
import GoogleLoginButton from '@src/components/common/GoogleLoginButton';
import KakaoLoginButton from '@src/components/common/KakaoLoginButton';
import ToolTip from '@src/components/common/ToolTip';

function OrganizerOnboarding() {
  const sliderRef = useRef<Slider>(null);
  const [oldSlide, setOldSlide] = useState(0);
  const [currentDirection, setCurrentDirection] = useState('');
  const [showLoginButtons, setShowLoginButtons] = useState(false);
  const [isKakaoBrowser, setIsKakaoBrowser] = useState(false);
  const [skipButtonState, setSkipButtonState] = useState(false);
  const settings = {
    dots: true,
    dotsClass: 'customDots',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToLastSlide = () => {
    sliderRef.current?.slickGoTo(4);
    setShowLoginButtons(true);
    setSkipButtonState(true);
  };

  useEffect(() => {
    const isKakao = navigator.userAgent.match('KAKAOTALK');
    setIsKakaoBrowser(Boolean(isKakao));
  }, []);

  useEffect(() => {
    if ((oldSlide >= 3 && currentDirection === 'left') || (skipButtonState && oldSlide !== 4)) {
      setShowLoginButtons(true);
    } else {
      setShowLoginButtons(false);
    }
    setSkipButtonState(false);
  }, [currentDirection, oldSlide]);

  return (
    <>
      <ToolTip />
      <StSlider
        {...settings}
        ref={sliderRef}
        onSwipe={(direction) => {
          setCurrentDirection(direction);
        }}
        beforeChange={(index) => {
          setOldSlide(index);
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
      {!showLoginButtons ? (
        <StSkipButton>
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} handler={goToLastSlide} />
        </StSkipButton>
      ) : (
        <StSocialLoginButton>
          <StLoginButtonContainer isKakaoBrowser={isKakaoBrowser}>
            <StInfor>SNS 계정으로 티타임을 편리하게 이용해 보세요.</StInfor>
            {!isKakaoBrowser && <GoogleLoginButton />}
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
  top: 55rem;
  left: 50%;
  transform: translate(-50%);
`;

const StSocialLoginButton = styled.div`
  position: absolute;
  top: 46.5rem;
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
    margin: 0 0.4rem;
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
    font-size: 1rem;
    line-height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    content: '•';
    text-align: center;
    color: ${COLOR.IVORY_6};
    -webkit-font-smoothing: antialiased;
  }
  .customDots li.slick-active button:before {
    position: absolute;
    top: 0.4rem;
    width: 2rem;
    height: 1rem;
    margin: 0rem 0rem 0rem -0.4rem;
    content: '';
    border-radius: 5rem;
    background-color: ${COLOR.ORANGE_1};
    color: ${COLOR.ORANGE_1};
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
  margin-bottom: 0.8rem;
  color: ${COLOR.GRAY_7E};
  ${FONT_STYLES.PRETENDARD_M_12};
`;

const StLoginButtonContainer = styled.div<{ isKakaoBrowser: boolean }>`
  position: relative;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.isKakaoBrowser ? '7.6rem' : '1rem')};

  button:first-child {
    margin-bottom: 1.6rem;
  }
`;
