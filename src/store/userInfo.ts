import { atom, useRecoilState } from 'recoil';
import { useMemo, useState } from 'react';
import { getUserInfoApi, setUserInfoApi, TUserInfo } from '@/api';

const initialUserInfo = atom<TUserInfo | null>({
  key: 'userInfo',
  default: null,
});

export const useUserInfoStore = () => {
  const [userInfo, setRecoilUserInfo] = useRecoilState(initialUserInfo);
  const [loading, setLoading] = useState(false);

  const getUserInfo = () => useMemo(() => userInfo, [userInfo]);

  const setUserInfo = async (userInfo: TUserInfo) => {
    setLoading(true);
    await setUserInfoApi(userInfo);
    setLoading(false);
    setRecoilUserInfo(userInfo);
  };

  const loadUserInfo = async () => {
    setLoading(true);
    const userInfo = await getUserInfoApi();
    setLoading(false);
    setRecoilUserInfo(userInfo);
  };

  return {
    loading,
    setUserInfo,
    getUserInfo,
    loadUserInfo,
  };
};
