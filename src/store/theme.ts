import { atom, useRecoilState } from 'recoil';
import { getItem, setItem } from '@/utils';
import { THEME } from '@/constants';

export type TTheme = 'dark' | 'light';

const initialTheme = atom<TTheme>({
  key: 'theme',
  default: window.localStorage.getItem(THEME) === 'dark' ? 'dark' : 'light',
});

export const useThemeStore = () => {
  const [theme, setRecoilTheme] = useRecoilState(initialTheme);

  const getTheme = () => theme || getItem(THEME) || 'light';

  const setTheme = (theme: TTheme) => {
    setRecoilTheme(theme);
    setItem(THEME, theme);
  };

  return {
    getTheme,
    setTheme,
  };
};
