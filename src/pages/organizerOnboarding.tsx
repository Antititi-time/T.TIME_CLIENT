import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import BottomButton from '@common/BottomButton';
import ImageDiv from '@common/ImageDiv';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';
import GoogleLoginButton from '@common/GoogleLoginButton';
import KakaoLoginButton from '@common/KakaoLoginButton';
import ToolTipIcon from '@src/components/common/ToolTipIcon';

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
      <ToolTipIcon />
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
  bottom: 18rem;
  left: 50%;
  transform: translate(-50%);
  margin-top: 11.9rem;
  @media (min-width: 766px) {
    margin: 19.4rem 0 4rem 0;
  }
`;

const StSocialLoginButton = styled.div`
  position: absolute;
  bottom: 15rem;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  margin-top: 11.9rem;
  @media (min-width: 766px) {
    margin: 19.4rem 0 4rem 0;
  }
`;

const StSlider = styled(Slider)`
  display: flex;
  flex-direction: center;
  align-items: center;
  width: 100vw;
  min-height: calc(var(--vh) * 100);
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
  position: absolute;
  top: 32rem;
  /* margin-top: 7.2rem; */
  text-align: center;
  ${FONT_STYLES.NEXON_B_20};
  white-space: pre-wrap;

  @media (min-width: 766px) {
    /* margin-top: 3rem; */
    ${FONT_STYLES.NEW_NEXON_B_24}
  }
`;

const StFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -20.7rem;
`;

const StOnboardingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  .organizerEmoticon {
    position: relative;
    width: 35rem;
    height: 25rem;
    top: 44rem;
    /* margin: 2.4rem 0 11.9rem 0; */

    @media (min-width: 766px) {
      position: relative;
      width: 45rem;
      height: 32.2rem;
      /* margin: 11rem 0 15.1rem 0; */
    }
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
