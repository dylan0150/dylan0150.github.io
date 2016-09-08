var Hero = function(name,hp,mana){
  this.name = name;
  this.hp = hp;
  this.maxhp = hp;
  this.mana = mana;
  this.maxmana = mana;
  this.inventory = [];
  this.statUpdate = function(){
    document.getElementById('herostats').innerHTML = "HP: "+this.hp+" MANA: "+this.mana;
    if(this.hp < 1){
      alert("You have been slain!");
      GameOver();
    }
  };
  this.additemtoinventory = function(item){
    if(this.checkuniqueowned(item.name,item.unique) === true){
      alert("You already own one of those!");
    }
    else{
      this.inventory.push(item);
      this.statUpdate();
      alert("You now own "+name+"!");
    };
  };
  this.checkowned = function(name,unique){
    for (var i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i] === name){
        return true;
      }
    }
  };
  this.checkuniqueowned = function(name,unique){
    if(unique === true){
      if(this.checkowned(name,unique); === true){
        return true;
      }
      else{
        return false;
      };
    }
    else{
      return false;
    };
  };
}
