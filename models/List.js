const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: String,
    items: [{
        text: String,
        type: mongoose.Schema.Types.ObjectId,
    }]
});

const List = mongoose.model('list', ListSchema);

module.exports = List;