import { Layout, Nav } from '@douyinfe/semi-ui';
import {
  IconHome, IconUser, IconQrCode, IconSetting,
} from '@douyinfe/semi-icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getLoginStatus } from '@/utils';
import LoginPage from '@/pages/LoginPage';
import styles from './style.module.scss';

const itemList = [
  { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
  { itemKey: 'Trace', text: '溯源码管理', icon: <IconQrCode size="large" /> },
  { itemKey: 'User', text: '用户信息', icon: <IconUser size="large" /> },
  { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
];

const MyLayout = () => {
  const navigate = useNavigate();
  const navigateToPage = (data: any) => {
    navigate(`/admin/${data.itemKey.toLowerCase()}`);
  };

  const { pathname } = useLocation();

  const getDefaultKey = () => {
    for (let i = 0; i < itemList.length; i += 1) {
      if (pathname.includes(itemList[i].itemKey.toLowerCase())) {
        return itemList[i].itemKey;
      }
    }

    return '/Home';
  };

  const login = getLoginStatus();
  if (!login) {
    return (
      <LoginPage />
    );
  }

  const { Footer, Sider, Content } = Layout;

  return (
    <Layout className={styles['layout-container']}>
      <Sider>
        <Nav
          defaultSelectedKeys={[getDefaultKey()]}
          className={styles.nav}
          items={itemList}
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
        <Content className={styles.content}>
          <Outlet />
        </Content>
        <Footer
          style={{ backgroundColor: 'rgba(var(--semi-grey-0), 1)' }}
          className={styles.footer}
        >
          <div>
            <span style={{ marginRight: 8 }}>特仑苏</span>
            <span>CopyRight © 2006-2022 TELUNSU. All Rights Reserved.</span>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
