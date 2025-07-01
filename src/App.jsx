import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Recommendations from './pages/Recommendations';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './Contexts/AuthContext';
import PrivateRoute from './Routes/PrivateRoute';
import PreferenceForm from './components/PreferenceForm';

// To this
import './styles/animations.css';


function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/preferences" element={<PreferenceForm />} />
          <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/preferences" element={<PreferenceForm />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
