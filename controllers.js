const mongoose = require('mongoose');

const User = require('./models/User');
const List = require('./models/List');

mongoose.Promise = global.Promise;

exports.createUser = (req, res) => {
    var newUser = new User(req.body);

    return newUser.save()
      .then(user => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
}

exports.getUsers = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the users"
            })
        })
}

exports.createList = (req, res) => {
    var newList = new List(req.body);

    return newList.save()
        .then(list => {
            res.send("list saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}

exports.getLists = (req, res) => {
    List.find()
        .then(lists => {
            res.send(lists);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}

exports.getListsOfUser = (req, res) => {
    // List.find({ isCurrent: true })
    List.find({ 'belongsTo': req.params.id })
        .then(lists => {
            res.send(lists);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}

exports.getCurrentListOfUser = (req, res) => {
    // List.find({ isCurrent: true })
    List.find({ 
        'belongsTo': req.params.id,
        'isCurrent': true
    })
        .then(lists => {
            res.send(lists);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}

exports.makeListCurrent = (req, res) => {
    var newList = new List(req.body);
    
    return List.find({ isCurrent: true}, {isCurrent: false})
        .then(() => List.findOneAndUpdate({ _id: req.params.id }, { isCurrent: true }))
        .then(() => List.findById({ _id: req.params.id}))
        .then(list => res.send(list))
        .then(() => List.find({ }))
}

exports.createNewItem = (req, res) => {
    var newItem = new List(req.body);

    return List.findOneAndUpdate({ _id: req.params.list}, {$push: {items: "blueberry"}})
        //List.find({ _id: req.params.list}, { $addToSet: { items: "NEW VALUE" } }  )
        //.then(() => List.findOneAndUpdate({ _id: req.params.list }, { $push: { items: "hiii" } }))
        .then(() => List.findById({ _id: req.params.list}))
        .then(list => res.send(list))
        .then(() => List.find({ }))
        
}