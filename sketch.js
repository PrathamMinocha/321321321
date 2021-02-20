var balloon 
var balloonIMG



function setup() {
  createCanvas(500,500);
balloonIMG = loadImage("sprites/balloon.png")

  balloon = createSprite(400, 200, 20, 20); 
  balloon.addImage(balloonIMG);
  balloon.scale = 0.2;
// MAM MY BACKGROUND IS NOT WORKING PLEASE HELP :)
}


function draw() {
  background(255,255,210);  
  if(keyDown("Right_arrow")){
    balloon.x = balloon.x+5
  }
  if (keyDown("left_arrow")){
    balloon.x = balloon.x-5
  }
  
  if(keyDown("up_arrow")){
    balloon.y = balloon.y-5
    
  }
  if (keyDown("down_arrow")){
    balloon.y = balloon.y+5
    
  }
  drawSprites();
}

function updateHeight(x,y){
database.ref('balloon').set({ 'x': height.x + x , 'y': height.y + y }) 
} 
function readHeight(data){ height = data.val(); balloon.x = height.x; balloon.y = height.y; } 

function showError(){ console.log("Error in writing to the database")}
