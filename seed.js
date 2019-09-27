const faker = require('faker');

const User = require('./models/User');
const List = require('./models/List');

const seedDB = async () => {
  // USER 1
  const user1 = new User({
    username: faker.internet.email(),
  });
  const list1 = new List({
    title: "colors",
    items:  [faker.commerce.color(), faker.commerce.color(), faker.commerce.color(), faker.commerce.color(), faker.commerce.color(), faker.commerce.color(), faker.commerce.color(), faker.commerce.color(), faker.commerce.color()],
    isCurrent: true,
    belongsTo: user1.id
  })
  const list2 = new List({
    title: "students",
    items:  [faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName() ],
    isCurrent: false,
    belongsTo: user1.id
  })
  const list3 = new List({
    title: "words",
    items:  [faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word() ],
    isCurrent: false,
    belongsTo: user1.id
  })

  // USER 2
  const user2 = new User({
    username: faker.internet.email(),
  });
  const list4 = new List({
    title: "econ class",
    items:  [faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName() ],
    isCurrent: true,
    belongsTo: user2.id
  })
  const list5 = new List({
    title: "spanish class",
    items:  [faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName(), faker.name.firstName()],
    isCurrent: false,
    belongsTo: user2.id
  })

    // USER 3
    const user3 = new User({
      username: faker.internet.email(),
    });

    await user1.save();
    await user2.save();
    await user3.save();

    await list1.save();
    await list2.save();
    await list3.save();
    await list4.save();
    await list5.save();
};

module.exports = seedDB;



