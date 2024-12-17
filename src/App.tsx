import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNav from './components/navigation/MainNav';
import HomePage from './pages/HomePage';
import PropFirmPage from './pages/PropFirmPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <MainNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prop-firm" element={<PropFirmPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;