import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const createUser = () => {
  const user = {};
  user.id = faker.database.mongodbObjectId();
  user.first_name = faker.person.firstName();
  user.last_name = faker.person.lastName();
  user.email = faker.internet.email();
  user.password = bcrypt.hashSync("coder123", 10);
  user.role = faker.helpers.arrayElement(["admin", "user"]);
  user.pets = [];

  return user;
};

const mockingUser = (n) => {
  const mockingUsers = [];
  for (let i = 0; i < n; i++) {
    mockingUsers.push(createUser());
  }
  return mockingUsers;
};

export default mockingUser;
