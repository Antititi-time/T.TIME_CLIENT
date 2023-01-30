export const shareKakao = (route: string, name: string, shareType: string) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }

    if (shareType === '개인결과') {
      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${name}팀 초대장이 도착했어요!`,
          description: '초대장을 열고, 티타임에 입장해보세요.☕️',

          imageUrl: process.env.NEXT_PUBLIC_KAKAO_SHARE_IMAGE,
          link: {
            mobileWebUrl: route,
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
    if (shareType === '팀결과') {
      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${name}팀의 티타임 결과를 확인하세요.`,
          description: '팀 결과를 통해 팀원들의 속마음을 확인해보세요.☕️',

          imageUrl: process.env.NEXT_PUBLIC_KAKAO_SHARE_IMAGE,
          link: {
            mobileWebUrl: route,
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
    if (shareType === '내 결과') {
      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `${name}님의 티타임 결과를 확인하세요.`,
          description: '결과를 통해 나의 상태를 확인해보세요.☕️',

          imageUrl:
            'https://github.com/Antititi-time/T.TIME_CLIENT/blob/feat/%23102/src/assets/images/kakao_Personal.jpg',
          link: {
            mobileWebUrl: route,
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
