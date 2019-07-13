const express = require('express');
const app = express();
const path = require('path');
const key = require('./config/keys.js');
const checkLogin = require('./middleware.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cookieSession = require('cookie-session');
const passport = require('passport');
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [key.cookieKey]
  })
);

require('./db.js');
app.use(passport.initialize());
app.use(passport.session());

require('./passport.js');
const authRoutes = require('./routes/authRoutes.js');
app.use('/', authRoutes);

const { Rank } = require('./db.js');
app.post('/ranks', checkLogin, (req, res) => {
  let { sec } = req.body;
  console.log(typeof sec);
  Rank.create({ time: sec })
    .then(() => {
      res.send('success');
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/ranks', (req, res) => {
  Rank.find()
    .sort({ time: -1 })
    .limit(10)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), err => {
    if (err) res.status(500).send(err);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
