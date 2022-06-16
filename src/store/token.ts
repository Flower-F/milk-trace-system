import { atom, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ERole, loginApi } from '@/api';
import {
  clearStorage, getItem, setItem, setTokenExpired,
} from '@/utils';
import { TOKEN } from '@/constants';

const initialToken = atom({
  key: 'token',
  default: '',
});

export const useTokenStore = () => {
  const [token, setToken] = useRecoilState(initialToken);
  const navigate = useNavigate();

  const loginAction = (username: string, password: string, role: ERole) => {
    loginApi(
      username,
      password,
      role,
    ).then((data) => {
      setToken(data.token);
      setTokenExpired(data.expiredAt);
      setItem(TOKEN, data.token);
    }).finally(() => {
      navigate('/admin');
    });
  };

  const logoutAction = () => {
    setToken('');
    clearStorage();
    navigate('/login');
  };

  const getToken = () => token || getItem(TOKEN);

  return {
    getToken,
    loginAction,
    logoutAction,
  };
};
