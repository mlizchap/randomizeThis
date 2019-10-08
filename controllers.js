const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('./models/User');
const List = require('./models/List');

mongoose.Promise = global.Promise;

exports.login = (req, res) => {
    const email  = req.body.email;
    const password  = req.body.password;
    let responseObject = {
        id: null,
        token: null
    }
    User
        .find({ email, password })
        .then(user => {
            console.log(user[0]._id)
            responseObject.id = user[0]._id
            return user;
        }).then(user => {
            jwt.sign({user}, 'privatekey', { expiresIn: '2h' },(err, token) => {
                // headers: {
                //     'Authorization': 'Bearer ' + <token value>,
                //     'Content-Type': 'application/json'
                // },
                if(err) { console.log(err) }
                // update user in app state
                // 
                responseObject.token = token;   
                console.log(responseObject) 
                res.send( responseObject )
            });
        })
        .catch(err => console.log(err))

    
}

exports.signup = (req, res) => {
    var newUser = new User(req.body);

    return newUser.save()
      .then(user => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
}

exports.getAllUsers = (req, res) => {
    User.find({})
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the users"
            })
        })
}


// LISTS
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
    List.find({ belongsTo: req.params.id })
    // List.find({ 'belongsTo': req.params.id })
        .then(lists => {
            res.send(lists);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}

exports.createList = (req, res) => {
    var newList = new List({
        title: req.body.title,
        items: [req.body.items],
        isCurrent: true,
        belongsTo: req.body.userId
    }) 

    return newList.save()
        .then(list => {
            res.send(list);
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
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
    return List.find({ _id: req.params.id }, { isCurrent: true })
            .then(() => List.find({ _id: req.params.id , isCurrent: true}, {isCurrent: false} ))
            .then(result => res.send(result))
        
}

// ITEMS
exports.createNewItem = (req, res) => {
    var newItem = new Item({
        text: req.body.text,
        belongsTo: req.params.list
    }) 

    return newItem.save()
        .then(list => {
            res.send(list);
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}
exports.getItemsOfList = (req, res) => {
    return Item.find({ belongsTo: req.params.id })
}