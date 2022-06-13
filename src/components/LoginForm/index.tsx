import { Button, Form } from '@douyinfe/semi-ui';
import styles from './style.module.scss';

const LoginForm = () => {
  const handleSubmit = (values: Record<string, any>) => {
    console.log(values);
    // Toast.info('表单已提交');
  };

  return (
    <div className={styles['login-container']}>
      <img className={styles.background} src="/milk-banner.png" alt="背景图片" />
      <div className={styles['login-form']}>
        <h3 className={styles.title}>特仑苏牛奶溯源系统</h3>
        <Form onSubmit={(values) => handleSubmit(values)} style={{ width: 400 }}>
          <Form.Input
            field="phone"
            label="用户名"
            style={{ width: '100%' }}
            placeholder="请输入您的用户名"
            rules={[{ required: true, message: '用户名未填写' }]}
          />
          <Form.Input
            field="password"
            label="密码"
            type="password"
            style={{ width: '100%' }}
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

export default LoginForm;
