import { TOKEN_EXPIRED } from '@/constants';
import { useAuthStore } from '@/store';
import { clearItems, getItem, setItem } from './storage';

export const getTokenExpired = () => getItem(TOKEN_EXPIRED) || '';

export const setTokenExpired = (tokenExpired: string) => setItem(TOKEN_EXPIRED, tokenExpired);

export const isTimeout = () => {
  const tokenExpired = getTokenExpired();
  const currentTime = new Date();
  const expiredTime = new Date(tokenExpired);

  if (expiredTime && currentTime <= expiredTime) {
    return false;
  }

  return true;
};

export const getLoginStatus = () => {
  const { getToken } = useAuthStore();
  const token = getToken();

  let login = false;
  if (token && !isTimeout()) {
    login = true;
  }

  if (!login) {
    clearItems();
  }

  return login;
};
