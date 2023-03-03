import styled, { keyframes } from 'styled-components';
import SEO from '@src/components/common/SEO';
import { COLOR } from '@src/styles/color';
import Link from 'next/link';
import ImageDiv from '@src/components/common/ImageDiv';
import { imgMainBackground, imgBackgroundItems, imgMainCharacters, imgMainLogo } from '@src/assets/images';
import BottomButton from '@src/components/common/BottomButton';
import useManageScroll from '@src/hooks/UseManageScroll';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import GoogleLoginButton from '@src/components/common/GoogleLoginButton';
=======
>>>>>>> develop

function Home() {
  const [isLogin, setIsLogIn] = useState(false);
  useEffect(() => {
    const item = localStorage.getItem('accessToken');
    if (item) setIsLogIn(true);
  }, []);
  useManageScroll();
  return (
    <StHome>
      <SEO title="T.time | 팀과 내가 함께 성장하는 시간" description="T.time | 팀과 내가 함께 성장하는 시간" />
      <ImageDiv src={imgMainCharacters} alt="배경 메인 캐릭터 5종" className="mainCharacters" fill={true} />
      <ImageDiv src={imgBackgroundItems} alt="배경 아이템" className="backgroundItems" />
      <ImageDiv src={imgMainLogo} alt="티타임 로고" className="logoIcon" fill={true} />
      <ImageDiv src={imgMainBackground} alt="배경" className="mainBackground" fill={true} />
      <StInviteButton>
        <Link href="/invite">
          <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'초대장 만들기'} />
        </Link>
        {isLogin && (
          <Link href="myPage">
            <BottomButton width={28.2} color={COLOR.BLUE_1} text={'지난 T.time 확인하기'} />
          </Link>
        )}
      </StInviteButton>
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
    top: 13.1rem;
    width: 34.4rem;
    height: 39.3rem;
    animation: ${characterAnimation} 3s infinite linear alternate;
  }

  .backgroundItems {
    z-index: 2;
    position: absolute;
    top: 8.6rem;
  }

  .logoIcon {
    z-index: 2;
    position: absolute;
    top: 25.3rem;
    width: 11.8rem;
    height: 6.1rem;
  }

  .mainBackground {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100vw;
    min-height: calc(var(--vh) * 100);
  }
`;

const StInviteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
  position: fixed;
  top: 57.1rem;
  z-index: 2;
`;
