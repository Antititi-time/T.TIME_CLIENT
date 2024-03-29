import { COLOR } from '@src/styles/color';
import { FONT_STYLES } from '@src/styles/fontStyle';
import { KakaoLogin } from 'public/assets/icons';
import styled from 'styled-components';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { prevPathState } from '@src/atoms/login';
import { useRouter } from 'next/router';
import { DOMAIN } from '@src/constants/domain';
function KakaoLoginButton() {
  const setPrevPath = useSetRecoilState(prevPathState);

  const router = useRouter();
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${DOMAIN}/auth/kakao&response_type=code`;
  const getCurrentPath = () => {
    setPrevPath(router.asPath);
  };
  return (
    <Link href={KAKAO_AUTH_URL}>
      <StKakaoLoginButton onClick={getCurrentPath}>
        <StKakaoLogo src={KakaoLogin.src} />
        <StLoginText>카카오 계정으로 시작하기</StLoginText>
      </StKakaoLoginButton>
    </Link>
  );
}

const StKakaoLoginButton = styled.button`
  display: flex;
  align-items: center;
  width: 28.2rem;
  height: 4.8rem;
  border-radius: 10rem;
  background-color: ${COLOR.YELLOW};
  box-shadow: 0 0.2rem 1.3rem rgba(0, 0, 0, 0.05);
`;

const StKakaoLogo = styled.img`
  margin-left: 4.2rem;
  margin-right: 0.8rem;
`;
const StLoginText = styled.p`
  ${FONT_STYLES.PRETENDARD_B_16}
  color:${COLOR.BLACK}
`;
export default KakaoLoginButton;
