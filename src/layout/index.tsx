import {
  Layout, Nav, Avatar,
} from '@douyinfe/semi-ui';
import {
  IconHome, IconUser, IconQrCode,
} from '@douyinfe/semi-icons';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import { getLoginStatus } from '@/utils';
import LoginPage from '@/pages/LoginPage';

const MyLayout = () => {
  const navigate = useNavigate();
  const navigateToPage = (data: any) => {
    navigate(`/admin/${data.itemKey.toLowerCase()}`);
  };

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
            { itemKey: 'Trace', text: '溯源码管理', icon: <IconQrCode size="large" /> },
            { itemKey: 'User', text: '用户信息', icon: <IconUser size="large" /> },
          ]}
          header={{
            logo: <img src="/qr-code.png" alt="logo" />,
            text: '特仑苏牛奶溯源',
          }}
          footer={{
            collapseButton: true,
          }}
          onClick={navigateToPage}
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
          <Outlet />
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '18px 15px',
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
            <span style={{ marginRight: 8 }}>特仑苏</span>
            <span>CopyRight © 2006-2022 TELUNSU. All Rights Reserved.</span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
