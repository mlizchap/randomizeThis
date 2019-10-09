const Model = require('../models');

exports.getListsOfUser = (req, res) => {
    res.send("get lists of users");
    // return Model.List.find({ user: req.params.email })
    //     .populate('posts').exec((err, posts) => {
    //         console.log("Populated User " + posts);
    //         res.send(posts);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: err.message || "an error occurred while retrieving the lists"
    //         })
    //     })
}

exports.createNewList = (req, res) => {
    res.send("create new list");
}

exports.editList = (req, res) => {
    res.send("edit list item: " + req.params.listId);
}

exports.deleteList = (req, res) => {
    res.send("delete list number: " + req.params.listId);
}