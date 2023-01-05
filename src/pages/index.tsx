import Head from 'next/head';
import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import Link from 'next/link';
import ImageDiv from '@src/components/common/ImageDiv';
import { logoIcon } from '@src/assets/icons';

function Home() {
  return (
    <div>
      <Head>
        <title>setting-practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StLogo>
        <ImageDiv src={logoIcon} alt="티타임 로고" className="logoIcon" />
      </StLogo>
      <StInviteButton>
        <Link href="/invite">초대장 만들기</Link>
      </StInviteButton>
    </div>
  );
}

export default Home;

const StInviteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28.2rem;
  height: 4.8rem;
  margin: 57.2rem 5.4rem 3.9rem 5.4rem;
  border: 0rem solid ${COLOR.ORANGE_1};
  border-radius: 10rem;
  background-color: ${COLOR.ORANGE_1};
  ${FONT_STYLES.PRETENDARD_B_16};

  & > a,
  a:visited {
    color: ${COLOR.WHITE_100};
  }
`;

const StLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logoIcon {
    position: absolute;
    top: 25.8rem;
  }
`;
