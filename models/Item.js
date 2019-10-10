const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSechema = new Schema({
    text: String,
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }
});

module.exports = mongoose.model('Item', ItemSechema);