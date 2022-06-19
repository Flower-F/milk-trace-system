import { useEffect } from 'react';
import { Spin } from '@douyinfe/semi-ui';
import { MessageItem } from '@/components';
import {
  FACTORY, RANCH, SELLER, STORAGE,
} from '@/constants';
import { useMessageStore } from '@/store';
import { formData } from '@/utils';
import styles from './style.module.scss';

const MessagePage = () => {
  const {
    getMessage, loadMessage, loading,
  } = useMessageStore();

  const messageList = getMessage();

  useEffect(() => {
    loadMessage();
  }, []);

  return (
    <div className={styles['message-container']}>
      {
        !loading ? messageList.map(({
          ranch, factory, storage, seller, role, id,
        }) => (
          <div className={styles.block} key={id}>
            <MessageItem data={ranch} title="牧场" shown={role >= RANCH} formDataList={formData.ranchFormData} code={id} />
            <MessageItem data={factory} title="加工厂" shown={role >= FACTORY} formDataList={formData.factoryFormData} code={id} />
            <MessageItem data={storage} title="储运商" shown={role >= STORAGE} formDataList={formData.storageFormData} code={id} />
            <MessageItem data={seller} title="销售商" shown={role >= SELLER} formDataList={formData.sellerFormData} code={id} />
          </div>
        )) : <div className={styles.spin}><Spin size="large" /></div>
      }
    </div>
  );
};

export default MessagePage;
