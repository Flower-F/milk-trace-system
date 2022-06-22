import { atom, useRecoilState } from 'recoil';
import screenfull from 'screenfull';

// true 为全屏
const initialScreen = atom<boolean>({
  key: 'screen',
  default: false,
});

export const useScreenStore = () => {
  const [screen, setRecoilScreen] = useRecoilState(initialScreen);

  const getScreen = () => screen;

  const toggleScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
      screenfull.on('change', () => {
        if (screenfull.isFullscreen) {
          setRecoilScreen(true);
        } else {
          setRecoilScreen(false);
        }
      });
    }
  };

  return {
    getScreen,
    toggleScreen,
  };
};
