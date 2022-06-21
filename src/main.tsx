import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from './layouts';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RecoilRoot>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </RecoilRoot>
  </BrowserRouter>,
);
