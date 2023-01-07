import styled from 'styled-components';
import axios from 'axios';
import { COLOR } from '@src/styles/color';
import JoinTop from '@src/components/join/JoinTop';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { imgCenturyGothicLogo } from '@src/assets/images';
import { icJoinRound } from '@src/assets/icons';
import ImageDiv from '@src/components/common/ImageDiv';
import BottomButton from '@src/components/common/BottomButton';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';

function Join() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');

  const handleNickChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleNickSubmit = () => {
    axios
      .post('/api/team/teamId', {
        nickname: nickname,
      })
      .then((response) => {
        console.log(response);
        router.push({
          pathname: `/chat/${response.data.team_Id}/${response.data.user_Id}`,
          query: { teamName: '나림이네팀' },
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // 명지언니가 채팅에서
    // import { useRouter } from 'next/router';
    // const router = useRouter();
    // console.log(router.query.teamName);
    // 이런식으로 사용하면 됨!
  };

  return (
    <StJoin>
      <JoinTop />
      <StAsset />
      <StMainContainer>
        <StTeamName>&apos;안티티티티프레져프레저안티티&apos;</StTeamName>
        <StRowContainer>
          <ImageDiv src={imgCenturyGothicLogo} alt="T.time_logo" className="imgCenturyGothicLogo" fill></ImageDiv>
          <StInviteComment>에 초대합니다</StInviteComment>
        </StRowContainer>
        <StListContainer>
          <StList>총 OO명</StList>
          <StList>질문 개수: 12개</StList>
          <StList>예상 소요시간: 약 10분 이내</StList>
        </StListContainer>
      </StMainContainer>
      <StInputContainer>
        <StRowContainer>
          <ImageDiv src={icJoinRound} alt="icon_join_round" className="icJoinRound"></ImageDiv>
          <StNickname>참여자 닉네임</StNickname>
        </StRowContainer>
        <StInputBox placeholder="닉네임을 입력해주세요" onChange={(e) => handleNickChange(e)}></StInputBox>
        <StNotice>4글자 이내 한글로 입력해주세요</StNotice>
      </StInputContainer>
      <StButtonContainer onClick={handleNickSubmit}>
        <BottomButton width={28.2} color={COLOR.ORANGE_1} text={'다음'} />
      </StButtonContainer>
    </StJoin>
  );
}

export default Join;

const StJoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 39rem;
  width: 100vw;
  padding-bottom: 4rem;
  background-color: ${COLOR.IVORY_1};
`;

const StAsset = styled.div`
  width: 16rem;
  height: 11rem;
  margin-top: 2.7rem;
  background-color: ${COLOR.IVORY_3};
`;

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 29.4rem;
  height: 20.8rem;
  padding: 3rem 2.4rem 3rem 2.4rem;
  margin: 2rem 0rem 2.9rem 0rem;
  border-radius: 1.2rem;
  background-color: ${COLOR.WHITE_100};
  box-shadow: 0rem 0.2rem 1.3rem rgba(0, 0, 0, 0.05);

  .imgCenturyGothicLogo {
    position: relative;
    width: 7.2rem;
    height: 2.4rem;
  }
`;

const StTeamName = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_16};
  line-height: 2.56rem;
`;

const StRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StInviteComment = styled.p`
  color: ${COLOR.ORANGE_TEXT};
  ${FONT_STYLES.NEXON_B_20};
`;

const StListContainer = styled.ol`
  margin-top: 2rem;
  list-style-type: disc;
`;

const StList = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  color: ${COLOR.BLACK};
  ${FONT_STYLES.NEXON_R_16};
`;

const StInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 29.4rem;
  margin-bottom: 3rem;
`;

const StNickname = styled.p`
  margin-left: 0.8rem;
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_B_16};
`;

const StInputBox = styled.input`
  width: 121.428571%; // 17/14 * 100
  padding: 1.45714285rem; // 기존값1.2rem * 121.428571%
  margin-bottom: 0.971428568rem;
  margin-right: -21.428571%; // bottom 기존값0.8rem * 121.428571%
  border: none;
  border-radius: 0;
  border-bottom: 0.121428571rem solid ${COLOR.GRAY_7E};
  outline: none !important;
  background: none;
  ${FONT_STYLES.NEXON_R_16};
  font-size: 1.7rem; // 17px 기준 줌인이 안 되므로 17로 지정
  line-height: 2.18571428rem; // 기존값1.8rem * 121.428571%
  transform: scale(0.82352941); // 14/17 * 100
  transform-origin: left top;
`;

const StNotice = styled.p`
  color: ${COLOR.BLUE_TEXT};
  ${FONT_STYLES.NEXON_R_12};
`;

const StButtonContainer = styled.button``;
