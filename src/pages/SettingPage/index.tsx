import { useCallback, useState } from 'react';
import { IconLink } from '@douyinfe/semi-icons';
import {
  Button, Form, Toast, Typography,
} from '@douyinfe/semi-ui';
import { useTokenStore } from '@/store';
import styles from './style.module.scss';
import { setPasswordApi } from '@/api';

const SettingPage = () => {
  const { Paragraph, Text } = Typography;
  const { logoutAction } = useTokenStore();

  const logout = useCallback(() => {
    logoutAction();
  }, []);

  const handleSubmit = useCallback(async (values: Record<string, any>) => {
    if (values.password === values.checkPassword) {
      await setPasswordApi(values.password);
    } else {
      Toast.error('两次输入的密码不相同');
    }
  }, []);

  const [edit, setEdit] = useState(false);

  const changeEdit = useCallback(() => setEdit(!edit), [edit]);

  const renderNormal = () => (
    <>
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
        <Button type="warning" size="large" onClick={changeEdit}>修改密码</Button>
        <Button type="danger" size="large" onClick={logout} className={styles['right-button']}>退出登录</Button>
      </div>
    </>
  );

  const renderEdit = () => (
    <Form onSubmit={(values) => handleSubmit(values)}>
      <Form.Input
        field="password"
        label="密码"
        type="password"
        placeholder="请输入您的新密码"
        rules={[{ required: true, message: '新密码为必填项' }]}
      />
      <Form.Input
        field="checkPassword"
        label="确认密码"
        type="password"
        placeholder="请再次输入您的新密码"
        rules={[{ required: true, message: '确认密码为必填项' }]}
      />
      <div className={styles.button}>
        <Button htmlType="submit" type="danger">确认</Button>
        <Button type="primary" className={styles['right-button']} onClick={changeEdit}>取消</Button>
      </div>
    </Form>
  );

  return (
    <div className={styles['setting-container']}>
      <div className={styles.block}>
        {edit ? renderEdit() : renderNormal()}
      </div>
    </div>
  );
};

export default SettingPage;
