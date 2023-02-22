import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const prevPathState = atom<string>({
  key: 'prevPath',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export { prevPathState };
