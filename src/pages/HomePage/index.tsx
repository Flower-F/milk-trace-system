import { getLoginStatus } from '@/utils';
import LoginPage from '../LoginPage';

const HomePage = () => {
  const login = getLoginStatus();
  if (!login) {
    return (
      <LoginPage />
    );
  }

  return (
    <div>
      hello world
    </div>
  );
};

export default HomePage;
