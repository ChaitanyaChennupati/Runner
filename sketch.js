var pathImg, invisibleLeft, invisibleRight;
var boy, boyImg, edges;

function preload(){
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  boy=createSprite(200,200);
  boy.addAnimation("Runner-1.png",boyImg);
  boy.y=200;
  boy.scale=0.1;

  invisibleLeft=createSprite(1,190,20,500);
  invisibleLeft.visible=false;
  invisibleRight=createSprite(400,190,20,500);
  invisibleRight.visible=false;
  
  edges=createEdgeSprites();
}

function draw() {
  background("gray");
  boy.x=mouseX
  if(path.y>400){
    path.y=height/2
  }
  boy.collide(invisibleLeft);
  boy.collide(invisibleRight);
  drawSprites();

}
