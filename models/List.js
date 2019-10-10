const mongoose = require('mongoose');
const Schema = mongoose.Schema;

delete mongoose.connection.models['list'];


const ListSchema = new Schema({
    title: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});



//const List = mongoose.model('list', ListSchema);

module.exports = mongoose.model('List', ListSchema);