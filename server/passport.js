const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');

const { User } = require('./db');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      return User.findOne({ googleId: profile.id }).then(existingUser => {
        if (!existingUser) {
          return User.create({
            googleId: profile.id,
            username: profile.name.givenName
          }).then(user => {
            done(null, user);
          });
        }
        done(null, existingUser);
      });
    }
  )
);
