import { atom, useRecoilState } from 'recoil';
import { useState } from 'react';
import { getUserInfoApi, setUserInfoApi, TUserInfo } from '@/api';

const initialUserInfo = atom<TUserInfo | null>({
  key: 'userInfo',
  default: null,
});

export const useUserInfoStore = () => {
  const [userInfo, setRecoilUserInfo] = useRecoilState(initialUserInfo);
  const [loading, setLoading] = useState(true);

  const getUserInfo = () => userInfo;

  const setUserInfo = async (userInfo: TUserInfo) => {
    await setUserInfoApi(userInfo);
    setRecoilUserInfo(userInfo);
  };

  const loadUserInfo = async () => {
    const result = await getUserInfoApi();
    setLoading(false);
    setRecoilUserInfo(result);
  };

  return {
    getUserInfo,
    setUserInfo,
    loadUserInfo,
    loading,
  };
};
