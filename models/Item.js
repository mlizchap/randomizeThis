const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSechema = new Schema({
    text: String,
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }
});

const Item = mongoose.model('list', ItemSechema);

module.exports = Item;