import { IllustrationNoContent, IllustrationNoContentDark } from '@douyinfe/semi-illustrations';
import { Button, Descriptions, Empty } from '@douyinfe/semi-ui';
import { Data } from '@douyinfe/semi-ui/lib/es/descriptions';
import styles from './style.module.scss';

type Props = {
  data: Data[] | null;
  title: string;
  shown?: boolean;
}

const MessageItem = ({ data, title, shown = true }: Props) => {
  if (!shown) {
    return null;
  }

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
              <Button type="primary" htmlType="button">添加项目</Button>
            </Empty>
          )
      }
    </div>
  );
};

export default MessageItem;
