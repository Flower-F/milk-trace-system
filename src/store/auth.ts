import { atom, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { TRole, loginApi, logoutApi } from '@/api';
import {
  clearItems, getItem, setItem, setTokenExpired,
} from '@/utils';
import { ROLE, TOKEN } from '@/constants';

const getRoleFromString = (role: string) :TRole => {
  if (role === '1' || role === '2' || role === '3') {
    return Number(role) as TRole;
  }

  return 0;
};

const initialToken = atom({
  key: 'auth',
  default: {
    token: window.localStorage.getItem(TOKEN) || '',
    role: getRoleFromString(window.localStorage.getItem(ROLE) || ''),
  },
});

export const useAuthStore = () => {
  const [auth, setRecoilAuth] = useRecoilState(initialToken);
  const navigate = useNavigate();

  const loginAction = async (username: string, password: string, role: TRole) => {
    await loginApi(
      username,
      password,
      role,
    ).then((data) => {
      setRecoilAuth({
        token: data.token,
        role,
      });
      setTokenExpired(data.expiredAt);
      setItem(TOKEN, data.token);
      setItem(ROLE, JSON.stringify(role));
    }).catch().finally(() => {
      navigate('/admin/home');
    });
  };

  const logoutAction = async () => {
    await logoutApi();
    setRecoilAuth({
      token: '',
      role: 0,
    });
    clearItems();
    navigate('/login');
  };

  const getToken = () => auth.token || getItem(TOKEN) || '';

  const getRole = (): TRole => auth.role || getRoleFromString(getItem(ROLE)) || 0;

  return {
    getToken,
    loginAction,
    logoutAction,
    getRole,
  };
};
