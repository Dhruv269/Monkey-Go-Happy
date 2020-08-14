//Global Variables
var monkey, monkey_Running, banana, bananaImg, obstacle, obstacleImg, forest, forestImg;

var obstacleGroup, bananaGroup;

var score;

function preload(){

forestImage=loadImage("jungle.png");  
bananaImage=loadImage("banana.png");  
obstacleImage=loadImage("stone.png");  
monkey_Running =
loadAnimaton("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");    
  
}


function setup() {
 createCanvas(400,400);
monkey = createSprite(50,380,20,20);
monkey.addAnimation("running", monkey_Running);  

forest=createSprite(200, 200, 400, 400);  
forest.addImage(forestImg);
forest.x = forest.width /2;
forest.velocityX = -4;
  
  
  
ground=createSprite(30, 370, 400, 10);  
ground.addImage(groundImg);  
ground.x = ground.width /2;
ground.velocityX = -4;
   
  
}


function draw(){
 background(255); 
  
  
if(obstacleGroup.isTouching(monkey)){  
monkey.scale=0.2;  
}
  
if(bananaGroup.isTouching(monkey)){  
score=score+2;
banana.destroy();

}
  
 switch(score) {
      case 10: monkey.scale=0.12;
              break;
      case 20: monkey.scale=0.14;
              break;
      case 30: monkey.scale=0.16;
              break;
      case 40: monkey.scale=0.18;
              break;
      default: break;
    }  
     
  drawSprites();

stroke("black");
textSize(20);  
fill("black");  
text("Score:"+score, 500, 50);
  
}