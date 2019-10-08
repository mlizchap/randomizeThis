const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String,
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;