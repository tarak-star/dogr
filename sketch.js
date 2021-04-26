//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
	//load images here
   dogimage=loadImage("dogimg.png");
  doghappyimage=loadImage("dogimg1.png")
}

function setup() {
	createCanvas(500,500);
 // database = firebase.database();
  dog=createSprite(250,250,30,30);
  dog.scale = 0.1
 dog.addImage(dogimage);
 //foodstrock=database.ref('Food');
 //foodstrock.on("value",readStrock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(doghappyimage);
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
   if(x<=0){
     x=0
   }else{
     x=x+1
   }
  databasr.ref('/').update({Food:x})
}
