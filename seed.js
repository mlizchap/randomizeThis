const faker = require('faker');

const User = require('./models/User');
const List = require('./models/List');
const Item = require('./models/Item');

var bcrypt = require('bcryptjs');

const hashPassword = bcrypt.hashSync("a", 8);


const createNewUser = (userName) => {
  const user = new User({
    email: userName,
    password: hashPassword
  });
  return user;
};

const createNewList = (title, isCurrent, user) => {
  const list = new List({
    title,
    isCurrent,
    user
  });

  
  return list;
};

const createNewItem = (list, text) => {
  const item = new Item({
    text: text,
    list
  });
  
  return item;
}

const seedDB = async () => {

  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'yelllow'];
  const students = ['jane', 'cindy', 'steve', 'joe', 'allen', 'dana'];


  const user1 = await createNewUser("x").save();
  const user2 = await createNewUser("y").save();
  const user3 = await createNewUser("z").save();
  
  console.log("SEED USER", user1._id)

  const colorList = await createNewList("colors", true, user1._id).save();
  const studentList = await createNewList("students", false, user1._id).save();
  
  // await createNewItem(colorList._id, colors);
  // await createNewItem(studentList._id, students);
  await colors.map(color => {
    createNewItem(colorList._id, color).save();
  })

  await students.map(student => {
    createNewItem(studentList._id, student).save();
  })

}

module.exports = seedDB;

