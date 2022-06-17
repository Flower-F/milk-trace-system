import md5 from 'md5';
import { request } from '@/utils';

export enum ERole {
  _ranch = 0, // 牧场
  _factory = 1, // 加工厂
  _storage = 2, // 储运商
  _seller = 3, // 销售商
}

type TLogin = {
  token: string;
  expiredAt: string;
}

export const loginApi = (username: string, password: string, role: ERole) => request<TLogin>({
  url: '/login',
  data: {
    username,
    password: md5(password),
    role,
  },
  method: 'POST',
});

export const logoutApi = () => request({
  url: '/logout',
  method: 'POST',
});
