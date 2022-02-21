var bg, bgImg;
var surfer, surferImg;
var heart, heartImg;
var energy, energyImg;
var coral, coralImg, coralGroup;
var coin, coinImg, coinsGroup;

var score = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
 bgImg = loadImage("assets/bg.webp");
 surferImg = loadImage("assets/surfer.png");
 coinImg = loadImage("assets/coin.png");
 heartImg = loadImage("assets/heart.png");
 energyImg = loadImage("assets/energy.png");
 coralImg = loadImage("assets/coral.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //bg = createSprite(400, 200, 50, 50);
  //bg.addImage(bgImg);
  //bg.scale = 3.75;

  surfer = createSprite(100, 370, 25, 25);
  surfer.addImage(surferImg);
  surfer.scale = 0.3;

  coinsGroup = new Group();
  coralGroup = new Group();
}

function draw() {
  background(bgImg);  
  fill("black");
  textSize(50);
  text("Score: "+ score, width-300,50);
  
  
  
  if (gameState === PLAY) {
    if(keyDown("DOWN_ARROW")){
      surfer.velocityY = 5;
    }
  
    if(keyDown("RIGHT_ARROW")){
      surfer.velocityX = 5;
    }
  
    if(keyDown("UP_ARROW")){
      surfer.velocityY = -5;
    }
    
    if(coinsGroup.isTouching(surfer)){
      coinsGroup.destroyEach();
      score = score+1;
    }
    spawnCoral();
    spawnCoins();
  }

  if(coralGroup.isTouching(surfer)){
    gameState = END;
  }

  else if(gameState === END) {
    surfer.velocityX = 0;
    coralGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    coinsGroup.setLifetimeEach(-1);
    coralGroup.setLifetimeEach(-1);
  }
  
  drawSprites();
}

function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var coin = createSprite(1000,120,40,10);
    coin.y = Math.round(random(400,20));
  //coin.x = Math.round(random(300,50));
    coin.addImage(coinImg);
    coin.scale = 0.25;
    coin.velocityX = -3;
    
  //assign lifetime to the variable
    coin.lifetime = 200;
    
    //add each cloud to the group
    coinsGroup.add(coin);
  }}

  function spawnCoral() {
    //write code here to spawn the clouds
    if (frameCount % 200 === 0) {
      var coral = createSprite(500,200,40,10);
      coral.y = Math.round(random(400,20));
    //coin.x = Math.round(random(300,50));
      coral.addImage(coralImg);
      coral.scale = 0.25;
      coral.velocityX = -3;
      
    //assign lifetime to the variable
      coral.lifetime = 200;
      
      //add each cloud to the group
      coralGroup.add(coral);
    }}


    