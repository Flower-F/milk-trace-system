import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from '@/components';
import Layout from '@/layout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const TracePage = lazy(() => import('@/pages/TracePage'));
const MessagePage = lazy(() => import('@/pages/MessagePage'));
const CompanyPage = lazy(() => import('@/pages/CompanyPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const SettingPage = lazy(() => import('@/pages/SettingPage'));

const MyRouter = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route path="login" element={(<Suspense><LoginPage /></Suspense>)} />
      <Route path="admin" element={<Layout />}>
        <Route path="home" element={<Suspense><HomePage /></Suspense>} />
        <Route path="company" element={(<Suspense><CompanyPage /></Suspense>)} />
        <Route path="message" element={(<Suspense><MessagePage /></Suspense>)} />
        <Route path="setting" element={(<Suspense><SettingPage /></Suspense>)} />
      </Route>
      <Route path="trace" element={(<Suspense><TracePage /></Suspense>)} />
      <Route path="*" element={<Suspense><NotFoundPage /></Suspense>} />
    </Route>
  </Routes>
);

export default MyRouter;
