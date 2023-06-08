import SEO from '@src/components/common/SEO';
import LogoTop from '@src/components/common/LogoTop';
import { imgErrorChr } from 'public/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';
import ToolTipIcon from '@src/components/common/ToolTipIcon';

interface Errorprops {
  title: string;
  desc: string;
}

function ErrorPage({ title, desc }: Errorprops) {
  return (
    <>
      <SEO title="T.time | 팀과 내가 함께 성장하는 시간" description="T.time | 팀과 내가 함께 성장하는 시간" />
      <LogoTop></LogoTop>
      <ToolTipIcon top={5.8} />
      <StErrorPage>
        <ImageDiv src={imgErrorChr} alt="에러 캐릭터 사진" className="errorImg" fill />
        <StErrorTextTitle>{title}</StErrorTextTitle>
        <StErrorTextText>{desc}</StErrorTextText>
      </StErrorPage>
    </>
  );
}

export default ErrorPage;

const StErrorPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -5.8rem; //LogoTop height만큼 줄여주기

  .errorImg {
    position: relative;
    margin-bottom: 2rem;

    @media screen and (max-width: 765px) {
      width: 23rem;
      height: 23rem;
    }

    @media screen and (min-width: 766px) {
      width: 32rem;
      height: 32rem;
    }
  }
`;

const StErrorTextTitle = styled.p`
  color: ${COLOR.ORANGE_TEXT};
  margin-bottom: 0.8rem;

  @media screen and (max-width: 765px) {
    ${FONT_STYLES.PRETENDARD_B_20}
  }

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_B_32}
  }
`;

const StErrorTextText = styled.p`
  color: ${COLOR.GRAY_7E};

  @media screen and (max-width: 765px) {
    ${FONT_STYLES.PRETENDARD_B_14}
  }

  @media screen and (min-width: 766px) {
    ${FONT_STYLES.PRETENDARD_B_24}
  }
`;
