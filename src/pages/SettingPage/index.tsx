import { IconLink } from '@douyinfe/semi-icons';
import { Button, Typography } from '@douyinfe/semi-ui';
import { logout } from '@/utils';
import styles from './style.module.scss';

const SettingPage = () => {
  const { Paragraph, Text } = Typography;

  return (
    <div className={styles['setting-container']}>
      <div className={styles.block}>
        <div className={styles.introduction}>
          <h3 className={styles.title}>特仑苏简介</h3>
          <Paragraph spacing="extended">
            特仑苏是蒙牛集团旗下高端品牌，诞生于2005年，后通过细分产品线，诞生出“特仑苏低脂奶”、
            “特仑苏有机奶”等系列产品，就此拉开中国乳业高端奶市场的序幕，开创了中国乳业高端牛奶的先河。
          </Paragraph>
          <Paragraph spacing="extended">
            特仑苏拥有专属牧场的高品质奶源，以及高标准的原料甄选和生产工艺。“特仑苏”在蒙语中是“金牌牛奶”之意。
          </Paragraph>
        </div>
        <div className={styles.about}>
          <Text link={{ href: 'http://www.telunsu.net/', target: '_blank' }} icon={<IconLink />} underline>了解更多关于特仑苏的咨询</Text>
        </div>
        <div className={styles.button}>
          <Button type="danger" size="large" onClick={logout}>退出登录</Button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
