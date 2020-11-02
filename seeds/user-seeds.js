const { User } = require("../models");

// randomly generated users and emails (9)
const userseeds = [
  {
    username: "balklavinia",
    email: "testbridge@random.edu",
    password: "admin123",
  },
  {
    username: "rearfollow",
    email: "testrugbyran@random.com",
    password: "admin123",
  },
  {
    username: "melodyeyebrow",
    email: "testsnatch@random.gov",
    password: "admin123",
  },
  {
    username: "goldfinchgarage",
    email: "testbearred@random.com",
    password: "admin123",
  },
  {
    username: "tormenteddingleby",
    email: "testthejoker@random.com",
    password: "admin123",
  },
  {
    username: "heartcodpiece",
    email: "testdogkale@random.net",
    password: "admin123",
  },
  {
    username: "wornbloodhound",
    email: "testsnatch@random.edu",
    password: "admin123",
  },
  {
    username: "unsightlycobbey",
    email: "testsharkrye@random.com",
    password: "admin123",
  },
  {
    username: "tinyacoustic",
    email: "testsausage@random.gov",
    password: "admin123",
  },
];

const seedUsers = () => User.bulkCreate(userseeds);

module.exports = seedUsers;
