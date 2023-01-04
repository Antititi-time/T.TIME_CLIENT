export const shareKakao = (route: string, teamName: string, shareType: string) => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.KAKAO_API_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    if (shareType == '개인결과') {
      kakao.Link.sendDefault({
        objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
        content: {
          title: `‘${teamName}’팀 초대장이 도착했어요!`,
          description: '초대장을 열고, 티타임에 입장해보세요.☕️',
          // 인자값으로 받은 title
          imageUrl: process.env.KAKAO_SHARE_IMAGE,
          link: {
            mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
            webUrl: route,
          },
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: route,
              webUrl: route,
            },
          },
        ],
      });
    }
  }
};
