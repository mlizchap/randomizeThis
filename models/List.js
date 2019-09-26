const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: String,
    items: [{
        type: String
    }],
    isCurrent: Boolean,
    belongsTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const List = mongoose.model('list', ListSchema);

module.exports = List;