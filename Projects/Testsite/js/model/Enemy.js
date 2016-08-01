Enemy = function(name,type,level){
  this.name = name;
  this.spellcounter = 0;
  this.type = type;
  this.alive = true;
  this.level = level;
  this.takedamage = function(damage){
    this.hp = this.hp - damage;
    this.statupdate();
  }
  this.maxhp = 0
  this.hp = 0
  this.generatehp = function(){
    switch (this.type) {
      case "Monster":
        var hp = level*5 + Math.floor(Math.random()*level*2)+1
        this.maxhp = hp;
        this.hp = hp;
      break;
      case "Wizard":
      var hp = level*3 + Math.floor(Math.random()*level*2)+1
      this.maxhp = hp;
      this.hp = hp;
      break;
    }
  }
  this.statupdate = function(){
    document.getElementById('monsterstats').innerHTML = "HP: "+this.hp+"/"+this.maxhp;
    this.checkalive();
  }
  this.checkalive = function(){
    if(this.hp < 1){
      this.alive = false;
      return false;
    }
    else{
      return true;
    }
  }
  this.defeated = function(){
    alert(this.name+" has been defeated!");
    var xpearned = 1 + Math.floor(Math.random()*this.level*5);
    var goldearned = 1 + Math.floor(Math.random()*this.level*5);
    User.gold = User.gold + goldearned
    User.xp = User.xp + xpearned
    User.statupdate();
    alert("You earned "+xpearned+" experience and found "+goldearned+" gold!");
    User.checkxp();
    document.getElementById('monstername').innerHTML = ""
    document.getElementById('monsterstats').innerHTML = ""
  }
  this.Fight = function(){
      for (var i = 0; i < User.spellbook.length; i++) {
        switch (i) {
          case 0: document.getElementById('spell1button').style.visibility = "visible";
          break;
          case 1: document.getElementById('spell2button').style.visibility = "visible";
          break;
          case 2: document.getElementById('spell3button').style.visibility = "visible";
          break;
          case 3: document.getElementById('spell4button').style.visibility = "visible";
          break;
          case 4: document.getElementById('spell5button').style.visibility = "visible";
          break;
          case 5: document.getElementById('spell6button').style.visibility = "visible";
          break;
          case 6: document.getElementById('spell7button').style.visibility = "visible";
          break;
          }
        }
    alert("A "+this.type+" appears! What will you do?")
  }
  this.Fightback = function(){
    if(this.alive == true){
      this.attack();
    }
    else{
      document.getElementById('spell1button').style.visibility = "hidden";
      document.getElementById('spell2button').style.visibility = "hidden";
      document.getElementById('spell3button').style.visibility = "hidden";
      document.getElementById('spell4button').style.visibility = "hidden";
      document.getElementById('spell5button').style.visibility = "hidden";
      document.getElementById('spell6button').style.visibility = "hidden";
      document.getElementById('spell7button').style.visibility = "hidden";
      this.defeated();
    }
  }
  this.attack = function(){
    switch (this.type) {
      case "Monster":
      if(this.level > 10){
        alert(this.name+" opens it's mouth and unleashes a torrent of fire at you!")
        var damage = (Math.floor(Math.random()*2)+1)*this.level + this.level*2 + 1
        User.takedamage(damage);
      }
      if(this.level > 7){
        alert(this.name+" viciously mauls you!")
        var damage = (Math.floor(Math.random()*3)+1)*this.level + this.level*2 + 1
        User.takedamage(damage);
      }
      else if(this.level > 4){
        alert(this.name+" claws and bites at you!")
        var damage = (Math.floor(Math.random())+1)*this.level + this.level + 1
        User.takedamage(damage);
      }
      else{
        alert(this.name+" lunges at you!")
        var damage = Math.floor(Math.random()*this.level*2)+1
        User.takedamage(damage);
      }
      break;
      case "Wizard":
      if(this.level > 10){
        alert(this.name+" saps your strength while healing theirself!")
        var damage = Math.floor(Math.random()*level*3)+1
        User.takedamage(damage);
        this.hp = this.hp + damage;
        if(this.hp > this.maxhp){
          this.hp = this.maxhp;
        }
        this.statupdate();
      }
      if(this.level > 7){
        this.spellcounter = this.spellcounter+this.level%7
        if(this.spellcounter > 5){
        alert(this.name+" unleashes a huge storm of destructive magic!");
        var damage = Math.floor(Math.random()*level*15)+5+level*3;
        User.takedamage(damage);
        this.spellcounter = 0;
        }
        else{
        alert(this.name+" is muttering under their breath...")
        }
      }
      if(this.level > 4){
        alert(this.name+" hurls a fireball at you!")
        var damage = Math.floor(Math.random()*10)+1+Math.floor(Math.random()*this.level)
        User.takedamage(damage);
      }
      else{
        alert(this.name+" fires a magic bolt at you!")
        var damage = Math.floor(Math.random()*7)+1
        User.takedamage(damage);
      }
      break;
    }
  }
}
