import {
  THEME, TOKEN, LANGUAGE, TOKEN_EXPIRED,
} from '../constants';

type TKey = typeof THEME | typeof TOKEN | typeof LANGUAGE | typeof TOKEN_EXPIRED;

export const setItem = (key: TKey, value: string) => window.localStorage.setItem(key, value);

export const getItem = (key: TKey) => window.localStorage.getItem(key) || '';

export const clearStorage = () => window.localStorage.clear();
