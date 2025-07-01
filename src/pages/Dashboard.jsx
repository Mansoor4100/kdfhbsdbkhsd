import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <main style={mainStyle}>
      <h2>Welcome back{user?.name ? `, ${user.name}` : ''}!</h2>
      <p>Your email: {user?.email}</p>
      <button onClick={logout} style={logoutBtnStyle}>
        Logout
      </button>
    </main>
  );
}

const mainStyle = {
  padding: '2rem',
  textAlign: 'center',
};

const logoutBtnStyle = {
  marginTop: '1rem',
  padding: '0.7rem 1.5rem',
  backgroundColor: '#e53935',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
