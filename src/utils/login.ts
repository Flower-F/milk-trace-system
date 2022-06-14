import { TOKEN, TOKEN_EXPIRED } from '../constants';
import { clearStorage, getItem, setItem } from './storage';

export const getLoginStatus = () => {
  const token = getItem(TOKEN);
  const tokenExpired = getItem(TOKEN_EXPIRED);

  const currentTime = new Date().getTime();
  const expiredTime = new Date(tokenExpired).getTime();

  let login = false;

  if (token && expiredTime && currentTime <= expiredTime) {
    login = true;
  }

  if (!login) {
    clearStorage();
  }

  return login;
};

export const login = (token: string, tokenExpired: string) => {
  setItem(TOKEN, token);
  setItem(TOKEN_EXPIRED, tokenExpired);
};

export const logout = () => {
  clearStorage();
  window.location.reload();
};
