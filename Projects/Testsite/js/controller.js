newUser = function(){
  var confirm = prompt("Are you sure you want to start a new game?[y/n]")
  if(confirm == "y"){
  username = prompt("What is your name?");
  User = new Hero(username);
  document.getElementById('heroname').innerHTML = User.name;
  alert("Welcome, "+username+".")
  document.getElementById('backpack').innerHTML = "Backpack";
  User.statupdate();
  document.getElementById('usehealthpot').style.visibility = "visible";
  document.getElementById('usemanapot').style.visibility = "visible";
  alert("This is your backpack, where your items will be stored");
  document.getElementById('spellbook').innerHTML = "Spellbook";
  User.addspelltospellbook("Magic Bolt",3,1,": You fire a magic bolt forwards dealing damage.")
  alert("This is your spellbook, where spells you learn will be listed.")
  document.getElementById('explorewild').style.visibility = "visible";
  alert("Click 'Explore the Wilderness' to get started on your adventure! Good Luck!");
  }
}

GameOver = function(){
  alert("GAME OVER\n\nTry Again?")
  window.location.reload(false);
}

newGameSetup = function(){
  activeMonsterType = "";
  Merchant = new Shop("Merchant");
  ShopKeeper = new Shop("Shop Keeper");
  Magician = new Shop("Magician's Tower");
  Stranger = new Shop("Mysterious Stranger");
  switchShop = new ShopSwitcher();
  noshopfound = true;
  SmallCave = new Location("Small Cave","Dungeon");
  NearbyTown = new Location("Nearby Town","Town");
  Tower = new Location("Old Tower","Town");
  alert("Game loaded successfully");
}

checkShopDiscover = function(){
  if(noshopfound == true){
    noshopfound = false;
    document.getElementById('shopchangebutton').style.visibility = "visible";
    document.getElementById('shopopenbutton').style.visibility = "visible";
    document.getElementById('shopclosebutton').style.visibility = "visible";
    switchShop.xswitch();
  }
}

discoverMerchant = function(){
  switchShop.discovered.push("Merchant");
  Merchant.discovered = true;
  checkShopDiscover();
  Merchant.additemtoinventory("Health Potion","Potion",10,false);
  Merchant.additemtoinventory("Mana Potion","Potion",10,false);
  Merchant.additemtoinventory("Small Key","Quest",25,true);
  Merchant.additemtoinventory("Leather Armour","Armour",50,true,0.9);
}

discoverShopKeeper = function(){
  checkShopDiscover();
  switchShop.discovered.push("Shop Keeper")
  ShopKeeper.discovered = true;
  ShopKeeper.additemtoinventory("Metal Armour","Armour",500,0.75,true);
  ShopKeeper.additemtoinventory("Large Key","Quest",50,true)
  ShopKeeper.additemtoinventory("Map","FirstMap",100,true)
  ShopKeeper.additemtoinventory("Old Book","Spell",35,true,"Fireball",12,4,": Hurl a fireball at your foe!")
}

discoverMagician = function(){
  checkShopDiscover();
  switchShop.discovered.push("Magician's Tower")
  Magician.discovered = true;
  Magician.additemtoinventory("Ancient Map","AncientMap",250,true)
  Magician.additemtoinventory("Learn: Lightning Bolt","Spell",50,true,"Lightning Bolt",8,2,": Strike your foe with lightning!")
  Magician.additemtoinventory("Learn: Blizzard","Spell",75,true,"Blizzard",50,15,": Summon a blizzard!")
  Magician.additemtoinventory("Learn: Dark Whisper","Spell",200,true,"Dark Whisper",100,25,": Whisper a word of death dealing immense damage.")
}

discoverStranger = function(){
  checkShopDiscover();
  switchShop.discovered.push("Mysterious Stranger")
  Stranger.discovered = true;
  Stranger.additemtoinventory("Strange Talisman","Quest",1000,true)
}

newEnemyMonster = function(name,level){
  activeMonsterType = "Monster"
  Monster = new Enemy(name,"Monster",level);
  document.getElementById('monstername').innerHTML = Monster.name;
  Monster.generatehp();
  Monster.statupdate();
  Monster.Fight();
}

newEnemyWizard = function(name,level){
  activeMonsterType = "Wizard"
  Wizard = new Enemy(name,"Wizard",level);
  document.getElementById('monstername').innerHTML = Wizard.name;
  Wizard.generatehp();
  Wizard.statupdate();
  Wizard.Fight();
}

