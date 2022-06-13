import { TOKEN } from '../constants';
import { clearStorage, getItem, setItem } from './storage';

export const getLoginStatus = () => getItem(TOKEN) !== '';

export const login = (token: string) => setItem(TOKEN, token);

export const logout = () => clearStorage();
