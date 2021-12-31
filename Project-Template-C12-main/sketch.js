var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg,win,win2;
var appleGroup;
var score = 0;
var yummy;
var blue;
var appleEaten = 0; 
var appleLeft = 10; 
var Goal = 10;

function preload(){
  gardenImg = loadImage("background.jpg");
  rabbitImg = loadImage("bunny.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  yummyImg = loadImage("yummyy.png")
  blueImg = loadImage("blue.png")
  win2Img = loadImage("win.jpg")
  winImg = loadImage("youwin.png")
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.scale = 1.03


//creating boy running
rabbit = createSprite(160,322,20,20);
box = createSprite(160,372,30,45);
box.visible = false;
rabbit.scale =0.3;
rabbit.addImage(rabbitImg);

blue = createSprite(52,6)
blue.scale=0.8
blue.addImage(blueImg)
 
win = createSprite(200,180)
win.addImage(winImg)
win.visible = false
win.scale = 0.3

win2 = createSprite(200,320)
win2.addImage(win2Img)
win2.visible = false
win2.scale=0.4
appleGroup= new Group();
}

function draw() {
  background(0);

 // if(rabbit.isTouching(appleGroup)){
  //  score+=10;
// }
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  box.x = rabbit.x
  //box.y = rabbit.y
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  box.collide(edges)
  box.collide(appleGroup,appleHit)
  
   drawSprites();
  textSize(14)
 text("Score: "+score+"\nGoal: eat "+Goal+" apples"+"\nApples eaten: "+appleEaten+"\nApples to eat: "+appleLeft,4,17)

  
 
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

 var select_sprites = Math.round(random(1,3));




  
   if (frameCount % 50 == 0 && score != 100) {
    if (select_sprites == 1) {
       createApples();
    } else if (select_sprites == 2) {
      createOrange();
     }else {
       createRed();
     }
   }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }
if(score == 100){

  win.visible = true
  win2.visible = true 
  rabbit.visible = false 
  garden.visible = false
  
}


}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
//score+=5;
appleGroup.add(apple)


  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}


function appleHit(box,apple){
apple.remove()
score+=10;
yummy = createSprite(200,80);
yummy.scale = 0.5
yummy.addImage(yummyImg)
yummy.lifetime=35;
appleEaten+=1;
appleLeft = 10-appleEaten
 

}