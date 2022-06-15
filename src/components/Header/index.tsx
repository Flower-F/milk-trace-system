import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IconGithubLogo, IconMoon, IconSun } from '@douyinfe/semi-icons';
import { useEffect, useState } from 'react';
import { getTheme, setTheme } from '@/utils';
import styles from './style.module.scss';

const theme = getTheme();

const Header = () => {
  const [light, setLight] = useState(theme === 'light' || theme === undefined);

  useEffect(() => {
    if (!light) {
      document.body.setAttribute('theme-mode', 'dark');
    }
  }, []);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const switchTheme = () => {
    if (document.body.hasAttribute('theme-mode')) {
      document.body.removeAttribute('theme-mode');
      setTheme('light');
      setLight(true);
    } else {
      document.body.setAttribute('theme-mode', 'dark');
      setTheme('dark');
      setLight(false);
    }
  };

  useEffect(() => {
    if (pathname === '/' || pathname === '/admin' || pathname === '/admin/') {
      navigate('/admin/home');
    }
  }, [pathname, navigate]);

  const navigateToHome = () => {
    if (pathname !== '/admin/home') {
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
            {light ? <IconMoon className={styles.moon} /> : <IconSun className={styles.sun} />}
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
