import styled, { keyframes } from 'styled-components';
import SEO from '@common/SEO';
import { COLOR } from '@src/styles/color';
import Link from 'next/link';
import ImageDiv from '@common/ImageDiv';
import {
  imgMainBackground,
  imgBackgroundItems,
  imgMainCharacters,
  imgMainCharactersBig,
  imgMainLogo,
} from 'public/assets/images';
import BottomButton from '@common/BottomButton';
import useManageScroll from '@src/hooks/UseManageScroll';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ToolTip from '@src/components/common/ToolTip';

function Home() {
  const [isLogin, setIsLogIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const item = localStorage.getItem('accessToken');
    if (!item) router.push('/organizerOnboarding');
    else setIsLogIn(true);
  }, []);
  useManageScroll();
  return (
    <StHome>
      <SEO title="T.time | 팀과 내가 함께 성장하는 시간" description="T.time | 팀과 내가 함께 성장하는 시간" />
      <ImageDiv src={imgMainCharacters} alt="배경 메인 캐릭터 5종" className="mainCharacters" fill={true} />
      <ImageDiv src={imgMainCharactersBig} alt="배경" className="mainCharacters big" fill={true} />
      <ImageDiv src={imgBackgroundItems} alt="배경 아이템" className="backgroundItems" fill={true} />
      <ImageDiv src={imgMainLogo} alt="티타임 로고" className="logoIcon" fill={true} />
      <ImageDiv src={imgMainBackground} alt="배경" className="mainBackground" fill={true} />
      <StButtonContainer>
        <Link href="/invite">
          <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'초대장 만들기'} />
        </Link>
        {isLogin && (
          <Link href="myPage">
            <BottomButton width={28.2} color={COLOR.BLUE_1} text={'지난 T.time 확인하기'} />
          </Link>
        )}
      </StButtonContainer>
      <ToolTip top={0} />
    </StHome>
  );
}

export default Home;

const characterAnimation = () => keyframes`
  from {
    transform: translate(0%,5%);
  } 50% {
    transform: translate(0%,-5%);
  }   `;

const StHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .mainCharacters {
    z-index: 2;
    position: relative;
    top: 8.1rem;
    width: 34.4rem;
    height: 39.3rem;
    animation: ${characterAnimation} 3s infinite linear alternate;

    @media screen and (min-width: 766px) {
      display: none;
    }
  }

  .big {
    display: none;

    @media screen and (min-width: 766px) {
      display: block;
      width: 42.8rem;
      height: 41.2rem;
    }
  }

  .backgroundItems {
    z-index: 1;
    position: absolute;
    top: 3.6rem;
    width: 33.714rem;
    height: 44.565rem;

    @media screen and (min-width: 766px) {
      width: 36.8rem;
      height: 44.9rem;
    }
  }

  .logoIcon {
    z-index: 2;
    position: relative;
    top: -14.8rem;
    width: 12.2rem;
    height: 6.2rem;

    @media all and (min-width: 766px) {
      top: -18rem;
      width: 10.8rem;
      height: 5.6rem;
    }
  }

  .mainBackground {
    position: absolute;
    top: 0;
    width: 100vw;
    min-height: calc(var(--vh) * 100);
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
  position: absolute;
  top: 50.7rem;
  z-index: 2;

  @media all and (min-width: 766px) {
    top: 55rem;
    flex-direction: row;
    gap: 6.8rem;
  }
`;
