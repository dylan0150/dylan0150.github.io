ShopSwitcher = function(){
  this.noshopfound = true;
  this.num = 0;
  this.currentshop = "";
  this.discovered = [];
  this.buyitem = function(){
    var tobuy = prompt("What would you like to buy?");
    switch (this.currentshop) {
      case "Merchant":
      Merchant.buyitem(tobuy);
        break;
      case "Shop Keeper":
      ShopKeeper.buyitem(tobuy);
        break;
      case "Magician's Tower":
      Magician.buyitem(tobuy);
        break;
      case "Mysterious Stranger":
      Stranger.buyitem(tobuy);
        break;
    }
  }
  this.xswitch = function(){
    this.closeCurrentShop();
    if(this.discovered.length == 1){
    }
    else if (this.num == this.discovered.length-1){
      this.num = 0;
    }
    else {
      this.num++
    }
    this.currentshop = this.discovered[this.num];
    document.getElementById('shopname').innerHTML = this.currentshop;
  }
  this.openCurrentShop = function(){
    switch (this.currentshop) {
      case "Merchant":
      Merchant.openShop();
        break;
      case "Shop Keeper":
      ShopKeeper.openShop();
        break;
      case "Magician's Tower":
      Magician.openShop();
        break;
      case "Mysterious Stranger":
      Stranger.openShop();
        break;
    }
  }
  this.closeCurrentShop = function(){
    switch (this.currentshop) {
      case "Merchant":
      Merchant.closeShop();
        break;
      case "Shop Keeper":
      ShopKeeper.closeShop();
        break;
      case "Magician's Tower":
      Magician.closeShop();
        break;
      case "Mysterious Stranger":
      Stranger.closeShop();
        break;
    }
  }
}
