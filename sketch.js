var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,400);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
}

function draw() {
  background(255,255,255);  
  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  drawSprites();
}