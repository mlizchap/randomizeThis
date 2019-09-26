const mongoose = require('mongoose');
const User = require('./models/User');
const UserTest = require('./models/UserTest');

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