
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
}

 
function draw() {
  background("white");  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,200,50);

  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,200,50);
  
  
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
   } 
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
            
  monkey.collide(ground);
  
  
  food();
  stone();
  
  
  
  
  
  
  drawSprites();
}


function food(){
  if (frameCount % 80 === 0) {
  banana = createSprite( 200,330,340,40);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1; 
  banana.velocityX = -4;
  banana.lifetime = 60;
  FoodGroup.add(banana);
  }
}

function stone(){
 if (frameCount % 80 === 0) {
    obstacle = createSprite(350,330,330,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -4;
  obstacle.lifetime = 70;
    obstacleGroup.add(obstacle);
     
}
    
}