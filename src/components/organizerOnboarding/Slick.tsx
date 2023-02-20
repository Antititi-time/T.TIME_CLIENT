import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
        <OnboardingWrapper>
          <PageText>
            팀워크를 높이고 싶으신가요?
            <span>저 티타미가 도와드릴게요!</span>
          </PageText>
          <ImageDiv src={imgOnbarding1} alt="온보딩 캐릭터 이미지1" className="tTimy1" fill={true} />
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
        </OnboardingWrapper>
        <OnboardingWrapper>
          <PageText>
            초대장을 만들어 <span>팀원들에게 공유해보세요.</span>
          </PageText>
          <ImageDiv src={imgOnbarding2} alt="온보딩 캐릭터 이미지2" className="tTimy2" fill={true} />
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
        </OnboardingWrapper>
        <OnboardingWrapper>
          <PageText>
            &apos;티타미&apos;와의 채팅을 통해 <span>개인의 감정을 털어놓고</span>
          </PageText>
          <ImageDiv src={imgOnbarding3} alt="온보딩 캐릭터 이미지3" className="tTimy3" fill={true} />
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
        </OnboardingWrapper>
        <OnboardingWrapper>
          <PageText>
            개인 혹은 팀 리포트를 통해 <span>우리팀의 생각을 엿볼 수 있어요.</span>
          </PageText>
          <ImageDiv src={imgOnbarding4} alt="온보딩 캐릭터 이미지4" className="tTimy4" fill={true} />
          <BottomButton width={28.2} color={COLOR.BLUE_1} text={'건너뛰기'} />
        </OnboardingWrapper>
        <OnboardingWrapper>
          <PageText>
            팀원들과 차한잔 마시면서 <span>가볍게 이야기 시작해보세요!</span>
          </PageText>
          <ImageDiv src={imgOnbarding5} alt="온보딩 캐릭터 이미지5" className="tTimy5" fill={true} />
          <GoogleLoginButton>
            <ImageDiv src={imgGoogleIcon} alt="구글 아이콘" className="googleIcon" fill={true} />
            <GoogleLoginText>Google 계정으로 시작하기</GoogleLoginText>
          </GoogleLoginButton>
          <KakaoLoginButton>
            <ImageDiv src={imgKakaoIcon} alt="카카오 아이콘" className="kakaoIcon" fill={true} />
            <KakaoLoginText>카카오 계정으로 시작하기</KakaoLoginText>
          </KakaoLoginButton>
        </OnboardingWrapper>
      </Slider>
    </>
  );
}

export default Slick;

const PageText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${FONT_STYLES.PRETENDARD_B_16};
`;

const OnboardingWrapper = styled.div`
  .tTimy1 {
    position: relative;
    width: 35rem;
    height: 25rem;
  }

  .tTimy2 {
    position: relative;
    width: 35rem;
    height: 25rem;
  }

  .tTimy3 {
    position: relative;
    width: 35rem;
    height: 25rem;
  }

  .tTimy4 {
    position: relative;
    width: 35rem;
    height: 25rem;
  }

  .tTimy5 {
    position: relative;
    width: 35rem;
    height: 25rem;
  }
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
