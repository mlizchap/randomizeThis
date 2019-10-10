const Model = require('../models');

exports.getAllPostItems = (req, res) => {
    Model.Item.find({ list: req.params.postId })
        .then(items => res.send(items))
}

exports.createNewPostItem = (req, res) => {
    new Model.Item({
        text: req.body.text,
        list: req.params.postId,
    }).save().then(newItem => res.send(newItem))
}

exports.editItem = (req, res) => {
    res.send("edit item: " + req.params.itemId);
}

exports.deleteItem = (req, res) => {
    res.send("delete item: " + req.params.itemId);
}
