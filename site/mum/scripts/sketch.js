var fancy, plain, textpoints = [], allpoints = [], frame = 0, n = 0, heart = false, s = 0;
var message = ["I just wanted...","...to say...","...thank you!","You are the best...","...mum I could have.","And I love you...","...more than...","...I can put...","...into these words.","So here is...","...a giant heart...","...to say thank you...","..instead!"]
function preload() {
  plain = loadFont("fonts/Quicksand-Regular.otf")
  fancy = loadFont("fonts/AlexBrush-Regular.ttf")
}

function setup() {
  createCanvas(1240,720);
  background(51);
  var string  = message[0]
  textpoints  = textParse(string, 50, 400)
  giveTargets()
}

function draw() {
  frame++
  background(51);
  drawText();
  drawPoints();
  drawHeart()
  if (frame % 400 == 0) {
    n++
    if (n < message.length) {
      var string  = message[n]
      textpoints  = textParse(string, 50, 400)
      giveTargets()
    } else if (n == message.length) {
      flee()
      heart = true;
    } else if (n == message.length + 1){
      var string = message[0]
      textpoints = textParse(string, 50, 400)
      heart = false;
      giveTargets()
    } else {
      n = 0
    }
  }
}

var drawText = function() {
  textFont(fancy);
  textSize(60);
  fill(255);
  noStroke();
  text("Happy Mother's Day!", 30, 70);
  textFont(fancy);
  textSize(45);
  fill(255);
  noStroke();
  text("Lots of Love from Dylan", 830, 670);
}

var drawPoints = function() {
  for (var i = 0; i < allpoints.length; i++) {
    allpoints[i].update()
    allpoints[i].show()
  }
}

var giveTargets = function() {
  var x, y;
  var init = allpoints.length == 0
  var l = allpoints.length
  for (var i = 0; i < textpoints.length; i++) {
    var p = textpoints[i]
    if (i < allpoints.length) {
      allpoints[i].target.x = p.x
      allpoints[i].target.y = p.y
    } else {
      if (init) { x = Math.random()*1240; y = Math.random()*720 } else {
        x = allpoints[l-1-(i-l)].x
        y = allpoints[l-1-(i-l)].y
      }
      allpoints.push(new TextPoint(x,y,p.x,p.y))
    }
  }
  if (allpoints.length > textpoints.length) {
    for (var i = textpoints.length; i < allpoints.length; i++) {
      var n = textpoints.length-(i-textpoints.length)
      if (n < 0) {n += textpoints.length+1}
      allpoints[i].target.x = allpoints[n].target.x
      allpoints[i].target.y = allpoints[n].target.y
    }
  }
  for (var i = 0; i < allpoints.length; i++) {
    allpoints[i].ddx += ((Math.random()*2)-1)*15
    allpoints[i].ddy += ((Math.random()*2)-1)*15
  }
}

var flee = function() {
  for (var i = 0; i < allpoints.length; i++) {
    var p = allpoints[i]
    if (Math.random() > 0.5) {
      p.target.x = Math.random()*1240 + 1240
    } else {
      p.target.x = -Math.random()*1240
    }
    if (Math.random() > 0.5) {
      p.target.y = Math.random()*720 + 720
    } else {
      p.target.y = -Math.random()*720
    }
  }
}

var drawHeart = function() {
  var x = 620
  var y = 260
  var w = 400
  var h = 300
  var n1 = 100
  var n2 = 90
  var n3 = 270
  s += 0.002
  if (heart) {
    w *= s; h *= s; n1 *= s; n2 *= s; n3 *= s
    noFill()
    beginShape()
    vertex(x,y)
    quadraticVertex(x-n1,y-n1,x-w/2,y)
    quadraticVertex(x-n3,y+n2,x,y+h)
    quadraticVertex(x+n3,y+n2,x+w/2,y)
    quadraticVertex(x+n1,y-n1,x,y)
    endShape()
  } else {
    s = 0
  }
}


var textParse = function(string, x, y) {
  textFont(plain);
  textSize(120);
  var points  = []
  var words   = string.split(' ')
  for (var i = 0; i < words.length; i++) {
    var word        = words[i]
    var wordbox     = plain.textBounds(word,x,y)
    var wordpoints  = plain.textToPoints(word,x,y)
    points = points.concat(wordpoints)
    x += wordbox.w+50
  }
  return points
}

var TextPoint = function(x,y,tx,ty) {
  this.speed = 5
  this.maxaccel = 2
  this.accel = 0.02
  this.x = x
  this.y = y
  this.dx = 0
  this.dy = 0
  this.ddx = 0
  this.ddy = 0
  this.target = {x:tx,y:ty}
  this.show = function() {
    stroke(255);
    strokeWeight(3);
    point(this.x,this.y)
  }
  this.update = function() {
    this.seek()
    this.avoid()
    this.dx += this.ddx
    this.dy += this.ddy
    this.x += this.dx
    this.y += this.dy
    this.ddx = 0
    this.ddy = 0
  }
  this.seek = function() {
    var dx = (this.target.x - this.x)
    var dy = (this.target.y - this.y)
    var v = Math.sqrt((dx*dx)+(dy*dy))
    if (v > this.speed) {
      dx *= this.speed/v
      dy *= this.speed/v
    }
    var ddx = dx - this.dx
    var ddy = dy - this.dy
    var a = Math.sqrt((ddx*ddx)+(ddy*ddy))
    if (a > this.maxaccel) {
      ddx *= a/this.maxaccel
      ddy *= a/this.maxaccel
    }
    ddx *= this.accel
    ddy *= this.accel
    this.ddx += ddx
    this.ddy += ddy
  }
  this.avoid = function() {
    var dx = mouseX - this.x
    var dy = mouseY - this.y
    var d = Math.sqrt((dx*dx)+(dy*dy))
    if (d < 70) {
      this.ddx -= dx/15
      this.ddy -= dy/15
    }
  }
}
