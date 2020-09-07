//Create variables here
var dog,dog_img
var happyDog
var database
var foodS = 0
var food
var feedTime
var addFood
var feed
var lastFed
var input
var play
var name = null
var line
function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(1400, 500);
 
  dog = createSprite(1200,300,20,20)
  dog.addImage(dog_img)
  dog.scale = 0.2
  food = new Food();
  food.getFood();
  
  feed = createButton("Feed The Dog");
  feed.position(650,95);
  feed.mousePressed(()=>
  {
    food.feedDog(foodS)
  })

  addFood = createButton("Add Food");
  addFood.position(850,95)
  addFood.mousePressed(()=>{
    food.addFood(foodS)
  })

  

}


function draw() {  
  
  background(46,139,87)
  var fedTime = database.ref('feedTime');
  fedTime.on("value", (data)=>{
    lastFed = data.val();
  })
  fill("pink");
  textSize(25);
  if(lastFed >= 12){
    text("Last Fed : "+ lastFed % 12 + "Pm", 700,30)
  }
  else if(lastFed === 0)
  {
    text("Last Fed : 12 AM", 700, 30)
  }
  else{
    text("Last Fed : " + lastFed + "AM", 700, 30)
  }
  
  //add styles here
  food.display();
  
  drawSprites();
}



