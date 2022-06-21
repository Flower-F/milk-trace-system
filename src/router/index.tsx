import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components';
import { Layout } from '@/layouts';
import {
  CompanyPage, HomePage, LoginPage, MessagePage, NotFoundPage, SettingPage, TracePage,
} from '@/pages';

const MyRouter = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="admin" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="message" element={<MessagePage />} />
        <Route path="setting" element={<SettingPage />} />
      </Route>
      <Route path="trace" element={<TracePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default MyRouter;
