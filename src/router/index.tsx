import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Layout from '@/layout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const TracePage = lazy(() => import('@/pages/TracePage'));
const TraceManagementPage = lazy(() => import('@/pages/TraceManagementPage'));
const UserPage = lazy(() => import('@/pages/UserPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const SettingPage = lazy(() => import('@/pages/SettingPage'));

const MyRouter = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route path="admin" element={<Layout />}>
        <Route path="home" element={<Suspense><HomePage /></Suspense>} />
        <Route path="search" element={(<Suspense><SearchPage /></Suspense>)} />
        <Route path="user" element={(<Suspense><UserPage /></Suspense>)} />
        <Route path="trace" element={(<Suspense><TraceManagementPage /></Suspense>)} />
        <Route path="setting" element={(<Suspense><SettingPage /></Suspense>)} />
      </Route>
      <Route path="trace" element={(<Suspense><TracePage /></Suspense>)} />
      <Route path="*" element={<Suspense><NotFoundPage /></Suspense>} />
    </Route>
  </Routes>
);

export default MyRouter;
