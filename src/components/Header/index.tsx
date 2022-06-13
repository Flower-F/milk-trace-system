import { Button } from '@douyinfe/semi-ui';
import { Outlet } from 'react-router-dom';

const Header = () => {
  const switchMode = () => {
    const { body } = document;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };

  return (
    <>
      <div>Header</div>
      <Button onClick={switchMode}>Switch Mode</Button>
      <Outlet />
    </>
  );
};

export default Header;
