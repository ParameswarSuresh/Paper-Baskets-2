
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall, wallz, walla;
var ball;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	wall = new Wall(width/2+200, 635, 200, 20);
	wallz = new Wall(width/2+298, 545, 20, 200);
	walla = new Wall(width/2+93, 545, 20, 200);
	ball = new Ball(300, 300);
	ground = new Ground(width/2, 648, 3000, 10);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  wall.display();
  wallz.display();
  walla.display();
  ball.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85, y:-126});
	}
}


