const Controller = require('./controllers');

module.exports = (app) => {
    // app.get('/greeting', Controller.greeting);
    app.post('/api/users', Controller.createUser);
    app.get('/api/users', Controller.getUsers);

    app.get('/api/lists', Controller.getLists);
    app.get('/api/:id/lists', Controller.getListsOfUser);
    app.get('/api/:id/currentlist', Controller.getCurrentListOfUser);
    app.post('/api/lists', Controller.createList);
    app.post('/api/:id/currentlist', Controller.makeListCurrent);

    // app.get('/api/:list/items', Controller.getListItem);
    app.post('/api/:list/items', Controller.createNewItem);
}