var players = [];

function Player(name, teamColor) {
  this.state = 'live' 
  this.name = name;
  this.teamColor = teamColor
}
Player.prototype.win = function () {
  console.log('winner:'+this.name)
}
Player.prototype.lose = function () {
  console.log('loser:'+this.name)
}
Player.prototype.die = function () {
  this.state = 'dead'
  playerDirector.ReceiveMessage('playerDead', this);
}
Player.prototype.remove = function () {
  playerDirector.ReceiveMessage('removePlayer', this)
}
Player.prototype.changeTeam = function(color){
  playerDirector.ReceiveMessage('changeTeam', this, color)
};

var playerFactory = function (name, teamColor) {
  var newPlayer = new Player(name, teamColor);
  playerDirector.ReceiveMessage('addPlayer', newPlayer);
  return newPlayer;
}

var playerDirector = (function () {
  var players = {};
  var operations = {};

  operations.addPlayer = function (player) {
    var teamColor = player.teamColor;
    players[teamColor] = players[teamColor] || [];
    players[teamColor].push(player);
  }
  operations.removePlayer = function (player) {
    var teamColor = player.teamColor;
    var teamPlayers = players[teamColor]

    for(var i=teamPlayers.length-1;i>=0;i--) {
      if(teamPlayers[i] === player) {
        teamPlayers.splice(i, 1)
      }
    }
  }
  operations.changeTeam = function (player, color) {
    operations.removePlayer(player);
    player.teamColor = color;
    operations.addPlayer(player)
  }
  operations.playerDead = function (player) {
    var teamColor = player.teamColor;
    var teamPlayers = players[teamColor];
    var allDead = true;

    for(var i=0,player;player=teamPlayers[i++];) {
      if (player.state !== 'dead') {
        allDead = false;
      }
    }

    if (allDead) {
      for (var i=0,player;player=teamPlayers[i++];) {
        player.lose()
      }
      for(var color in players) {
        if (color !== teamColor) {
          var teamPlayers = players[color];
          for(var i=0,player;player =teamPlayers[i++];) {
            player.win()
          }
        }
      }
    }
  }
  var ReceiveMessage = function () {
    var message = Array.prototype.shift.call(arguments);
    operations[message].apply(this, arguments)
  }
  return {
    ReceiveMessage: ReceiveMessage
  }
})()



var p1 = playerFactory('1', 'red');
var p2 = playerFactory('2', 'red');
var p3 = playerFactory('3', 'red');
var p4 = playerFactory('4', 'blue');
var p5 = playerFactory('5', 'blue');
var p6 = playerFactory('6', 'blue');

p1.changeTeam('blue')
p2.die()
p3.die()
