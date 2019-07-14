const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
  '/google/login',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

router.get('/google/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/currentUser', (req, res) => {
  res.send(req.user);
});

module.exports = router;
