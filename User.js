// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String, // Changed from gmail to email for consistency
  password: String
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model('details', userSchema);
