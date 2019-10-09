const Controller = require('./controller');

module.exports = (app) => {
    const { User, Auth, List, Item } = Controller;
    
    // AUTH
    app.post('/signin', Auth.signin); 
    app.post('/signup', Auth.signup);

    // USER
    app.get('/user/all', User.getAllUsers);

    // LIST
    app.get('/list/all', List.getListsOfUser);
    app.post('/list/create', List.createNewList);
    app.put('/list/edit/:listId', List.editList);
    app.delete('/list/delete/:listId', List.deleteList)
    
    // ITEMS
    app.get('/item/all/:postId', Item.getAllPostItems);
    app.post('/item/create/:postId', Item.createNewPostItem);
    app.put('/item/edit/:itemId', Item.editItem);
    app.delete('/item/delete/:itemId', Item.deleteItem);
}


