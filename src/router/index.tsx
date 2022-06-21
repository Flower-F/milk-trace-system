import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from '@/components';
import { LoginPage } from '@/pages';

const Layout = lazy(() => import('@/layouts/Layout'));
const TracePage = lazy(() => import('@/pages/TracePage'));
const SettingPage = lazy(() => import('@/pages/SettingPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const MessagePage = lazy(() => import('@/pages/MessagePage'));
const HomePage = lazy(() => import('@/pages/HomePage'));
const CompanyPage = lazy(() => import('@/pages/CompanyPage'));

const MyRouter = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="admin" element={<Suspense><Layout /></Suspense>}>
        <Route path="home" element={<Suspense><HomePage /></Suspense>} />
        <Route path="company" element={<Suspense><CompanyPage /></Suspense>} />
        <Route path="message" element={<Suspense><MessagePage /></Suspense>} />
        <Route path="setting" element={<Suspense><SettingPage /></Suspense>} />
      </Route>
      <Route path="trace" element={<Suspense><TracePage /></Suspense>} />
      <Route path="*" element={<Suspense><NotFoundPage /></Suspense>} />
    </Route>
  </Routes>
);

export default MyRouter;
