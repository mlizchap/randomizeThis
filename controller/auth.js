const Model = require('../models');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

exports.signup = (req, res) => {
    const hashPassword = bcrypt.hashSync(req.body.password, 8);

    Model.User.create({
        email: req.body.email,
        password: hashPassword
    }, (err, user) => {
        if (err) return res.status(500).send(err);
        const token = jwt.sign(
            { id: user._id }, // payload
            config.secret, 
            { expiresIn: 86400 } // expires in 24 hours
        );
        res.status(200).send({ auth: true, token: token });
    });

    //res.send("SIGN UP USER");
}

exports.signin = (req, res) => {
    Model.User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send('Error on the server');
        if (!user) return res.status(404).send('no user found');
        
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });
        res.status(200).send({ auth: true, token: token })
    })
}