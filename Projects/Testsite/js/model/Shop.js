Shop = function(name){
  this.discovered = false;
  this.name = name;
  this.inventory = []
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
  this.additemtoinventory = function(name,type,cost,onlyone,value1,value2,value3,value4){
    this.inventory.push([name,type,cost,onlyone,value1,value2,value3,value4]);
  }
  this.openShop = function(){
    document.getElementById('shopbuybutton').style.visibility = "visible";
    document.getElementById('shopitem1').innerHTML = this.inventory[0][0]+" Cost: "+this.inventory[0][2]
    document.getElementById('shopitem2').innerHTML = this.inventory[1][0]+" Cost: "+this.inventory[1][2]
    document.getElementById('shopitem3').innerHTML = this.inventory[2][0]+" Cost: "+this.inventory[2][2]
    document.getElementById('shopitem4').innerHTML = this.inventory[3][0]+" Cost: "+this.inventory[3][2]
    document.getElementById('shopitem5').innerHTML = this.inventory[4][0]+" Cost: "+this.inventory[4][2]
    document.getElementById('shopitem6').innerHTML = this.inventory[5][0]+" Cost: "+this.inventory[5][2]
    document.getElementById('shopitem7').innerHTML = this.inventory[6][0]+" Cost: "+this.inventory[6][2]
    document.getElementById('shopitem8').innerHTML = this.inventory[7][0]+" Cost: "+this.inventory[7][2]
    document.getElementById('shopitem9').innerHTML = this.inventory[8][0]+" Cost: "+this.inventory[8][2]
    document.getElementById('shopitem10').innerHTML = this.inventory[9][0]+" Cost: "+this.inventory[9][2]
  }
  this.closeShop = function(){
    document.getElementById('shopbuybutton').style.visibility = "hidden";
    document.getElementById('shopitem1').innerHTML = ""
    document.getElementById('shopitem2').innerHTML = ""
    document.getElementById('shopitem3').innerHTML = ""
    document.getElementById('shopitem4').innerHTML = ""
    document.getElementById('shopitem5').innerHTML = ""
    document.getElementById('shopitem6').innerHTML = ""
    document.getElementById('shopitem7').innerHTML = ""
    document.getElementById('shopitem8').innerHTML = ""
    document.getElementById('shopitem9').innerHTML = ""
    document.getElementById('shopitem10').innerHTML = ""
  }
  this.buyitem = function(name){
    var canbuy = true;
    for (var i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i][0] == name){
        if(this.inventory[i][3] == true){
          if(User.checkforitem(name) == true){
            alert("You own that already!")
            var canbuy = false;
          }
          else{
          }
        }
        if(this.inventory[i][2] < User.gold+1){
        }
        else{
          alert("You can't afford that.")
          var canbuy = false;
        }
        if(name == "Health Potion"){
          if(canbuy == true){
            User.gold = User.gold - this.inventory[i][2]
            User.hppots++
            alert("You bought a health potion")
            User.statupdate();
          }
        }
        else if(name == "Mana Potion"){
          if(canbuy == true){
            User.gold = User.gold - this.inventory[i][2]
            User.manapots++
            alert("You bought a mana potion")
            User.statupdate();
          }
        }
        else if(canbuy == true){
          User.gold = User.gold - this.inventory[i][2]
          User.additemtoinventory(name)
          User.statupdate();
          alert("You bought "+name+".")
          switch (this.inventory[i][1]) {
            case "Armour": if(User.armour > this.inventory[i][3]){
              User.armour = this.inventory[i][3];
            }
            break;
            case "FirstMap": User.exploration = User.exploration + 5
            break;
            case "AncientMap": User.exploration = User.exploration + 10
            break;
            case "Spell": User.addspelltospellbook(this.inventory[i][4],this.inventory[i][5],this.inventory[i][6]);
            alert("You learn the "+this.inventory[i][4]+" spell!");
            break;
          }
        }
      }
    }
  }
}
