import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageBookings from './pages/ManageBookings';
import ManageEmployees from './pages/ManageEmployees';
import Reviews from './pages/Reviews';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hotel Booking System</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-bookings" element={<ManageBookings />} />
          <Route path="/manage-employees" element={<ManageEmployees />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
