const mongoose = require('mongoose');

const userSignupSchema = mongoose.Schema({
    site: String,
    email: String,
    password: String
});

module.exports = mongoose.model('password_model', userSignupSchema);