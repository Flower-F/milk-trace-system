import { useEffect } from 'react';
import { Spin, Typography } from '@douyinfe/semi-ui';
import { MessageItem } from '@/components';
import {
  FACTORY, RANCH, SELLER, STORAGE,
} from '@/constants';
import { useAuthStore, useMessageStore } from '@/store';
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

  const { getRole } = useAuthStore();

  const role = getRole();

  const { Paragraph } = Typography;

  return (
    <div className={styles['message-container']}>
      {
        !loading ? messageList.map(({
          ranch, factory, storage, seller, code, id,
        }) => (
          <div className={styles.block} key={id}>
            <Paragraph className={styles.top} copyable={!!code}>
              溯源码：
              {code || '暂无溯源码'}
            </Paragraph>
            <div className={styles.bottom}>
              <MessageItem data={ranch} title="牧场" shown={role >= RANCH} formDataList={formData.ranchFormData} code={code} />
              <MessageItem data={factory} title="加工厂" shown={role >= FACTORY} formDataList={formData.factoryFormData} code={code} />
              <MessageItem data={storage} title="储运商" shown={role >= STORAGE} formDataList={formData.storageFormData} code={code} />
              <MessageItem data={seller} title="销售商" shown={role >= SELLER} formDataList={formData.sellerFormData} code={code} />
            </div>
          </div>
        )) : <div className={styles.spin}><Spin size="large" /></div>
      }
    </div>
  );
};

export default MessagePage;
