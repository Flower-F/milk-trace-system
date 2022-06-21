import { Carousel, Space, Typography } from '@douyinfe/semi-ui';
import { imageList, textList } from './data';
import styles from './style.module.scss';

const HomePage = () => {
  const { Title, Paragraph } = Typography;

  return (
    <div className={styles['home-container']}>
      <div className={styles['flex-box']}>
        <div className={styles.left}>
          <Carousel className={styles.carousel} arrowType="always" theme="dark" speed={500} showArrow autoPlay>
            {
              imageList.map((item) => (
                <div key={item.id} style={{ background: item.background }}>
                  <Space vertical align="start" spacing="medium" className={styles.space}>
                    <img src="/telunsu.png" alt="logo" className={styles.logo} />
                    <Title heading={2} className={styles.black}>{textList[item.id][0]}</Title>
                    <Space vertical align="start">
                      <Paragraph className={styles.black}>{textList[item.id][1]}</Paragraph>
                      <Paragraph className={styles.black}>{textList[item.id][2]}</Paragraph>
                    </Space>
                  </Space>
                </div>
              ))
            }
          </Carousel>
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
};

export default HomePage;
