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
            title: '참여하기',
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
          title: `${name}의 팀결과를 확인해보세요.`,
          description: '팀 결과를 팀원들과 공유해 깊은 이야기를 나눠보세요.☕️',

          imageUrl:
            'https://github.com/Antititi-time/T.TIME_CLIENT/blob/develop/public/assets/images/img_kakao_teamShare.jpg?raw=true',
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
        buttons: [
          {
            title: '팀 결과 보러가기',
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
          title: `${name}님의 개인결과를 확인해보세요.`,
          description: '개인결과는 링크가 있는 사람만 볼 수 있어요. ☕️',
          imageUrl:
            'https://github.com/Antititi-time/T.TIME_CLIENT/blob/develop/public/assets/images/img_kakao_personalShare.jpg?raw=true',
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
        buttons: [
          {
            title: '개인결과 보러가기',
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
