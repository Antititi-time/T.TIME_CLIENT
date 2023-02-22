import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { prevPathAtom } from '@src/stores/login';

function Google() {
  const router = useRouter();
  const prevPath = useRecoilValue(prevPathAtom);
  const url = router.asPath;
  const code = url?.split('#access_token=')[1]?.split('&')[0];
  console.log(code);
  return (
    <div>
      <button
        onClick={() => {
          router.push(prevPath);
        }}>
        테스트
      </button>
    </div>
  );
}

export default Google;
