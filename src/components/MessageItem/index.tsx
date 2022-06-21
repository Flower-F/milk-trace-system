import { IllustrationNoContent, IllustrationNoContentDark } from '@douyinfe/semi-illustrations';
import { Button, Descriptions, Empty } from '@douyinfe/semi-ui';
import { Data } from '@douyinfe/semi-ui/lib/es/descriptions';
import { useState } from 'react';
import { ModalForm } from '@/components';
import { TForm } from '@/utils';
import styles from './style.module.scss';

type Props = {
  data: Data[] | null;
  title: string;
  code?: string | null;
  shown?: boolean;
  formDataList?: TForm[];
}

const MessageItem = ({
  data, title, shown = true, formDataList, code,
}: Props) => {
  if (!shown) {
    return null;
  }

  const [visible, setVisible] = useState(false);

  const addItem = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      {
        data ? <Descriptions align="left" data={data} />
          : (
            <Empty
              className={styles.empty}
              image={<IllustrationNoContent className={styles.icon} />}
              darkModeImage={<IllustrationNoContentDark className={styles.icon} />}
            >
              <Button type="primary" htmlType="button" size="large" onClick={addItem}>添加项目</Button>
            </Empty>
          )
      }
      {code && formDataList && (
        <ModalForm
          handleCancel={handleCancel}
          handleOk={handleOk}
          visible={visible}
          title={title}
          code={code}
          formDataList={formDataList}
        />
      )}
    </div>
  );
};

export default MessageItem;
