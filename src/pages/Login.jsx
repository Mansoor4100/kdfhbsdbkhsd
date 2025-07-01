import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message || 'Login failed');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          disabled={loading}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          disabled={loading}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={btnStyle} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {loading && <p style={{ marginTop: '0.5rem' }}>Loading...</p>}
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </main>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  marginBottom: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const btnStyle = {
  width: '100%',
  padding: '0.7rem',
  backgroundColor: '#6200ea',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
