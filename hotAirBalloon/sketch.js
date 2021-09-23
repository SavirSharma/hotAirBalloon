//variables
var balloon;
var balloonImg;
var bottomGround;
var top;
var background;
var backgroundImg;

function preload(){
    //preload
    backgroundImg=loadImage("images/background.jpeg");
    balloonImg=loadAnimation("images/balloon1.png","images/balloon2.png","images/balloon3.png");

}
function setup(){
    //setup
    createCanvas(500,500);
    background=createSprite(250,250,10,10);
    bottomGround=createSprite(250,495,500,5);
    top=createSprite(250,5,500,5);
    bottomGround.visible=false;
    top.visible=false;
    balloon=createSprite(250,250,5,5);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale=0.2;
    background.addImage(backgroundImg);

    
}
function draw(){
    //movement
    if(keyDown("space")){
        balloon.velocityY=-4;
    }
    balloon.velocityY+=0.8;
    balloon.collide(bottomGround);


    drawSprites();
}