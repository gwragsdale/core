/*

Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name. 
The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, 
which means that their name gets wiped. The next time you ask, 
it will respond with a new random name.

The names must be random; they should not follow a predictable sequence. 
Random names means there is a risk of collisions. 
Your solution should not allow the use of the same name twice.

You must install the NPM package named seedrandom for these tests. 
Require and use seedrandom exactly as shown. 
This will override the built-in Math.random method
so that it generates numbers that appear random in a predictable sequence. 
We need this feature to test certain aspects of the robot name generation.

*/

let Robot = require('./robot-name.js');
Math.seedrandom = require('seedrandom');

describe("Robot Name", () => {
  const NAME_REGEXP = /^[A-Z]{2}\d{3}$/;
  const DIFFERENT_ROBOT_NAME_SEED = 1234;
  const SAME_INITIAL_ROBOT_NAME_SEED = 1000;

  test("has name", () => {
    expect(new Robot().name()).toMatch(NAME_REGEXP);
  });

  test("name sticks", () => {
    let robot = new Robot();
    let name = robot.name();
    expect(robot.name()).toBe(name);
  });

  test("different robots have different names", () => {
    Math.seedrandom(DIFFERENT_ROBOT_NAME_SEED);

    let robot1 = new Robot();
    let robot2 = new Robot();

    expect(robot1.name()).not.toBe(robot2.name());
  });

  test("different name when chosen name is taken", () => {
    Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
    let robot1 = new Robot();
    Math.seedrandom(SAME_INITIAL_ROBOT_NAME_SEED);
    let robot2 = new Robot();
    expect(robot1.name()).not.toBe(robot2.name());
  });

  test("reset name", () => {
    Math.seedrandom(DIFFERENT_ROBOT_NAME_SEED);

    let robot = new Robot();
    let name1 = robot.name();
    robot.reset();
    let name2 = robot.name();

    expect(name1).not.toBe(name2);
  });
});