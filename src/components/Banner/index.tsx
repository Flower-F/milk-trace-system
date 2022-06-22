import { Carousel, Space, Typography } from '@douyinfe/semi-ui';
import styles from './style.module.scss';

type Props = {
  imageList: {
    id: number;
    background: string;
  }[];
  textList: string[][];
}

const Banner = ({ imageList, textList }: Props) => {
  const { Title, Paragraph } = Typography;

  return (
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
  );
};

export default Banner;
