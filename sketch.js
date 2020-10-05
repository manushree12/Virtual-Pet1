//Create variables here
var dog;
var dog_img, happyDog_img;
var database, foodStock;

function preload() {
  dog_img = loadImage('images/dogImg.png');
  happyDog_img = loadImage('images/dogImg1.png');
}

function setup() {
	canvas = createCanvas(500, 500);
  
  dog = createSprite(280, 330, 40, 80);
  dog.addImage('dog image', dog_img);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  }


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  text("Press UP_ARROW key to feed the dog milk");
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
  }

function writeStock(x){
  if(x<=0){
    x = 0
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food: x
  })
}

