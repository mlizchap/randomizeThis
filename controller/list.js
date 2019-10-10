const Model = require('../models');

exports.getListsOfUser = (req, res) => {
    return Model.List.find({ user: req.userId })
        .then(lists => {
            res.send(lists)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}

exports.createNewList = async (req, res) => {
    const newList = new Model.List({
        title: req.body.title,
        user: req.userId
    });
    await newList.save();
    await res.send(newList);
}

exports.editList = (req, res) => {
    res.send("edit list item: " + req.params.listId);
}

exports.deleteList = (req, res) => {
    res.send("delete list number: " + req.params.listId);
}