import { Banner } from '@/components';
import { imageList, textList } from './data';
import styles from './style.module.scss';

const HomePage = () => (
  <div className={styles['home-container']}>
    <div className={styles['flex-box']}>
      <div className={styles.left}>
        <Banner imageList={imageList} textList={textList} />
        <div className={styles.cow}>
          <img src="/cow.png" alt="奶牛" />
        </div>
      </div>
      <div className={styles.right}>
        <img src="/cow-2.png" alt="奶牛" />
      </div>
    </div>

    <div className={styles['display-picture']}>
      <img src="/cow-3.png" alt="奶牛" />
      <img src="/cow-4.png" alt="奶牛" className={styles['right-picture']} />
    </div>
  </div>
);

export default HomePage;
