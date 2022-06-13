import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';

const SearchPage = lazy(() => import('../pages/SearchPage'));
const TracePage = lazy(() => import('../pages/TracePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const MyRouter = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="search" element={(<Suspense><SearchPage /></Suspense>)} />
      <Route path="trace" element={(<Suspense><TracePage /></Suspense>)} />
      <Route path="*" element={<Suspense><NotFoundPage /></Suspense>} />
    </Route>
  </Routes>
);

export default MyRouter;
