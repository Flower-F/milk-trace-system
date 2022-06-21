import { useCallback, useState } from 'react';
import { IconLink } from '@douyinfe/semi-icons';
import {
  Button, Form, Toast, Typography,
} from '@douyinfe/semi-ui';
import { useAuthStore } from '@/store';
import { setPasswordApi } from '@/api';
import { textList } from './data';
import styles from './style.module.scss';

const SettingPage = () => {
  const { Paragraph, Text } = Typography;
  const { logoutAction } = useAuthStore();

  const logout = useCallback(async () => {
    await logoutAction();
  }, []);

  const [edit, setEdit] = useState(false);

  const handleSubmit = useCallback(async (values: Record<string, any>) => {
    if (values.password === values.checkPassword) {
      await setPasswordApi(values.password);
      setEdit(false);
      Toast.success('修改成功');
    } else {
      Toast.error('两次输入的密码不相同');
    }
  }, []);

  const changeEdit = useCallback(() => setEdit(!edit), [edit]);

  const renderNormal = () => (
    <>
      <div className={styles.introduction}>
        <h3 className={styles.title}>特仑苏简介</h3>
        <Paragraph spacing="extended">{textList[0]}</Paragraph>
        <Paragraph spacing="extended">{textList[1]}</Paragraph>
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
