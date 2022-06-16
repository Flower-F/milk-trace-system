import { atom, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ERole, loginApi } from '@/api';
import {
  clearItems, getItem, setItem, setTokenExpired,
} from '@/utils';
import { TOKEN } from '@/constants';

const initialToken = atom({
  key: 'token',
  default: window.localStorage.getItem(TOKEN) || '',
});

export const useTokenStore = () => {
  const [token, setRecoilToken] = useRecoilState(initialToken);
  const navigate = useNavigate();

  const loginAction = (username: string, password: string, role: ERole) => {
    loginApi(
      username,
      password,
      role,
    ).then((data) => {
      setRecoilToken(data.token);
      setTokenExpired(data.expiredAt);
      setItem(TOKEN, data.token);
    }).finally(() => {
      navigate('/admin');
    });
  };

  const logoutAction = () => {
    setRecoilToken('');
    clearItems();
    navigate('/login');
  };

  const getToken = () => token || getItem(TOKEN) || '';

  return {
    getToken,
    loginAction,
    logoutAction,
  };
};