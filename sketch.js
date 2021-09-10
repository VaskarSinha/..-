
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1280, 605);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new ground(width/2,670,width,20);
	leftSide=new ground(1100,600,20,120);
	rightSide=new ground(900,600,20,120);
	ball=Bodies.circle(200,200,20,ball_options);
    var ball_options ={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:0.2	
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){}
}


