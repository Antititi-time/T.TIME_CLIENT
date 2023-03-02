import React from 'react';
import { useState } from 'react';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import BottomButton from '@src/components/common/BottomButton';
import ImageDiv from '../common/ImageDiv';

function OrganizerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlider = (e: MouseEvent) => {
    if (e === 'mouseup') {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <StOnboardingWrapper>
      <StFlex>
        <PageText>{ORGANIZER_SLIDER_ITEMS[currentIndex].text}</PageText>
        <ImageDiv
          src={ORGANIZER_SLIDER_ITEMS[currentIndex].image}
          alt="주최자 온보딩 이모티콘"
          className="organizerEmoticon"
          fill={true}
        />
        <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
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
