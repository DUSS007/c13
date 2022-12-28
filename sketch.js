var garden,rabbit;
var gardenImg,rabbitImg;

var select_sprites = Math.round(random(1,3));

if(frameCout % 80 == 0) {
  if(select_sprites == 1){
    createAples();
  }
  else if(select_sprites == 2){
    createOrange();
  }
   else if(select_sprites == 3){
    createRed();
   }

}



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);


//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  
}


function createAples(){
  apple = createSprite(random(50,30),40,10,10);
  apple.addimage(appleImg);
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function crateOrange(){
  orangeL = createSprite(random(50,350),40,10,10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.08;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;
}

function createRed(){
  redl =createSprite(random(50,350),40,10,10);
  redL.addImage(redImg);
  redL.scale=0.06;
    redl.velocityY = 3;
    redl.lifetime = 150;
}