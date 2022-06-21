import { atom, useRecoilState } from 'recoil';
import { useMemo, useState } from 'react';
import shortid from 'shortid';
import {
  getMessageApi, setMessageApi, TMessage,
} from '@/api';
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
    const messageList = await getMessageApi();
    messageList.forEach((message) => { message.id = shortid.generate(); });
    setLoading(false);
    setRecoilMessageList(messageList);
  };

  const getMessage = () => useMemo(() => getStandardMessageList(messageList), [messageList]);

  const setMessage = async (
    data: Record<string, any>,
    code: string | null,
  ) => {
    setLoading(true);
    await setMessageApi(data, code);
    await loadMessage();
    setLoading(false);
  };

  return {
    loading,
    loadMessage,
    getMessage,
    setMessage,
  };
};
