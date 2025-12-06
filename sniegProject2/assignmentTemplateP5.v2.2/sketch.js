let gui;
let aRoll;
let bRoll;
let aXMovement=0;
let bXMovement=0;
let aYMovement=0;
let bYMovement=0;
let aPosX;
let aPosY;
let aRolling = false;
let bRolling = false;
let aRollTime = 0;
let bRollTime = 0;
let aTransition = 0;
let bTransition = 0;
let aLast = 0;
let bLast = 0;
let aCurrent = 0;
let bCurrent = 0;
let aCanRoll = true;
let bCanRoll = true;
function setup(){
  createCanvas(500, 500);
                       
  gui = createGui();
  let aStyle = {
    fillBg: color("#D02020"), 
    fillBgHover: color("#F02020"), 
  };
  let bStyle = {
    fillBg: color("#2020B0"), 
    fillBgHover: color("#2020D0"), 
  };
  gui.setRounding(0);
  aRoll = createButton("Roll", 0, 420, 250, 80);
  bRoll = createButton("Roll", 250, 420, 250, 80);
  aRoll.setStyle(aStyle);
  bRoll.setStyle(bStyle);
}

function draw(){
  background(200);
  drawGui();
  stroke(1);
  fill("#A04040");
  square(1,1,50);
  fill("#4040A0");
  square(449,1,50);
  fill(0);
  dieFace(1,1,50, aLast);
  dieFace(449,1,50, bLast);
 

  if(aRoll.isPressed) {
    if (aCanRoll) {
      print("Player A is rolling.");
      aRolling = true;
      aCanRoll = false;
      aYMovement=random(-8,8);
      aXMovement=random(-8,8);
      aPosX=10;
      aPosY=random(0,377);
      square(aPosX, aPosY, 40);
      aRollTime = round((abs(aXMovement + aYMovement)/2) + 8) * 30;
    }
    
  }
  if (aRollTime == 1) {
    aRollTime = 0;
    aRolling = false;
    aTransition = 200;

    
  } else {aRollTime-=1;}
  
  if(aTransition >= 2) {
    fill("#A04040");
    square(aPosX, aPosY, 40);
    dieFace(aPosX, aPosY, 40, aCurrent);
    aTransition -= 1;
  } else if (aTransition == 1) {
    aCanRoll = true;
    aLast = aCurrent;
    aTransition = 0;
  }
  
  if(bRoll.isPressed) {
    if (bCanRoll) {
      print("Player B is rolling.");
      bRolling = true;
      bCanRoll = false;
      bYMovement=random(-8,8);
      bXMovement=random(-8,8);
      bPosX=460;
      bPosY=random(0,377);
      square(bPosX, bPosY, 40);
      bRollTime = round((abs(bXMovement + bYMovement)/2) + 8) * 30;
    }
    
  }
  if (bRollTime == 1) {
    bRollTime = 0;
    bRolling = false;
    bTransition = 200;

    
  } else {bRollTime -= 1;}
  
  if(bTransition >= 2) {
    fill("#4040A0");
    square(bPosX, bPosY, 40);
    dieFace(bPosX, bPosY, 40, bCurrent);
    bTransition -= 1;
  } else if (bTransition == 1) {
    bCanRoll = true;
    bLast = bCurrent;
    bTransition = 0;
  }
  
  if (aRolling) {
    fill("#A04040");
    stroke("#D02020")
    aCurrent = floor(random(1,7));
    if (aXMovement <= 0) {
      for (i = 0;i>aXMovement;i--){
        aPosX -= 1;
      }
    } else {
      for (i = 0;i<aXMovement;i++){
        aPosX += 1;
      }
    }
    if (aYMovement <= 0) {
      for (i = 0;i>aYMovement;i--){
        aPosY -= 1;  
      }
    } else {
      for (i = 0;i<aYMovement;i++){
        aPosY += 1;
      }
    }
    aCheckPos();
    square(aPosX, aPosY, 40);
    dieFace(aPosX, aPosY, 40, aCurrent);
  }
  if (bRolling) {
    fill("#4040A0");
    stroke("#2020B0");
    bCurrent = floor(random(1,7));
    if (bXMovement <= 0) {
      for (i = 0;i>bXMovement;i--){
        bPosX -= 1;
      }
    } else {
      for (i = 0;i<bXMovement;i++){
        bPosX += 1;
      }
    }
    if (bYMovement <= 0) {
      for (i = 0;i>bYMovement;i--){
        bPosY -= 1;  
      }
    } else {
      for (i = 0;i<bYMovement;i++){
        bPosY += 1;
      }
    }
    bCheckPos();
    square(bPosX, bPosY, 40);
    dieFace(bPosX, bPosY, 40, bCurrent);
  }
}
function aCheckPos() {
  if (aPosX >=460) {
    if (aXMovement <= 0) {aXMovement = abs(aXMovement)} else {
      aXMovement = 0 - aXMovement;
    }
  }
  if (aPosX <= 0) {
    if (aXMovement <= 0) {aXMovement = abs(aXMovement)} else {
      aXMovement = 0 - aXMovement;
    }
  }
  if (aPosY >= 377) {
    if (aYMovement <= 0) {aYMovement = abs(aYMovement)} else {
      aYMovement = 0 - aYMovement;
    }
  }
  if (aPosY <= 0) {
    if (aYMovement <= 0) {aYMovement = abs(aYMovement)} else {
      aYMovement = 0 - aYMovement;
    }
  }
}
function bCheckPos() {
  if (bPosX >=460) {
    if (bXMovement <= 0) {bXMovement = abs(bXMovement)} else {
      bXMovement = 0 - bXMovement;
    }
  }
  if (bPosX <= 0) {
    if (bXMovement <= 0) {bXMovement = abs(bXMovement)} else {
      bXMovement = 0 - bXMovement;
    }
  }
  if (bPosY >= 377) {
    if (bYMovement <= 0) {bYMovement = abs(bYMovement)} else {
      bYMovement = 0 - bYMovement;
    }
  }
  if (bPosY <= 0) {
    if (bYMovement <= 0) {bYMovement = abs(bYMovement)} else {
      bYMovement = 0 - bYMovement;
    }
  }
}
function dieFace(xLoc,yLoc,size,pips) {
  xLoc += (size/2);
  yLoc += (size/2);
  noStroke();
  fill(30);
  if (pips == 1) {
    ellipse(xLoc, yLoc, 1/4*size);
  }
  if (pips == 2) {
    ellipse(xLoc - size/4, yLoc - size/4, 1/4*size);
    ellipse(xLoc + size/4, yLoc + size/4, 1/4*size);
  }
  if (pips == 3) {
    ellipse(xLoc - size/4, yLoc - size/4, 1/4*size);
    ellipse(xLoc, yLoc, 1/4*size);
    ellipse(xLoc + size/4, yLoc + size/4, 1/4*size);
  }
  if (pips == 4) {
    ellipse(xLoc - size/4, yLoc - size/4, 1/4*size);
    ellipse(xLoc + size/4, yLoc + size/4, 1/4*size);
    ellipse(xLoc + size/4, yLoc - size/4, 1/4*size);
    ellipse(xLoc - size/4, yLoc + size/4, 1/4*size);
  }
  if (pips == 5) {
    ellipse(xLoc - size/4, yLoc - size/4, 1/4*size);
    ellipse(xLoc + size/4, yLoc + size/4, 1/4*size);
    ellipse(xLoc + size/4, yLoc - size/4, 1/4*size);
    ellipse(xLoc - size/4, yLoc + size/4, 1/4*size);
    ellipse(xLoc, yLoc, 1/4*size);
  }
  if (pips == 6) {
    ellipse(xLoc - size/4, yLoc - size/4, 1/4*size);
    ellipse(xLoc + size/4, yLoc + size/4, 1/4*size);
    ellipse(xLoc + size/4, yLoc - size/4, 1/4*size);
    ellipse(xLoc - size/4, yLoc + size/4, 1/4*size);
    ellipse(xLoc + size/4, yLoc, 1/4*size);
    ellipse(xLoc - size/4, yLoc, 1/4*size);
  }
  stroke(1);
}