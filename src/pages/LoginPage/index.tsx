import { useCallback, useEffect } from 'react';
import {
  Button, Form, Toast, Typography,
} from '@douyinfe/semi-ui';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store';
import { getLoginStatus } from '@/utils';
import styles from './style.module.scss';

const LoginPage = () => {
  const { Option } = Form.Select;

  const { loginAction: login } = useAuthStore();

  const handleSubmit = useCallback(async (values: Record<string, any>) => {
    try {
      await login(values.username, values.password, values.role);
    } catch (error) {
      Toast.error('登录失败，请稍后再试');
    }
  }, []);

  const navigate = useNavigate();
  const loginStatus = getLoginStatus();

  useEffect(() => {
    if (loginStatus) {
      navigate('/admin');
    }
  }, [navigate, loginStatus]);

  const goToTrace = () => {
    navigate('/trace');
  };

  const { Text } = Typography;

  return (
    <div className={styles['login-container']}>
      <img className={styles.background} src="/milk-banner.png" alt="背景图片" />
      <div className={styles['login-form']}>
        <h3 className={styles.title}>特仑苏牛奶溯源系统</h3>
        <Form onSubmit={(values) => handleSubmit(values)} className={styles.form}>
          <Form.Select
            field="role"
            label="角色"
            placeholder="请选择您的角色"
            style={{ width: '100%' }}
            rules={[{ required: true, message: '角色为必选项' }]}
          >
            <Option value={0}>牧场</Option>
            <Option value={1}>加工厂</Option>
            <Option value={2}>储运商</Option>
            <Option value={3}>销售商</Option>
          </Form.Select>
          <Form.Input
            field="username"
            label="用户名"
            placeholder="请输入您的用户名"
            rules={[{ required: true, message: '用户名为必填项' }]}
          />
          <Form.Input
            field="password"
            label="密码"
            type="password"
            placeholder="请输入您的密码"
            rules={[{ required: true, message: '密码为必填项' }]}
          />
          <div className={styles['login-button']}>
            <Text link onClick={goToTrace}> 我要溯源？</Text>
            <Button htmlType="submit" type="secondary">登录</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
