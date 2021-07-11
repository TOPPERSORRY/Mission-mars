var player,playerImage;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy1Image,enemy2Iamge,enemy3Image,enemy4Image,enemy5Image,enemy6Image;
var bg,bgImage;
var bulletImage,bullet;
var enemyGroup,bulletGroup;
var gameState = "play";
var bullet;
var score = 0;
var invisible,sound1;
var gameOver,gameOverImage;
var congo,congoImage,congoSound;
function preload(){
  playerImage = loadImage("Images/craft.png")
 bgImage = loadImage("Images/bg.jpg")
 enemy1Image= loadImage("Images/enemy1.png")
 enemy2Image= loadImage("Images/enemy2.png")
 enemy3Image= loadImage("Images/enemy3.png")
 enemy4Image= loadImage("Images/enemy4.png")
 enemy5Image= loadImage("Images/enemy5.png")
 enemy6Image= loadImage("Images/enemy6.png")
 bulletImage = loadImage("Images/bullet.png")
 gameOverImage = loadImage("Images/gameover.png")
sound1 = loadSound("Images/sound1.wav")
congoImage = loadImage("Images/congo.png")
congoSound = loadSound("Images/congoSound.wav")
}
function setup() {
  createCanvas(800,500);
  player = createSprite(400,400, 50, 50);
  player.addImage(playerImage);
  player.scale = 0.2;
enemyGroup = new Group();
bulletGroup = new Group();

}

function draw() {
  background(bgImage);
  fill ("red")
  textSize(40)
   text ("SCORE : "+ score,550,50)
  if(gameState === "play"){
    
   
    invisible = createSprite(400,490,800,10);
    invisible.visible = false
  
    if(keyWentDown("UP_ARROW")){
      bullet = createSprite(player.x,player.y,20,20)
      bullet.addImage(bulletImage);
      bullet.scale = 0.1;
      bullet.velocityY = -5;
      bulletGroup.add(bullet);
    
    }
   if(bulletGroup.isTouching(enemyGroup)){
     enemyGroup.destroyEach();
     bulletGroup.destroyEach();
     score = score + 10;
     sound1.play();
   }
    player.x = World.mouseX;
    spawnEnemies();
    if(enemyGroup.isTouching(invisible)){
      gameState = "end";
      sound1.play();
      }
  }
 
 if(gameState === "end"){
   gameOver = createSprite(350,250,6,6)
   gameOver.addImage(gameOverImage)
   gameOver.scale = 2;
   enemyGroup.destroyEach();
   fill("blue")
   textSize(50)
   text("MISSION MARS FAILED",130,150);
 }
  
 if(score >=200){
gameState = "win"
  
 }
 if(gameState === "win"){
   congo = createSprite(350,150,6,6)
   congo.addImage(congoImage)
   congo.scale = 1.5; 
   enemyGroup.destroyEach();
   textSize()
   text("MISSION MARS SUCCESSFUL",130,300)
  // congoSound.play();
 }
  drawSprites();
}
function spawnEnemies(){
  if(frameCount %30 === 0){
    var enemy = createSprite(random(0,800),random(-10,100))
    var ran = Math.round(random(1,6))
switch (ran){
  case 1: enemy.addImage(enemy1Image)
  enemy.velocityY = 4;
  break;
  case 2: enemy.addImage(enemy2Image)
  enemy.velocityY = 4;
  break;
  case 3: enemy.addImage(enemy3Image)
  enemy.velocityY = 4;
  break;
  case 4: enemy.addImage(enemy4Image)
  enemy.velocityY = 4;
  break;
  case 5: enemy.addImage(enemy5Image)
  enemy.velocityY = 4;
  break;
  case 6: enemy.addImage(enemy6Image)
  enemy.velocityY = 4;
  break;
  
  default:break;
 
}
enemyGroup.add(enemy)  
enemyGroup.depth = bulletGroup.depth
  }
}