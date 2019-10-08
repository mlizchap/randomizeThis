const Model = require('../models');

exports.getAllLists = (req, res) => {
    return res.send("HELLO")
    // Model.List.find()
    // .then(lists => res.send(lists))
    // .catch(err => {
    //     res.status(500).send({
    //         message: err.message || "an error occurred while retrieving the lists"
    //     })
    // })
}

exports.getListsOfUser = (req, res) => {
    Model.List.find({ belongsTo: req.params.userId })
        .populate('posts').exec((err, posts) => {
            console.log("Populated User " + posts);
        })
        .then(lists => {
            console.log(lists)
       })
        .catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}

exports.getListByTitle = (req, res) => {
    Model.List
        .find({ title: req.params.title })
        
        .then(list => {
            console.log(list[0]._id)
            Model.Item
                .find({ belongsTo: list[0]._id })    
                .then(i => console.log("ITEM", i))
            res.send(list);
        })
        // .then(item => {
        //     console.log(item)
        // })
        
        .catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}

exports.getUserWithPosts = (req, res) => {
    return Model.User
        .findOne({ email: req.params.email })
        .populate('lists').exec((err, lists) => {
            console.log("Populated User " + lists);
        })
    .catch((err) => console.log(err, "ERR"))

  }

// TO DO:
  // create GITHUB and put code on it
    // organize code in this file
    // create README and put backend code on it
    // figure out TODO and put code in it