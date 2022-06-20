import { atom, useRecoilState } from 'recoil';
import { useMemo, useState } from 'react';
import cloneDeep from 'lodash-es/cloneDeep';
import {
  getMessageApi, setMessageApi, TMessage, TRole,
} from '@/api';
import { editMessage, getStandardMessageList } from '@/utils';

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

  const setMessage = async (data: Record<string, any>, code: string | null, role: TRole) => {
    setLoading(true);
    const saveData = cloneDeep(data);
    await setMessageApi(data, code);
    const messageEditIndex = messageList?.findIndex((message) => message.code === code);
    if (messageList && messageEditIndex !== undefined) {
      const messageEdit = editMessage(messageList[messageEditIndex], role, saveData);
      const newMessageList = [
        ...messageList.slice(0, messageEditIndex),
        messageEdit,
        ...messageList.slice(messageEditIndex + 1),
      ];
      setRecoilMessageList(newMessageList);
    }
    setLoading(false);
  };

  return {
    loading,
    loadMessage,
    getMessage,
    setMessage,
  };
};
