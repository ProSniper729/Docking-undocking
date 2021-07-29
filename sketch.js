
var hasDocked = false;
function preload(){
  bg = loadImage("spacebg.jpg")
  craftImg = loadImage("spacecraft1.png")
  craftImg2 = loadImage("spacecraft2.png")
  craftImg3 = loadImage("spacecraft3.png")
  craftImg4 = loadImage("spacecraft4.png")
  issImg = loadImage("iss.png")
}


function setup() {
  createCanvas(800,400);
  craft = createSprite(400, 350, 50, 50);
  craft.addImage(craftImg);
  craft.scale = 0.3

  iss = createSprite(400, 150 , 50 , 50);
  iss.addImage(issImg);
  iss.scale = 0.8

  point = createSprite(350,180,20,20);
  point.visible = false;
  
}

function draw() {
  background(bg);

  if(!hasDocked){

    if(keyDown("LEFT_ARROW")){
      craft.x-=1;
      craft.addImage(craftImg3);

    }

    if(keyDown("RIGHT_ARROW")){
      craft.x+=1;
      craft.addImage(craftImg4);

    }

    if(keyDown("UP_ARROW")){
      craft.y-=1;
      craft.addImage(craftImg2);

    }

    if(keyDown("DOWN_ARROW")){
      craft.y+=1;
      craft.addImage(craftImg2);

    }

    if(craft.isTouching(point)){
      fill("white");
      textSize(20);
      text("Docking Successful!",50,100);
      


    }

    


    
      


  drawSprites();
  
  
  
  
  
  }
}
