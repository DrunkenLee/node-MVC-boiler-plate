const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {
  static something(...param) {
    Model.something((err, res) => {
      if (err) View.showErr(err);
      else {
        // go your code
      }
    });
  }
}
