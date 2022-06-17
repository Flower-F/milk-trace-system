import { getMessageList } from '@/utils';
import { data } from '../../../__mock__/sendMessage';
import { MessageItem } from '@/components';
import {
  FACTORY, RANCH, SELLER, STORAGE,
} from '@/constants';
import styles from './style.module.scss';

const MessagePage = () => {
  const messageList = getMessageList(data);

  return (
    <div className={styles['message-container']}>
      {
        messageList.map(({
          ranch, factory, storage, seller, code, id, role,
        }) => (
          <div className={styles.block} key={id}>
            <MessageItem data={code} title="溯源码" shown={ranch !== null} />
            <MessageItem data={ranch} title="牧场" shown={role >= RANCH} />
            <MessageItem data={factory} title="加工厂" shown={role >= FACTORY} />
            <MessageItem data={storage} title="储运商" shown={role >= STORAGE} />
            <MessageItem data={seller} title="销售商" shown={role >= SELLER} />
          </div>
        ))
      }
    </div>
  );
};

export default MessagePage;
