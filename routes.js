const Controller = require('./controller');

module.exports = (app) => {
    const { User } = Controller;
    
    // USER
    app.get('/user/all', User.getAllUsers);
    app.post('/user/signin', () => console.log('sign in user'));
    app.post('/user/signup', () => console.log('sign up user'));

    // LIST
    app.get('/list/all/:email', () => console.log('gets all post requests of a partictular '));
    app.post('/list/create', () => console.log('creates a new list'));
    app.put('/list/edit/:listId', () => console.log('edits a particular post'));
    app.delete('/list/delete/:listId', () => console.log('edits a particular post'))
    
    // ITEMS
    app.get('/item/all/:postName', () => console.log('gets all items of a particular post'));
    app.post('/item/create', () => console.log('create a new item'));
    app.put('/item/edit/:itemId', () => console.log('edits a particular post'));
    app.delete('item/delete/:itemId', () => console.log('deletes a spcific item'))
}


