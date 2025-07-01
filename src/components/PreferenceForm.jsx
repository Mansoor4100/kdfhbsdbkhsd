import React, { useState } from 'react';

export default function PreferenceForm() {
  const [preferences, setPreferences] = useState({
    gender: '',
    style: '',
    skinTone: '',
  });

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences),
      });
      if (response.ok) {
        alert('Preferences saved successfully!');
      } else {
        alert('Failed to save preferences');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving preferences');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Set Your Preferences</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={preferences.gender}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Style:</label>
        <input
          type="text"
          name="style"
          value={preferences.style}
          onChange={handleChange}
          style={inputStyle}
        />

        <label>Skin Tone:</label>
        <input
          type="text"
          name="skinTone"
          value={preferences.skinTone}
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={btnStyle}>Save Preferences</button>
      </form>
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
