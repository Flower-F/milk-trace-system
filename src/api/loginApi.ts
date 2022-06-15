import md5 from 'md5';
import { axiosInstance } from '@/utils/request';
import { login } from '@/utils';

export const loginApi = (values: Record<string, any>) => {
  axiosInstance.post('/login', {
    username: values.username,
    password: md5(values.password),
  }).then((res) => {
    const { data } = res;
    if (data.code === 200) {
      const { token, expiredAt } = data.data;
      login(token, expiredAt);
      window.location.reload();
    }
  });
};
