var tom1, tom2, tom3, backGround ;
var jerry1, jerry2, jerry3 ;
var tom, jerry, background0;


function preload() {
    //load the images her
    tom1=loadImage("images/cat1.png");
    tom2=loadAnimation("images/cat2.png","images/cat3.png");
    tom3=loadImage("images/cat4.png");

    jerry1=loadImage("images/mouse1.png");
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3=loadImage("images/mouse4.png");

    backGround=loadImage("images/garden.png");
}

function setup(){
    createCanvas(500,400);
    //create tom and jerry sprites here
    background0=createSprite(250,200);
    background0.addImage(backGround);
    background0.scale=0.6;

    tom=createSprite(400,350);
    tom.addImage("tomStay",tom1);
    tom.scale=0.1;

    jerry=createSprite(100,350);
    jerry.addImage("jerryStay",jerry1);
    jerry.scale=0.1;

    tom.addImage("tomHappy",tom3);

    jerry.addImage("jerrySad",jerry3);

    tom.setCollider("rectangle",0,0,1000,500);
    jerry.setCollider("rectangle",0,0,1000,500);

    //tom.debug=true; 
    //jerry.debug=true;
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

  if(tom.x - jerry.x < (tom.width - jerry.width)/2){
      tom.velocityX = 0;
      tom.changeAnimation("tomHappy",tom3);
      jerry.changeAnimation("jerrySad",jerry3);
  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("jerryTeasing",jerry2);
    jerry.changeAnimation("jerryTeasing");
    jerry.frameDealy = 25;

    tom.velocityX = -2;
    tom.addAnimation("tomRunning",tom2);
    tom.changeAnimation("tomRunning");
    tom.frameDelay = 25;
}
}
