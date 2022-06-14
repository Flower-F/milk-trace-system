import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/admin') {
      navigate('/admin/home');
    }
  }, [pathname, navigate]);
  return <div>HomePage</div>;
};

export default HomePage;
