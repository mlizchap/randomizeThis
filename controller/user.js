const Model = require('../models');

exports.getAllUsers = (req, res) => {
    Model.User.find()
        .then(users => res.send(users))
        .catch(err => {
            res.status(500).send({
                message: err.message || "an error occurred while retrieving the lists"
            })
        })
}



