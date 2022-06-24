import md5 from 'md5';
import { request } from '@/utils';
import {
  FACTORY, RANCH, SELLER, STORAGE,
} from '@/constants';

export type TRole = typeof RANCH | typeof FACTORY | typeof STORAGE | typeof SELLER;

export type TLogin = {
  token: string;
  expiredAt: string;
}

export const loginApi = (username: string, password: string, role: TRole) => request<TLogin>({
  url: '/login',
  data: {
    username,
    password: md5(password),
    role,
  },
  method: 'POST',
});

export const logoutApi = () => request<void>({
  url: '/logout',
  method: 'POST',
});
