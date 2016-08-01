Hero = function(name){
  this.xp = 0
  this.encounter = 0;
  this.explore = 0;
  this.level = 1;
  this.hppots = 1;
  this.manapots = 1;
  this.gold = 25;
  this.name = name;
  this.armour = 1;
  this.hpcurrent = 100;
  this.hpmax = 100;
  this.manacurrent = 20;
  this.manamax = 20;
  this.usehealthpotion = function(){
    if (this.hppots > 0){
      this.hppots--
      User.hpcurrent = User.hpmax
      User.statupdate();
      alert("You used a health potion! Your health has been fully restored.")
    }
  }
  this.usemanapotion = function(){
    if (this.manapots > 0){
      this.manapots--
      User.manacurrent = User.manamax
      User.statupdate();
      alert("You used a mana potion! Your mana has been fully restored.")
    }
  }
  this.statupdate = function(){
    document.getElementById('herostats').innerHTML = "LV: "+this.level+" HP: "+this.hpcurrent+"/"+this.hpmax+"  MP: "+this.manacurrent+"/"+this.manamax;
    if(this.hpcurrent < 1){
      GameOver();
    }
    else {
      document.getElementById('consumable').innerHTML = "Health Potions: "+this.hppots+" Mana Potions: "+this.manapots+" Gold: "+this.gold;
    }
  }
  this.takedamage = function(damage){
    this.hpcurrent = this.hpcurrent - Math.floor(damage*this.armour);
    this.statupdate();
    alert("You take "+Math.floor(damage*this.armour)+" damage! You have "+this.hpcurrent+" health remaining!");
  }
  this.usemana = function(cost){
    this.manacurrent = this.manacurrent - cost;
  }
  this.levelup  = function(){
    this.level++;
    this.hpmax = this.hpmax + 10;
    this.hpcurrent = this.hpmax;
    this.manamax = this.manamax + 5;
    this.manacurrent = this.manamax;
    this.statupdate();
    alert("You have leveled up! HP and MANA have been increased and fully restored.");
  }
  this.inventory = []
  this.inventorynum = 0
  this.spellbook = []
  this.spellnum = 0
  this.checkforitem = function(name){
    for (var i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i][0] == name){
        return true;
      }
      else{
        return false;
      }
    }
  }
  this.additemtoinventory = function(name,type,value1,value2,value3){
    this.inventory.push([name,type,value1,value2,value3]);
    this.inventorynum++;
    switch (this.inventorynum) {
      case 1: document.getElementById('item1').innerHTML = name
      break;
      case 2: document.getElementById('item2').innerHTML = name
      break;
      case 3: document.getElementById('item3').innerHTML = name
      break;
      case 4: document.getElementById('item4').innerHTML = name
      break;
      case 5: document.getElementById('item5').innerHTML = name
      break;
      case 6: document.getElementById('item6').innerHTML = name
      break;
      case 7: document.getElementById('item7').innerHTML = name
      break;
      case 8: document.getElementById('item8').innerHTML = name
      break;
      case 9: document.getElementById('item9').innerHTML = name
      break
      case 10: document.getElementById('item10').innerHTML = name
      break;
      case 11: document.getElementById('item11').innerHTML = name
      break;
      case 12: document.getElementById('item12').innerHTML = name
      break;
      case 13: document.getElementById('item13').innerHTML = name
      break;
      case 14: document.getElementById('item14').innerHTML = name
      break;
      case 15: document.getElementById('item15').innerHTML = name
      break;
      case 16: document.getElementById('item16').innerHTML = name
      break;
      case 17: document.getElementById('item17').innerHTML = name
      break;
      case 18: document.getElementById('item18').innerHTML = name
      break;
      case 19: document.getElementById('item19').innerHTML = name
      break;
      case 20: document.getElementById('item20').innerHTML = name
      break;
    }
  }
  this.checkforspell = function(name){
    for (var i = 0; i < this.spellbook.length; i++) {
      if(this.spellbook[i][0] == name){
        var answer = true;
      }
      else{
        var answer = false;
        }
      }
      return answer;
  }
  this.checkforspelldamage = function(name){
    for (var i = 0; i < this.spellbook.length; i++) {
      if(this.spellbook[i][0] == name){
        var answer = this.spellbook[i][1];
      }
      else{
        }
      }
      return answer;
  }
  this.checkforspellcost = function(name){
    for (var i = 0; i < this.spellbook.length; i++) {
      if(this.spellbook[i][0] == name){
        var answer = this.spellbook[i][2];
      }
      else{
        }
      }
      return answer;
  }
  this.checkforspelldescription = function(name){
    for (var i = 0; i < this.spellbook.length; i++) {
      if(this.spellbook[i][0] == name){
        var answer = this.spellbook[i][2];
      }
      else{
        var answer = false;
        }
      }
      return answer;
  }
  this.addspelltospellbook = function(name,damage,cost,description){
    this.spellbook.push([name,damage,cost,description]);
    this.spellnum = this.spellnum + 1;
    switch (this.spellnum){
      case 1:
        document.getElementById('spell1button').innerHTML = name;
        document.getElementById('spell1damage').innerHTML = "Damage: "+damage;
        document.getElementById('spell1cost').innerHTML = "Mana Cost: "+cost;
        document.getElementById('spell1description').innerHTML = name+" "+description;
      break;
      case 2:
        document.getElementById('spell2button').innerHTML = name;
        document.getElementById('spell2damage').innerHTML = "Damage: "+damage;
        document.getElementById('spell2cost').innerHTML = "Mana Cost: "+cost;
        document.getElementById('spell2description').innerHTML = name+" "+description;
      break;
      case 3:
        document.getElementById('spell3button').innerHTML = name;
        document.getElementById('spell3damage').innerHTML = "Damage: "+damage;
        document.getElementById('spell3cost').innerHTML = "Mana Cost: "+cost;
        document.getElementById('spell3description').innerHTML = name+" "+description;
      break;
      case 4:
        document.getElementById('spell4button').innerHTML = name;
        document.getElementById('spell4damage').innerHTML = "Damage: "+damage;
        document.getElementById('spell4cost').innerHTML = "Mana Cost: "+cost;
        document.getElementById('spell4description').innerHTML = name+" "+description;
      break;
      case 5:
        document.getElementById('spell5button').innerHTML = name;
        document.getElementById('spell5damage').innerHTML = "Damage: "+damage;
        document.getElementById('spell5cost').innerHTML = "Mana Cost: "+cost;
        document.getElementById('spell5description').innerHTML = name+" "+description;
      break;
      case 6:
        document.getElementById('spell6button').innerHTML = name;
        document.getElementById('spell6damage').innerHTML = "Damage: "+damage;
        document.getElementById('spell6cost').innerHTML = "Mana Cost: "+cost;
        document.getElementById('spell6description').innerHTML = name+" "+description;
      break;
      case 7:
        document.getElementById('spell7button').innerHTML = name;
        document.getElementById('spell7damage').innerHTML = "Damage: "+damage;
        document.getElementById('spell7cost').innerHTML = "Mana Cost: "+cost;
        document.getElementById('spell7description').innerHTML = name+" "+description;
      break;
    }
  }
  this.castSpell = function(name){
    switch(activeMonsterType){
      case "Monster": var Enemy = Monster
      break;
      case "Wizard": var Enemy = Wizard
      break;
    }
    var cost = this.checkforspellcost(name);
    if(cost > User.manacurrent){
      alert("You don't have the mana for that! The cast fails!")
    }
    else{
    this.usemana(cost);
    var damage = this.checkforspelldamage(name);
    alert("You cast "+name+"! It does "+damage+" damage!");
    Enemy.takedamage(damage);
    }
    this.statupdate();
    Enemy.statupdate();
    Enemy.Fightback();
  }
  this.checkxp = function(){
    while (this.xp > (10*this.level + this.level*this.level - 1)){
      this.xp = this.xp - (10*this.level + this.level*this.level);
      this.levelup();
      this.statupdate();
    }
  }
}
