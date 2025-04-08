import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    window.location.hash = "/"; // Force redirect to login
  };

  return (
    <HashRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            isLoggedIn ? 
              <Navigate to="/dashboard" /> : 
              <Login setIsLoggedIn={setIsLoggedIn} />
          } 
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? 
              <Dashboard handleLogout={handleLogout} /> : 
              <Navigate to="/" />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;