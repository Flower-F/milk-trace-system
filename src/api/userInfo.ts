import { request } from '@/utils';

export const getUserInfoApi = () => request.get('/userInfo');
