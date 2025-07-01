import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/recommendations', label: 'Recommendations' },
  ];

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ margin: 0, fontWeight: 'bold', fontSize: '1.8rem', color: 'white' }}>
        StyleCaster
      </h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              ...linkStyle,
              borderBottom: location.pathname === to ? '3px solid white' : '3px solid transparent',
              color: location.pathname === to ? '#fffbfb' : 'white',
            }}
          >
            {label}
          </Link>
        ))}

        {user ? (
          <>
            <span style={userInfoStyle}>
              Hello, {user.name || user.email}!
            </span>
            <Link
              to="/dashboard"
              style={{
                ...linkStyle,
                borderBottom: location.pathname === '/dashboard' ? '3px solid white' : '3px solid transparent',
                color: location.pathname === '/dashboard' ? '#fffbfb' : 'white',
              }}
            >
              Dashboard
            </Link>
            <button onClick={handleLogout} style={logoutBtnStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                ...linkStyle,
                borderBottom: location.pathname === '/login' ? '3px solid white' : '3px solid transparent',
                color: location.pathname === '/login' ? '#fffbfb' : 'white',
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                ...linkStyle,
                borderBottom: location.pathname === '/register' ? '3px solid white' : '3px solid transparent',
                color: location.pathname === '/register' ? '#fffbfb' : 'white',
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const navStyle = {
  background: 'linear-gradient(90deg, #ff7eb9, #ff65a3, #7afcff)',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
};

const linkStyle = {
  color: 'white',
  marginLeft: '1.5rem',
  textDecoration: 'none',
  fontWeight: '600',
  paddingBottom: '0.3rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};

const logoutBtnStyle = {
  marginLeft: '1.5rem',
  backgroundColor: '#e53935',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '0.3rem 0.8rem',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'background-color 0.3s ease',
};

const userInfoStyle = {
  marginLeft: '1.5rem',
  color: 'white',
  fontWeight: '600',
};
