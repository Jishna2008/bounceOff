var movingRect,fixedRect
var edges
 var rect1,rect2
function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(400, 100, 50, 50);
  fixedRect.shapeColor="green"
  fixedRect.debug=true
  movingRect =createSprite(400,300,50,50)
  movingRect.shapeColor="green"
  movingRect.debug=true

   fixedRect.velocityY=4;
  movingRect.velocityY=-4;
  movingRect.setCollider("rectangle",0,0,80,50)
rect1 =createSprite(600, 300, 50, 50);
  rect1.shapeColor="green"
  rect1.debug=true
  rect2 =createSprite(200,300,50,50)
  rect2.shapeColor="green"
  rect2.debug=true
   rect1.velocityX=-4;
  rect2.velocityX=4;
}

function draw() {
  background(255,255,255);  
 var choose =Math.round(random(1,2))
 switch(choose){
   case 1 :bounceOff(fixedRect,movingRect);
   break;
    case 2 :bounceOff(rect1,rect2);
    break;
    default:break;}

   
  drawSprites();
}
function bounceOff(object1,object2){

  if(object2.y-object1.y<object1.height/2+object2.height/2
     &&object1.y-object2.y<object2.height/2+object1.height/2)
  {
     object2.velocityY=object2.velocityY*(-1);
     object1.velocityY=object1.velocityY*(-1);
     }
 
     if(object2.x-object1.x<object1.width/2+object2.width/2
      &&object1.x-object2.x<object2.width/2+object1.width/2)
   {
      object2.velocityX=object2.velocityX*(-1);
      object1.velocityX=object1.velocityX*(-1);
      }
}
//function isTouching(){
//   if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
//     &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
//  {
  
//     movingRect.shapeColor="red"
//    fixedRect.shapeColor="red"}
// else{
//    fixedRect.shapeColor="green"
//   movingRect.shapeColor="green"
//  }
// }