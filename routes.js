const Controller = require('./controller');

module.exports = (app) => {
    
    // USER
    //app.get('/users', (res, req) => res.send("hello"));
    app.get('/user/all/:email', Controller.User.getAllUsers);


    // LIST
    app.get('/test', Controller.List.getUserWithPosts)
    // app.get('/:userId/lists', Controller.List.getListsOfUser);
    // app.get('/lists', Controller.List.getAllLists);
    // app.get('/:title', Controller.List.getListByTitle);
}


/*     OLD
module.exports = (app) => {
    // users
    app.post('/api/login', Controller.login)
    app.post('/api/users', Controller.signup);
    app.get('/api/users', Controller.getAllUsers);

    // lists
    app.get('/api/lists', Controller.getLists);

    // lists of the user
        // all
    app.get('/api/:id/lists', Controller.getListsOfUser);
    app.post('/api/:id/lists', Controller.createList);
        //current
    app.get('/api/:id/current', Controller.getCurrentListOfUser);
    app.post('/api/:id/current', Controller.makeListCurrent);

    // items
    app.post('/api/:list/item', Controller.createNewItem);

}
*/