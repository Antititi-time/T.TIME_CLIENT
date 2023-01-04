import styled from 'styled-components';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { icKakao, icPaste } from '@src/assets/icons';
export default function InviteModal() {
  return (
    <>
      <STBackGround>
        <STModal>
          <STModalHeader>공유하기</STModalHeader>
          <STInviteArticle>
            <STArticleTitle>초대 링크</STArticleTitle>
            <STArticleLink>https:dkajdljflk/dkjsldjk</STArticleLink>
          </STInviteArticle>
          <STButtonZone>
            <STCopyButton>
              <STButtonIcon src={icPaste.src} />
              <STButtonText>초대링크 복사하기</STButtonText>
            </STCopyButton>
            <STKakaoButton>
              <STButtonIcon src={icKakao.src} />
              <STButtonText>카카오톡 공유하기</STButtonText>
            </STKakaoButton>
          </STButtonZone>
          <STFooter>닫기</STFooter>
        </STModal>
      </STBackGround>
    </>
  );
}

const STBackGround = styled.main`
  width: 39rem;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  overflow: hidden;
`;
const STModal = styled.section`
  position: relative;
  width: 32.8rem;
  height: 45.3rem;
  border-radius: 1.4rem;
  margin: 7.6rem 3.1rem 0rem 3.1rem;
  background-color: ${COLOR.IVORY_1};

  overflow: hidden;
`;
const STModalHeader = styled.header`
  font-style: ${FONT_STYLES.PRETENDARD_B_20};
  width: 7rem;
  margin: 2.4rem 12.9rem 0rem 12.9rem;
  display: block;
`;
const STInviteArticle = styled.article`
  background-color: ${COLOR.IVORY_3};
  width: 28.2rem;
  height: 12.4rem;
  margin: 2.2rem 2.3rem 0 2.3rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const STArticleTitle = styled.div`
  width: 22.6rem;
  font-style: ${FONT_STYLES.PRETENDARD_B_14};
`;
const STArticleLink = styled.div`
  width: 22.6rem;
  margin-top: 0.4rem;
  font-style: ${FONT_STYLES.NEXON_R_14};
`;
const STButtonZone = styled.article`
  margin: 4rem 2.3rem 4rem 2.3rem;
`;
const STCopyButton = styled.button`
  width: 28.2rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.BLUE_1};
  display: flex;
  align-items: center;
`;

const STKakaoButton = styled.button`
  width: 28.2rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.ORANGE_1};
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
`;

const STButtonIcon = styled.img`
  margin-left: 1.8rem;
  margin-right: 4.4rem;
`;

const STButtonText = styled.span`
  font-style: ${FONT_STYLES.NEXON_B_16};
  color: white;
`;
const STFooter = styled.footer`
  height: 6.8rem;
  margin-top: 4rem;
  border-top: 1px solid #7e7e7e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: ${FONT_STYLES.NEXON_B_16};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
