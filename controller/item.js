const Model = require('../models');

exports.getAllPostItems = (req, res) => {
    res.send("get all items of post: " + req.params.postId);
}

exports.createNewPostItem = (req, res) => {
    res.send("create new post item" + req.params.postId);
}

exports.editItem = (req, res) => {
    res.send("edit item: " + req.params.itemId);
}

exports.deleteItem = (req, res) => {
    res.send("delete item: " + req.params.itemId);
}
