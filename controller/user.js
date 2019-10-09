const Model = require('../models');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

exports.getAllUsers = (req, res) => {
    //res.send("GET ALL USERS")
    return Model.User.find()
        .then(users => res.send(users))
        .catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}

exports.getUserInfo = (req, res) => {
    console.log("ID", req.userId);
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'no token provided'});

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token'});
        
        //res.status(200).send(decoded);
        Model.User.findById(decoded.id, { password: 0 }, (err, user) => {
            if (err) return res.status(500).send("there was a problem finding the user");
            if (!user) return res.status(404).send("no user found");

            res.status(200).send(user);
        })


    });
}




