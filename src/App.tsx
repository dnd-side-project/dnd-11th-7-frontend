import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
