import { atom, useRecoilState } from 'recoil';
import { useMemo, useState } from 'react';
import { getMessageApi, setMessageApi, TMessage } from '@/api';
import { getStandardMessageList } from '@/utils';

const initialMessageList = atom<TMessage[] | null>({
  key: 'message',
  default: null,
});

export const useMessageStore = () => {
  const [messageList, setRecoilMessageList] = useRecoilState(initialMessageList);
  const [loading, setLoading] = useState(false);

  const loadMessage = async () => {
    setLoading(true);
    const message = await getMessageApi();
    setLoading(false);
    setRecoilMessageList(message);
  };

  const getMessage = () => useMemo(() => getStandardMessageList(messageList), [messageList]);

  const setMessage = async (data: Record<string, any>, code: string | null) => {
    setLoading(true);
    await setMessageApi(data, code);
    setLoading(false);
  };

  return {
    loading,
    loadMessage,
    getMessage,
    setMessage,
  };
};
