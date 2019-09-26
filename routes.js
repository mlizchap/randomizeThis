const Controller = require('./controllers');

module.exports = (app) => {
    // app.get('/greeting', Controller.greeting);
    app.post('/api/users', Controller.createUser);
    app.get('/api/users', Controller.getUsers);
    
}