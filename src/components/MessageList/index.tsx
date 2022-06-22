import { Typography } from '@douyinfe/semi-ui';
import { formData, TStandardMessage } from '@/utils';
import { MessageItem } from '@/components';
import styles from './style.module.scss';

type Props = {
  messageList: TStandardMessage[];
  shownArray?: boolean[];
  showCode?: boolean;
}

const MessageList = ({
  messageList,
  showCode = true,
  shownArray = new Array(4).fill(true),
}: Props) => {
  const { Paragraph } = Typography;

  return (
    <>
      { messageList.map(({
        ranch, factory, storage, seller, code, id,
      }) => (
        <div className={styles.block} key={id}>
          {
            showCode && (
            <Paragraph className={styles.top} copyable={!!code}>
              溯源码：
              {code || '暂无溯源码'}
            </Paragraph>
            )
          }
          <div className={styles.bottom}>
            <MessageItem data={ranch} title="牧场" shown={shownArray[0]} formDataList={formData.ranchFormData} code={code} />
            <MessageItem data={factory} title="加工厂" shown={shownArray[1]} formDataList={formData.factoryFormData} code={code} />
            <MessageItem data={storage} title="储运商" shown={shownArray[2]} formDataList={formData.storageFormData} code={code} />
            <MessageItem data={seller} title="销售商" shown={shownArray[3]} formDataList={formData.sellerFormData} code={code} />
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageList;
