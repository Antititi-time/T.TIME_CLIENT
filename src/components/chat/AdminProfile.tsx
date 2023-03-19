import styled from 'styled-components';
import ImageDiv from '../common/ImageDiv';
import { profileImg } from 'public/assets/images';
import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';

function AdminProfile() {
  return (
    <StAdminProfile>
      <ImageDiv src={profileImg} alt="주최자 프로필 사진" className="adminProfileImg" fill={true} />
      <StProfileName>주최자 티타미</StProfileName>
    </StAdminProfile>
  );
}

export default AdminProfile;

const StProfileName = styled.span`
  margin-left: 1rem;
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_B_12};
`;
const StAdminProfile = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  .adminProfileImg {
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
    margin-left: 1.6rem;
  }
`;
