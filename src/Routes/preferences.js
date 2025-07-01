const express = require('express');
const router = express.Router();

// Temporary in-memory storage for preferences (replace with DB later)
const preferencesDB = {};

router.post('/', (req, res) => {
  const { gender, skinTone, style, budget, occasion } = req.body;

  if (!gender || !skinTone || !style) {
    return res.status(400).json({ message: 'Gender, Skin Tone, and Style are required.' });
  }

  // In a real app, you'd associate preferences with the logged-in user
  const userId = 'demoUser';  // replace with real user from req.user or JWT
  preferencesDB[userId] = { gender, skinTone, style, budget, occasion };

  return res.json({ message: 'Preferences saved successfully!', preferences: preferencesDB[userId] });
});

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  const prefs = preferencesDB[userId];
  if (!prefs) {
    return res.status(404).json({ message: 'No preferences found for this user.' });
  }
  return res.json(prefs);
});

module.exports = router;
