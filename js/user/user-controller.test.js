const UserController = require("./user-controller");
const User = require("./user");

let userController;

beforeEach(() => {
  userController = new UserController();
});


// add()

test('add user that is not in the list', () => {
  let user = new User(1, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(userController.getUsers()).toContain(user);
});


// remove()

test('remove user that is not in the list', () => {
  let user1 = new User(1, "Santiago", "santiago@generation.org");
  let user2 = new User(2, "Ana", "ana@generation.org");

  userController.add(user1);

  userController.remove(user2);

  expect(userController.getUsers()).toContain(user1);
});


// findByEmail()

test('find user by email', () => {
  let user = new User(1, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(userController.findByEmail("santiago@generation.org")).toBe(user);
});

test('findByEmail returns undefined if email does not exist', () => {
  let user = new User(1, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(userController.findByEmail("ana@generation.org")).toBeUndefined();
});


// findById()

test('find user by id', () => {
  let user = new User(1, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(userController.findById(1)).toBe(user);
});

test('findById returns undefined if id does not exist', () => {
  let user = new User(1, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(userController.findById(2)).toBeUndefined();
});
