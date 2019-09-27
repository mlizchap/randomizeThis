const express = require('express');    
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

const seedDB = require('./seed');
const User = require('./models/User');
const List = require('./models/List');

const app = express();

const router = require('./routes');

mongoose.Promise = global.Promise;


const eraseDatabaseOnSync = true;

mongoose.connect('mongodb://localhost/random', async () => {
    if (eraseDatabaseOnSync) {
        await Promise.all([
            User.deleteMany({}),
            List.deleteMany({}),
        ])
        seedDB();
    }
});
mongoose.connection 
    .once('open',() => { console.log('db open'); })
    .on('error', () => (error) => console.warn('Warning', error))


// Configure bodyparser to handle post requests
mongoose.set('useFindAndModify', false);

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());

//  app.post('/user', (req, res) => {
//     var newUser = new User(req.body);
//     return newUser.save()
//       .then(user => {
//         res.send("item saved to database");
//       })
//       .catch(err => {
//         res.status(400).send("unable to save to database");
//       });
//  })


router(app);


module.exports = app;