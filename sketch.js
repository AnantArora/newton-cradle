const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var wall;
var ball;
var rope1;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
wall = new Wall(400,50,250,20);
ball1 = new Ball(300,400);
ball2 = new Ball(350,400);
ball3 = new Ball(400,400);
ball4 = new Ball(450,400);
ball5 = new Ball(500,400);
rope1 = new Rope(ball1.body,wall.body,-100,0);
rope2 = new Rope(ball2.body,wall.body,-50,0);
rope3 = new Rope(ball3.body,wall.body,0,0)
rope4 = new Rope(ball4.body,wall.body,50,0)
rope5 = new Rope(ball5.body,wall.body,100,0)

}


function draw() {
  Engine.update(engine);
  background("#00ff00");
  wall.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed() {
	if(keyCode === UP_ARROW){
   
		Matter.Body.applyForce(ball1.body,ball1.position, {x: -20, y: -20});
		
	}
}