randomEncounterWild = function(){
  User.encounter++
  if(User.encounter > 5){
    User.encounter = 0
    User.explore++
  }
  checkForNewArea(User.level,User.explore);
  var rand = Math.floor(Math.random()*5)+1;
  switch (rand) {
    case 1: var name = "Troll"
    break;
    case 2: var name = "Giant"
    break;
    case 3: var name = "Goblin"
    break;
    case 4: var name = "Orc"
    break;
    case 5: var name = "Ogre"
    break;
    default: var name = "Troll"
  }
  var level = Math.floor(Math.random()*User.level)+Math.floor(Math.random()*3);
  newEnemyMonster(name,level);
}

randomEncounterCave = function(){
  User.encounter++
  if(User.encounter > 5){
    User.encounter = 0
    User.explore++
  }
  var rand = Math.floor(Math.random()*10)+1+User.level;
  if(SmallCave.quest1 == false){
    if(rand > 9){
      SmallCave.quest1 = true;
      alert("After stumbling along in the dark you kick something hard... it's a secret trapdoor! You open it to found a horde of Gold. Jackpot!!")
      User.gold = User.gold + 250;
      User.statupdate();
    }
  }
  else if(SmallCave.quest2 == false){
    if(rand > 12){
      if(User.checkforspell("Fireball") == true){
        alert("You find a heavy wooden wall blocking off a deeper area, you blast it to smithereens with a fireball, like a total badass")
        SmallCave.quest2 = true;
        alert("Within you find an old map and an old book, dusting it off reveals the text 'Firestorm Spell'... that sounds useful...")
        User.addspelltospellbook("Firestorm",30,12,": You unleash a devastating Firestorm!")
        User.additemtoinventory("Old Map","OldMap");
        User.explore = User.explore + 5;
        User.statupdate();
      }
      else{
        alert("You find a heavy wooden wall blocking off a deeper area, if only matches existed in this world!")
      }
    }
  }

    var rand2 = Math.floor(Math.random()*5)+1;
    switch (rand2) {
      case 1: var name = "Troll"
      break;
      case 2: var name = "Giant"
      break;
      case 3: var name = "Goblin"
      break;
      case 4: var name = "Orc"
      break;
      case 5: var name = "Ogre"
      break;
      default: var name = "Troll"
    }
    var level = Math.floor(Math.random()*User.level)+Math.floor(Math.random()*5);
    newEnemyMonster(name,level);
}

randomEncounterTown = function(){
  if(ShopKeeper.discovered == false){
    alert("You bump into the local shopkeeper.")
    discoverShopKeeper();
  }
  else{
    alert("You've found everything you can here so far.")
  }
}

randomEncounterTower = function(){
  if(Magician.discovered == false){
    alert("You see an old Wizard shouting at you from the top of the tower... as you get closer you hear 'WATCH OUT!'... a different wizard jumps out at you!")
    newEnemyWizard("Tower Guardian",10);
    discoverMagician();
  }
  else{
    alert("You've found everything you can here so far.")
  }
}



checkForNewArea = function(level,bonus){
  var num = Math.floor(Math.random()*10)+level+bonus
  if (Merchant.discovered == false){
    if(num > 5){
      alert("You found a travelling Merchant!")
      discoverMerchant();
    }
  }
  else if(SmallCave.discovered == false){
    if(num > 7){
      alert("You found a small Cave, but it's locked behind a mysterious door.")
      if(User.checkforitem("Small Key")==true){
        alert("You try the small key... it fits! You peer into the dark beyond...")
        discoverSmallCave();
      }
    }
  }
  else if(NearbyTown.discovered == false){
    if(num > 10){
      discoverNearbyTown();
      alert("You chance across a small Town nearby.")
    }
  }
  else if(Tower.discovered == false){
    if(num > 15){
      Tower.discovered = true;
      alert("You find an old tower.")
      discoverTower();
    }
  }
  else if(Stranger.discovered == false){
    if(num > 25){
      Stranger.discovered = true;
      alert("You meet a Mysterious Stranger.")
      discoverStranger();
    }
  }
}

discoverSmallCave = function(){
  SmallCave.discovered = true;
  document.getElementById('explorecave').style.visibility = "visible";
}

discoverNearbyTown = function(){
  NearbyTown.discovered = true;
  document.getElementById('exploretown').style.visibility = "visible";
}

discoverTower = function(){
  Tower.discovered = true;
  document.getElementById('exploretower').style.visibility = "visible";
}
