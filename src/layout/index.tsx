import {
  Layout, Nav, Breadcrumb, Avatar,
} from '@douyinfe/semi-ui';
import {
  IconBytedanceLogo, IconHome, IconUser, IconEdit,
} from '@douyinfe/semi-icons';
import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';
import { getLoginStatus } from '@/utils';
import LoginPage from '@/pages/LoginPage';

const MyLayout = () => {
  const login = getLoginStatus();
  if (!login) {
    return (
      <LoginPage />
    );
  }

  const {
    Header, Footer, Sider, Content,
  } = Layout;

  return (
    <Layout className={styles['layout-container']}>
      <Sider>
        <Nav
          defaultSelectedKeys={['Home']}
          style={{ maxWidth: 200, height: '100%' }}
          items={[
            { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
            { itemKey: 'Edit', text: '溯源码管理', icon: <IconEdit size="large" /> },
            { itemKey: 'User', text: '用户信息', icon: <IconUser size="large" /> },
          ]}
          header={{
            logo: <img src="/qr-code.png" alt="logo" />,
            text: '特仑苏牛奶溯源',
          }}
          footer={{
            collapseButton: true,
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            mode="horizontal"
            footer={(
              <Avatar color="orange" size="small">
                YJ
              </Avatar>
            )}
          />
        </Header>
        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <Breadcrumb
            style={{
              marginBottom: '24px',
            }}
            routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
          />
          {/* <div
            style={{
              borderRadius: '10px',
              border: '1px solid var(--semi-color-border)',
              height: '470px',
              padding: '32px',
              color: 'var(--semi-color-text-0)',
            }}
          >
            hello world
          </div> */}
          <Outlet />
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
            <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: '24px' }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
