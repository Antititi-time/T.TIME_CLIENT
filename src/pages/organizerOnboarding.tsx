import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import OrganizerSlider from '../components/organizerOnboarding/OrganizerSlider';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { ORGANIZER_SLIDER_ITEMS } from '@src/constants/organizerOnboarding/organizerSliderItems';

function OrganizerOnboarding() {
  const settings = {
    dots: true,
    dotsClass: 'customDots',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    allows: false,
  };
  return (
    <StSlider {...settings}>
      {ORGANIZER_SLIDER_ITEMS.map((item, idx) => (
        <div key={idx}>
          <OrganizerSlider id={item.id} />
        </div>
      ))}
    </StSlider>
  );
}

export default OrganizerOnboarding;

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
