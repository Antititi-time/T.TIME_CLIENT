import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import AdminProfile from './AdminProfile';
import { D_icon1 } from 'public/assets/images';
import { useRouter } from 'next/router';

function ChatStartTalk() {
  const router = useRouter();
  const teamName = router.query.teamName;
  return (
    <StStartWrap>
      <AdminProfile />
      <ImageDiv src={D_icon1} alt="첫번째 이모티콘" className="StartEmoticon" fill={true} />
      <StAdminChatText>{teamName}의 티타임에 오신걸 환영해요🙌</StAdminChatText>
    </StStartWrap>
  );
}

export default ChatStartTalk;

const StAdminChatText = styled.p`
  display: inline-block;
  width: auto;
  height: 100%;
  padding: 0.8rem 1.2rem;
  margin: 0rem 7.3rem 0.6rem 6.2rem;
  border-radius: 1rem;
  background-color: ${COLOR.BLUE_2};
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_13};
`;

const StStartWrap = styled.div`
  padding-top: 2rem;
  .StartEmoticon {
    position: relative;
    width: 14.8rem;
    height: 14.8rem;
    margin: -1.5rem 18rem 1.2rem 6.2rem;
  }
`;
