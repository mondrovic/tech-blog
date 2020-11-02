const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

// so seeds can connect to db
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("-------------------");
  await seedUsers();
  console.log("-------------------");
  await seedPosts();
  console.log("-------------------");
  await seedComments();
  console.log("-------------------");
  process.exit(0);
};

seedAll();
