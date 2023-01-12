import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { COLOR } from '@src/styles/color';
// import { FONT_STYLES } from '@src/styles/fontStyle';
import Link from 'next/link';
import ImageDiv from '@src/components/common/ImageDiv';
import { logoIcon } from '@src/assets/icons';
import { imgMainBackground } from '@src/assets/images';
import { imgMainCharacters } from '@src/assets/images';
import { imgBackgroundItems } from '@src/assets/images';
import BottomButton from '@src/components/common/BottomButton';

function Home() {
  return (
    <StHomeGradientBackground>
      <Head>
        <title>setting-practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StMainCharacters>
        <ImageDiv src={imgMainCharacters} alt="배경 메인 캐릭터 5종" className="mainCharacters" fill={true} />
      </StMainCharacters>
      <StBackgroundItems>
        <ImageDiv src={imgBackgroundItems} alt="배경 아이템" className="backgroundItems" />
      </StBackgroundItems>
      <StLogo>
        <ImageDiv src={logoIcon} alt="티타임 로고" className="logoIcon" />
      </StLogo>
      <StInviteButton>
        <Link href="/invite">
          <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'초대장 만들기'} />
        </Link>
      </StInviteButton>
    </StHomeGradientBackground>
  );
}

export default Home;

const characterAnimation = () => keyframes`
  from {
    transform: translate(0%,5%);
  } 50% {
    transform: translate(0%,-5%);
  }`;

const StMainCharacters = styled.div`
  position: relative;
  .mainCharacters {
    position: absolute;
    width: 34.4rem;
    height: 39.3rem;
    top: 13.1rem;
    left: 2.3rem;
    animation: ${characterAnimation} 3s infinite linear alternate;
  }
`;

const StBackgroundItems = styled.div`
  position: absolute;
  left: 3.13rem;
  top: 8.6rem;
`;

const StInviteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 57.1rem;
`;

const StHomeGradientBackground = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background-size: contain;
  background: url(${imgMainBackground.src});
`;

const StLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logoIcon {
    position: absolute;
    top: 25.8rem;
    z-index: 9;
  }
`;
