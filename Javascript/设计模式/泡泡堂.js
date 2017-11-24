var players = [];

function Player(name, teamColor) {
  this.pareners = []; // 队友
  this.enemies = []; // 敌人
  this.state = 'live';
  this.name = name;
  this.teamColor = teamColor;
}
Player.prototype.win = function () {
  console.log(this.name + ' win');
}
Player.prototype.lose = function () {
  console.log(this.name + ' lose');
}
Player.prototype.die = function () {
  var allDead = true;
  this.state = 'dead';

  for (var i = 0,partner;partner = this.pareners[i++];) {
    if (partner.state !== 'dead') {
      allDead = false;
      break;
    }
  }

  if (allDead === true) {
    this.lose();
    for (var i = 0,parener;parener = this.pareners[i++];) {
      parener.lose();
    }
    for (var i = 0,enemy;enemy = this.enemies[i++];) {
      enemy.win();
    }
  }
}
var playerFactory = function (name, teamColor) {
  var newPlayer = new Player(name, teamColor);

  for (var i = 0,player;player = players[i++];) {
    if (player.teamColor === newPlayer.teamColor) {
      player.pareners.push(newPlayer);
      newPlayer.pareners.push(player);
    } else {
      player.enemies.push(newPlayer);
      newPlayer.enemies.push(player);
    }
  }
  players.push(newPlayer);

  return newPlayer;
}


var player1 = playerFactory('Bob1', 'red');
var player2 = playerFactory('Bob2', 'red');
var player3 = playerFactory('Bob3', 'red');
var player4 = playerFactory('Bob4', 'red');

var player5 = playerFactory('Bob5', 'blue');
var player6 = playerFactory('Bob6', 'blue');
var player7 = playerFactory('Bob7', 'blue');
var player8 = playerFactory('Bob8', 'blue');

player1.die();
player2.die();
player3.die();
player4.die();