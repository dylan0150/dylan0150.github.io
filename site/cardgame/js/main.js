player = function(name){
  this.Hand = [

  ];
  this.Deck = [

  ];
  this.name = name;

}

newPlayer = function(){
  var temploop = true;
  while(temploop === true){
    var username = prompt("What is your name?");
    if(confirmstring(username) === true){
      temploop = false;
      alert("Nice to meet you "+username+".");
      Player = new player(username);
      console.log('Player Created Successfully '+Player);
    }
  }
}

newPlayer();

confirmstring = function(variable){return confirm("I got "+variable+", is that right?"};
