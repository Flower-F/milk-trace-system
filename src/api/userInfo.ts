import { request } from '@/utils';

export type TUserInfo = {
  company: string;
  address: string;
  phone: string;
}

export const getUserInfoApi = () => request<TUserInfo>({
  url: '/getUserInfo',
  method: 'GET',
});

export const setUserInfoApi = (userInfo: TUserInfo) => request({
  url: '/setUserInfo',
  method: 'POST',
  data: userInfo,
});
