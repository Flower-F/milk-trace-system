import { useEffect } from 'react';
import { Spin } from '@douyinfe/semi-ui';
import { MessageList } from '@/components';
import {
  FACTORY, RANCH, SELLER, STORAGE,
} from '@/constants';
import { useAuthStore, useMessageStore } from '@/store';
import styles from './style.module.scss';

const MessagePage = () => {
  const {
    getMessage, loadMessage, loading,
  } = useMessageStore();

  const messageList = getMessage();

  useEffect(() => {
    loadMessage();
  }, []);

  const { getRole } = useAuthStore();

  const role = getRole();

  const shownArray = [
    role >= RANCH,
    role >= FACTORY,
    role >= STORAGE,
    role >= SELLER,
  ];

  return (
    <div className={styles['message-container']}>
      {
        !loading ? <MessageList messageList={messageList} shownArray={shownArray} />
          : <div className={styles.spin}><Spin size="large" /></div>
      }
    </div>
  );
};

export default MessagePage;
