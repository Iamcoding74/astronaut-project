var bg,sleep,brush,gym,eat,bath,move;
var astronaut;
function preload(){
bg=loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
eat = loadAnimation("images/eat1.png","images/eat2.png","images/drink1.png","images/drink2.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
move = loadAnimation("images/move.png","images/move1.png","images/move.png","images/move1.png");
}

function setup() {
  createCanvas(600,500);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg);  
  drawSprites();

  textSize(22);
  fill ("white");
  text("Instructions",20,35);
  textSize(18);
  text("Up arrow = Brushing",20,58);
  text("Down arrow = Gyming",20,73);
  text("Left arrow = Eating",20,88);
  text("Right arrow = Bathing",20,103);
  text("m key = Moving",20,118);


  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
    
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y=350;
    astronaut.setVelocity(0,0);
}
if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.x=150;
  astronaut.setVelocity(0.5,0.5);
}
if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.setVelocity(0,0);
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.setVelocity(1,1);
}
}
