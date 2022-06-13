import { Button, Form } from '@douyinfe/semi-ui';
import md5 from 'md5';
import { axiosInstance } from '@/request';
import styles from './style.module.scss';
import { login } from '@/utils';

const LoginPage = () => {
  const handleSubmit = (values: Record<string, any>) => {
    axiosInstance.post('/login', {
      username: values.username,
      password: md5(values.password),
    }).then((res) => {
      const { data } = res;
      if (data.code === 200) {
        const { token, expiredAt } = data.data;
        login(token, expiredAt);
        window.location.reload();
      }
    });
  };

  return (
    <div className={styles['login-container']}>
      <img className={styles.background} src="/milk-banner.png" alt="背景图片" />
      <div className={styles['login-form']}>
        <h3 className={styles.title}>特仑苏牛奶溯源系统</h3>
        <Form onSubmit={(values) => handleSubmit(values)} style={{ width: 400 }}>
          <Form.Input
            field="username"
            label="用户名"
            placeholder="请输入您的用户名"
            rules={[{ required: true, message: '用户名未填写' }]}
          />
          <Form.Input
            field="password"
            label="密码"
            type="password"
            placeholder="请输入您的密码"
            rules={[{ required: true, message: '密码未填写' }]}
          />
          <div className={styles['login-button']}>
            <Button htmlType="submit" type="tertiary">登录</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
