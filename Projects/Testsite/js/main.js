/*
Reference:

Global Functions:
  newUser();
  newGameSetup();
  GameOver();
  discoverMerchant();
  discoverShopKeeper();
  discoverMagician();
  discoverStranger)();
  discoverSmallCave();
  newEnemyMonster();
  newEnemyWizard();
  randomEncounterWild();
  checkForNewArea();

Hero Functions:
  this.usemana(cost);
  this.takedamage(damage);
  this.levelup();
  this.checkxp();
  this.statupdate();
  this.checkforspell(name);
  this.checkforitem(name);
  this.additemtoinventory(name,type,value1,value2,value3);
  this.addspelltospellbook(name,damage,cost,description);
  this.castSpell(name);

Shop Functions:
  this.checkforitem(name);
  this.additemtoinventory(name,type,onlyone,cost,value1,value2,value3);
  this.openShop();
  this.closeShop();
  this.buyitem(name);

ShopSwitcher Functions:
  this.xswitch();
  this.openCurrentShop();
  this.closeCurrentShop();

Objects:
  ShopSwitcher: switchShop
  Hero: User >> prompt("")
  Shop: Merchant >> "Merchant"
  Shop: ShopKeeper >> "Shop Keeper"
  Shop: Magician >> "Magician's Tower"
  Shop: Stranger >> "Mysterious Stranger"
  Location: SmallCave >> "Small Cave"

*/

newGameSetup();
