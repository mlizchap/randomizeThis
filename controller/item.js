const Model = require('../models');

// app.get('/item/all/:postId', Item.getAllPostItems);
// app.post('/item/create/:postId', Item.createNewPostItem);
// app.put('/item/edit/:itemId', Item.editItem);
// app.delete('item/delete/:itemId', Item.deleteItem);

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
