import SEO from '@src/components/common/SEO';
import LogoTop from '@src/components/common/LogoTop';
import { imgErrorChr } from 'public/assets/images';
import ImageDiv from '@src/components/common/ImageDiv';
import styled from 'styled-components';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { COLOR } from '@src/styles/color';

function errorPage() {
  return (
    <>
      <SEO title="T.time | 팀과 내가 함께 성장하는 시간" description="T.time | 팀과 내가 함께 성장하는 시간" />
      <LogoTop></LogoTop>
      <StErrorPage>
        <ImageDiv src={imgErrorChr} alt="에러 캐릭터 사진" className="errorImg" fill />
        <StErrorTextTitle>잘못된 주소입니다.</StErrorTextTitle>
        <StErrorTextText>주소를 다시 한 번 확인해주세요.</StErrorTextText>
      </StErrorPage>
    </>
  );
}

export default errorPage;

const StErrorPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -5.8rem; //LogoTop height만큼 줄여주기

  .errorImg {
    position: relative;
    width: 23rem;
    height: 23rem;
    margin-bottom: 2rem;
  }
`;

const StErrorTextTitle = styled.p`
  ${FONT_STYLES.PRETENDARD_B_20}
  color: ${COLOR.ORANGE_TEXT};
  margin-bottom: 0.8rem;
`;

const StErrorTextText = styled.p`
  ${FONT_STYLES.PRETENDARD_B_14}
  color: ${COLOR.GRAY_7E}
`;
