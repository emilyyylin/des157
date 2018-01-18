//Lin, Emily | DES157 W18
console.log("this is script.js comment");

var directionX=1, directionY=0;
var x=20, y=20, speed=1;

function setup(){
  var myCanvas = createCanvas(800,250);
  myCanvas.parent('mySketch');
  //background(255,1);
  noStroke();
}

function draw(){
  if (mouseIsPressed){
    fill(0,198,198,50);
  } else {
    //fill(247,202,201,50);\
    fill(255,50);
  }
  ellipse(mouseX,mouseY,50,50);
}
/*
function draw(){
  x=x+speed*directionX;
  y=y+speed*directionY;
  var xc = constrain(directionX,0,800);
  var yc = constrain(directionY,0,250);
  ellipse(x,y,10,10);
  fill(0,198,198,50);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
      directionX=-1;
      directionY=0;
    } else if (keyCode === RIGHT_ARROW){
        directionX=1;
        directionY=0;
    } else if (keyCode === UP_ARROW){
        directionY=-1;
        directionX=0;
    } else if (keyCode === DOWN_ARROW){
       directionY=1;
       directionX=0;
    }

}
*/
