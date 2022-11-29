const BaseballGameController = require('./BaseballGameController');
const BaseballGame = require('./BaseballGame');

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    BaseballGameController.start(this.baseballGame);
  }
}

module.exports = App;
