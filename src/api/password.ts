import md5 from 'md5';
import { request } from '@/utils';

export const setPasswordApi = (password: string) => request({
  url: '/setPassword',
  data: {
    password: md5(password),
  },
  method: 'POST',
});
