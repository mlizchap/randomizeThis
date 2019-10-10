const Controller = require('./controller');
const verifyToken = require('./middleware/verifyToken');
const Model = require('./models');

module.exports = (app) => {
    const { User, Auth, List, Item } = Controller;

    // AUTH
    app.post('/signin', Auth.signin); 
    app.post('/signup', Auth.signup);

    // USER
    app.get('/user/all', User.getAllUsers);
    app.get('/user/info', verifyToken, User.getUserInfo);

    // LIST
    app.get('/list/all', verifyToken, List.getListsOfUser);
    app.post('/list/create', verifyToken, List.createNewList);
    app.put('/list/edit/:listId', List.editList);
    app.delete('/list/delete/:listId', List.deleteList)
    
    // ITEMS
    app.get('/item/all/:postId', Item.getAllPostItems);
    app.post('/item/create/:postId', Item.createNewPostItem);
    app.put('/item/edit/:itemId', Item.editItem);
    app.delete('/item/delete/:itemId', Item.deleteItem);


    app.get('/list/showall', (req, res) => {
        Model.List.find()
            .then(lists => res.send(lists));
    });
    app.get('/item/showall', (req, res) => {
        Model.Item.find()
            .then(items => res.send(items));
    });
}


