import { TOKEN_EXPIRED } from '@/constants';
import { useTokenStore } from '@/store';
import { clearStorage, getItem, setItem } from './storage';

export const getTokenExpired = () => getItem(TOKEN_EXPIRED) || '';

export const setTokenExpired = (tokenExpired: string) => setItem(TOKEN_EXPIRED, tokenExpired);

export const isTimeout = () => {
  const tokenExpired = getTokenExpired();
  const currentTime = new Date().getTime();
  const expiredTime = new Date(tokenExpired).getTime();

  if (expiredTime && currentTime <= expiredTime) {
    return false;
  }

  return true;
};

export const getLoginStatus = () => {
  const { getToken } = useTokenStore();
  const token = getToken();

  let login = false;
  if (token && !isTimeout()) {
    login = true;
  }

  if (!login) {
    clearStorage();
  }

  return login;
};
