var fixedRect;
var movingRect;
var gameObj1, gameObj2, gameObj3, gameObj4;

function setup() {
  createCanvas(800,800);
 
  fixedRect = createSprite(400,200,50,80);
  fixedRect.shapeColor = "black";
  fixedRect.debug = true;

  movingRect = createSprite(200,100,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1 = createSprite(300,200,50,50);
  gameObj1.shapeColor = "pink";
  gameObj1.debug = true;

  gameObj2 = createSprite(500,600,50,50);
  gameObj2.shapeColor = "purple";
  gameObj2.debug = true;

  gameObj3 = createSprite(600,700,50,50);
  gameObj3.shapeColor = "cyan";
  gameObj3.debug = true;

  gameObj4 = createSprite(100,400,50,50);
  gameObj4.shapeColor ="orange";
  gameObj4.debug = true;

}


function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  isTouching(gameObj2, movingRect);

  drawSprites();
} 

//object1 is moving rect and object 2 is fixedrect
function isTouching(object1, object2){
 if(object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y < object2.height/2 + object1.height/2 
  && object2.y - object1.y < object2.height/2 + object1.height/2)
  {

   object1.shapeColor = "red";
   object2.shapeColor = "red";
 }else{
   object1.shapeColor = "green";
   object2.shapeColor = "green";
 }
}