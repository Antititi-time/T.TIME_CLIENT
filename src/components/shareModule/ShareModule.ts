export const useCopyLink = () => {
  try {
    alert('클립보드에 복사되었습니다.');
  } catch (error) {
    alert('클립보드 복사에 실패하였습니다.');
  }
};
export const setKakao = () => {
  const script: HTMLScriptElement = document.createElement('script');
  script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
  script.async = true;
  document.body.appendChild(script);
};
