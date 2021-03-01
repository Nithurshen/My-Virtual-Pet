var dog,sadDog,happyDog;
var addFood, dedFood;
var milk;
var stock = 12;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  milk = new Food();

  dedFood = createButton("Feed the Dog");
  dedFood.position(700, 95);
  dedFood.mousePressed(()=>{
    
    stock = stock - 1;
  
  });

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(()=>{
    
    stock = stock + 1;
    
  });

}

function draw() {
  background(46,139,87);
  milk.display();
  drawSprites();
}


