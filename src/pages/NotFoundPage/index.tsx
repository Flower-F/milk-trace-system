import { Button, Empty } from '@douyinfe/semi-ui';
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/admin');
  };

  return (
    <div className={styles['not-container']}>
      <Empty
        image={<IllustrationNotFound className={styles['not-icon']} />}
        darkModeImage={<IllustrationNotFoundDark className={styles['not-icon']} />}
        title="404 Not Found"
        description="没有这个界面哦"
      />
      <div className={styles.button}>
        <Button type="primary" size="large" onClick={navigateToHome}>返回首页</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
