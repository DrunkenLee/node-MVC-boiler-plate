const Controller = require("./Controllers/controller");

const input = process.argv.splice(2);
const [command, ...param] = input;

//

switch (command) {
  case "help":
    Controller.something();
    break;
  default:
    break;
}
