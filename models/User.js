const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String,
    // currentList: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'List'
    // },
    // lists: [{
    //     ref: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'List'
    //     }]
    // }]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;