// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from './components/screens/SignIn';
import Dashboard from './components/screens/Dashboard';
import { setAuthenticated } from './redux/actions/authAction';

import './assets/style.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    // Check for stored authentication state in localStorage
    const storedAuth = localStorage.getItem('auth');
  
    if (storedAuth === 'true') {
      // Dispatch an action to set authentication state
      dispatch(setAuthenticated(true));
    }
  }, [dispatch]);
  

  return (
    <Router>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/home"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />}
      />
      <Route path="/" element={<Navigate to="/signin" />} />
    </Routes>
  </Router>
  );
};

export default App;
