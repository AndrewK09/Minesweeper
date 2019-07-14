const mongoose = require('mongoose');
const keys = require('./config/keys.js');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to minesweeper db...');
});

const userSchema = new mongoose.Schema({
  googleId: String,
  username: String
});

const rankSchema = new mongoose.Schema({
  time: Number,
  level: String,
  username: String
});

const User = mongoose.model('user', userSchema);
const Rank = mongoose.model('rank', rankSchema);

module.exports.User = User;
module.exports.Rank = Rank;
