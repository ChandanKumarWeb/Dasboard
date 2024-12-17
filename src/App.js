import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Components/Login';
import Users from './Components/Users';
import Dashboard from './Components/Dashboard';
import Product from './Components/Product'
import Employees from './Components/Employees';
import Tasks from './Components/Tasks';
import Profile from './Components/Profile';
import History from './Components/History';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPageWrapper />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/history" element={<History/>} />
      </Routes>
    </Router>
  );
}

function LoginPageWrapper() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return <Login onLogin={handleLogin} />;
}

export default App;
