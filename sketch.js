var tower,towerImage;
var ghost,ghostImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup
var gameState="play";

function preload(){
  
  towerImage=loadImage("tower.png");
  climberImage=loadImage("climber.png");
  doorImage=loadImage("door.png");
  ghostImage=loadImage("ghost-standing.png");
  

}

function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImage);
  
  doorGroup=new Group();
  
  climberGroup=new Group();
  
}

function draw() {
  background(0);
  
  if(gameState==="play"){
    if(keyDown("left_arrow")){
      ghost.x=ghost.x-3;
    }
    if(keyDown("right_arrow")){
      ghost.x=ghost.x+3;
    }
    if(keyDown("space")){
      ghost.velocityY=-10;
    }
    ghost.velocityY=ghost.velocityY+0.8;
    if(tower.y>400){
      tower.y=300;
    }
    spawnDoors();
    if(climberGroup.isTouching(ghost)){
      ghost.velocityY=0;
      gameState="end";
    }
  
  
  
  drawSprites();
  
  
}
if(gameState==="end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("gameover",230,250);
}
}
function spawnDoors() {
  //write code here to spawn the doors
  if (frameCount % 240 === 0) {
    var door = createSprite(200,-50);
    var climber=createSprite(200,10);
    door.x = Math.round(random(120,400));
    climber.x=door.x;
    door.addImage(doorImage);
    climber.addImage(climberImage);
    door.velocityY = 1;
    climber.velocityY=1;
    
     //assign lifetime to the variable
    door.lifetime = 800;
    climber.lifetime = 800;
    //adjust the depth
    ghost.depth = door.depth;
    ghost.depth = ghost.depth + 1;
    
    //add each cloud to the group
    doorGroup.add(door);
    
  climberGroup.add(climber);
  }
  
}
