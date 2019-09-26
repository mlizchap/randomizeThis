const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTestSchema = new Schema({
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

const UserTest = mongoose.model('usertest', UserTestSchema);

module.exports = UserTest;