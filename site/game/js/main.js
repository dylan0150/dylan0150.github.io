newHero = function(){
  var username = prompt("What is your name?");
  User = new Hero(username,100,20);
  alert("Welcome to _GAMENAME "+Hero.name+"!");
  User.setHero();
  User.statUpdate();
}

GameOver = function(){
  alert("GAME OVER");
  location.reload();
}
