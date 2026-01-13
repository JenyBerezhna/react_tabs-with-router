import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { App } from './App';
import { Home } from './components/Home';
import { Tabs } from './components/TabsList';
import { NotFoundPage } from './components/NotFoundPage';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          {/* Redirect /home -> / */}
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
