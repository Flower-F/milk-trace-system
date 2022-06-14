import { Carousel, Space, Typography } from '@douyinfe/semi-ui';
import styles from './style.module.scss';

const HomePage = () => {
  const { Title, Paragraph } = Typography;

  const imgList = [
    {
      id: 0,
      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 1,
      background: 'linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%)',
    },
    {
      id: 2,
      background: 'linear-gradient(90deg, #0cebeb 0%, #20e3b2 50%, #29ffc6 100%)',
    },
  ];

  const textList = [
    ['特仑苏一物一码', '特仑苏与一物一码合作，采用一物一码技术', '给每一款奶制品产品赋上具有唯一性的二维码'],
    ['特仑苏防伪细节', '消费者购买奶制品时', '可认准主办方颁发的获奖奶证书和专家评委的亲自署名'],
    ['特仑苏精神', '每个人对未来都抱有乐观的态度，都有自己的期待', '特仑苏以更高品质的营养，滋养生命更好成长'],
  ];

  return (
    <div className={styles['home-container']}>
      <div className={styles['flex-box']}>
        <div className={styles.left}>
          <Carousel className={styles.carousel} arrowType="always" theme="dark" showArrow autoPlay>
            {
        imgList.map((item) => (
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
          <img src="/cow.png" alt="奶牛" className={styles.cow} />
        </div>
        <div className={styles.right}>
          <img src="/cow-2.png" alt="奶牛" />
        </div>
      </div>

      <div className={styles['display-picture']}>
        <img src="/cow-3.png" alt="奶牛" />
        <img src="/cow-4.png" alt="奶牛" />
      </div>
    </div>
  );
};

export default HomePage;
