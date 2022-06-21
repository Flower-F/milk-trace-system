import {
  THEME, TOKEN, LANGUAGE, TOKEN_EXPIRED, ROLE,
} from '../constants';

type TKey = typeof THEME | typeof TOKEN | typeof LANGUAGE | typeof TOKEN_EXPIRED | typeof ROLE;

export const setItem = (key: TKey, value: string) => window.localStorage.setItem(key, value);

export const getItem = (key: TKey) => window.localStorage.getItem(key) || '';

export const clearItems = () => {
  const theme = localStorage.getItem(THEME) || 'light';
  window.localStorage.clear();
  localStorage.setItem(THEME, theme);
};
