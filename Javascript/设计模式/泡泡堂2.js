function Player(name, teamColor) {
  this.name = name;
  this.teamColor = teamColor;
  this.state = 'alive';
}
Player.prototype.win = function () {
  console.log(this.name + ' win');
}
Player.prototype.lose = function () {
  console.log(this.name + ' lose');
}
Player.prototype.die = function () {
  this.state = 'dead';
  playerDirector.ReceiveMessage('playerDead', this);
}
Player.prototype.remove = function () {
  playerDirector.ReceiveMessage('playerRemove', this);
}
Player.prototype.changeTeam = function (teamColor) {
  playerDirector.ReceiveMessage('playerChangeTeam', this, teamColor);
}

var playerFactory = function (name, teamColor) {
  var newPlayer = new Player(name, teamColor);
  playerDirector.ReceiveMessage('playerAdd', newPlayer);

  return newPlayer;
}

var playerDirector = (function(){
  var players = {};
  var operations = {};

  operations.playerAdd = function (player) {
    var teamColor = player.teamColor;

    players[teamColor] = players[teamColor] || [];
    players[teamColor].push(player);
  }
  operations.playerRemove = function (player) {
    var teamColor = player.teamColor;
    var teamPlayers = players[teamColor];

    for (var i = 0;i < teamPlayers.length;i++) {
      if (player === teamPlayers[i]) {
        teamPlayers.splice(i, 1)
      }
    }
  }
  operations.playerChangeTeam = function (player, teamColor) {
    operations.playerRemove(player);
    player.teamColor = teamColor;
    operations.playerAdd(player);
  }
  operations.playerDead = function (player) {
    var teamColor = player.teamColor;
    var teamSelf = players[teamColor];
    var allDead = true;
    // 1.检查自己团队的队员是否全部阵亡，如果全部阵亡则需要打印自己团队所有人员阵亡，并通知对手获胜
    player.state = 'dead';

    for (var i = 0;i<teamSelf.length;i++) {
      if (teamSelf[i].state !== 'dead') {
        allDead = false
      }
    }
    if (!allDead) {
      return;
    }

    for (var i = 0;i<teamSelf.length;i++) {
      teamSelf[i].lose();
    }
    for (var team in players) {
      if (team === teamColor) {
        continue;
      }
      for (var i = 0;i < players[team].length;i++) {
        players[team][i].win();
      }
    }
  }
  var ReceiveMessage = function () {
    var key = Array.prototype.shift.call(arguments);
    operations[key].apply(this, arguments);
  }
  return {
    ReceiveMessage: ReceiveMessage
  }
})();


var player1 = playerFactory('Bob1', 'red');
var player2 = playerFactory('Bob2', 'red');
var player3 = playerFactory('Bob3', 'red');
var player4 = playerFactory('Bob4', 'red');

var player5 = playerFactory('Bob5', 'blue');
var player6 = playerFactory('Bob6', 'blue');
var player7 = playerFactory('Bob7', 'blue');
var player8 = playerFactory('Bob8', 'blue');

player1.changeTeam('blue');
player2.die();
player3.die();
player4.die();