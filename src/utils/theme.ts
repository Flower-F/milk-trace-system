import { THEME } from '@/constants';
import { getItem, setItem } from './storage';

export const getTheme = () => getItem(THEME) || 'light';

export type TTheme = 'dark' | 'light';

export const setTheme = (theme: TTheme) => setItem(THEME, theme);
