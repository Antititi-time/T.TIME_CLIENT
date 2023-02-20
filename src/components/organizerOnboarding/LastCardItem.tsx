import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styled from 'styled-components';

import { ONBOARDING_CARD_LIST } from '@src/constants/organizerOnboarding/cardItems';

function CardItems() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    allows: false,
  };
  return (
    <>
      <Slider {...settings}>
        {ONBOARDING_CARD_LIST.map((item: string, index: number) => (
          <SliderItem key={index}>
            <img src={item.image} alt="이모티콘" fill={true} />
          </SliderItem>
        ))}
      </Slider>
    </>
  );
}

export default CardItems;
const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;
