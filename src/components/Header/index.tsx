import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IconGithubLogo, IconMoon, IconSun } from '@douyinfe/semi-icons';
import { useEffect } from 'react';
import { getLoginStatus } from '@/utils';
import { useThemeStore } from '@/store';
import styles from './style.module.scss';

const Header = () => {
  const { setTheme, getTheme } = useThemeStore();
  const theme = getTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('theme-mode', 'dark');
    }
  }, [theme]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const switchTheme = () => {
    if (document.body.hasAttribute('theme-mode')) {
      document.body.removeAttribute('theme-mode');
      setTheme('light');
    } else {
      document.body.setAttribute('theme-mode', 'dark');
      setTheme('dark');
    }
  };

  const loginStatus = getLoginStatus();

  useEffect(() => {
    if (!loginStatus) {
      navigate('/login');
    } else if (pathname === '/' || pathname === '/admin' || pathname === '/admin/') {
      navigate('/admin/home');
    }
  }, [pathname, loginStatus]);

  const navigateToHome = () => {
    if (pathname !== '/admin/home' && pathname !== '/login') {
      navigate('/admin/home');
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo} onClick={navigateToHome} onKeyDown={navigateToHome} role="button" tabIndex={0}>
          <img src="/logo.png" alt="logo" className={styles['logo-image']} />
          <span className={styles['logo-title']}>特仑苏</span>
        </div>
        <div className={styles['button-group']}>
          <button onClick={switchTheme} type="button" className={styles['change-theme']}>
            {theme === 'dark' ? <IconMoon /> : <IconSun /> }
          </button>
          <a href="https://github.com/Flower-F/milk-trace-system" target="_blank" rel="noreferrer">
            <IconGithubLogo />
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
