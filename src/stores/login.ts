import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const prevPathAtom = atom<string>({
  key: 'prevPathAtom',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export { prevPathAtom };
