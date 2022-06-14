import { Empty } from '@douyinfe/semi-ui';
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations';
import styles from './style.module.scss';

const NotFoundPage = () => (
  <Empty
    image={<IllustrationConstruction className={styles['not-icon']} />}
    darkModeImage={<IllustrationConstructionDark className={styles['not-icon']} />}
    title="404 Not Found"
    className={styles['not-container']}
    description="没有这个界面哦"
  />
);

export default NotFoundPage;
