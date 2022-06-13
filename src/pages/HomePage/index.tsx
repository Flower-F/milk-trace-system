import { getLoginStatus } from '@/utils';
import LoginForm from '../../components/LoginForm';

const HomePage = () => {
  if (!getLoginStatus()) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return (
    <div>
      hello world
    </div>
  );
};

export default HomePage;
