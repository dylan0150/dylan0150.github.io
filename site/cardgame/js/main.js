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
    if(confirm("I got "+username+", is that right?") === true){
      temploop = false;
      alert("Nice to meet you "+username+".");
      Player = new player(username);
      console.log('Player Created Successfully '+Player);
    }
  }
}

newPlayer();
