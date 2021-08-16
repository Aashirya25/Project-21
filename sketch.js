
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var btn,btn2
var ground,wall_1,wall_2
var top,side,side2,winwall
var win, winImg
var obstacle, obstacle2

function preload(){
	winImg = loadImage("win2.png")
}

function setup() {
	createCanvas(1270,570);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	win = createSprite(700,50,20,20)
	win.addImage(winImg)
	win.visible = true

	//Create the Bodies Here.
	wall_1 = new Ground(800,500,20,100);
	wall_2 = new Ground(950,500,20,100);
	ground =new Ground(640,550,1280,20);
	top = new Ground(400,40,1200,20)
	side = new Ground(1270,400,20,900);
	side2 = new Ground(5,400,20,900);
	winwall = new Ground(880,550,150,20)
	obstacle = new Ground(400,510,150,70)
	obstacle2 = new Ground(600,470,50,140)

	btn = createImg('throw.png')
	btn.position(200,30)
	btn.size(50,50);
	btn.mouseClicked(force);

	btn = createImg('back.png')
	btn.position(270,30)
	btn.size(50,50);
	btn.mouseClicked(force2);

	var ball_option = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	  }
	   
	ball = Bodies.circle(200,100,15,ball_option)
	World.add(world,ball)
}


function draw() {

/*	if(winwall.istouching(ball)){
		win.visible = true
	}
*/

  Engine.update(engine);
  rectMode(CENTER);
  background(204,153,225);
  
  ground.display();
  wall_1.display();
  wall_2.display();
  obstacle.display();
  obstacle2.display();


  ellipse(ball.position.x,ball.position.y,15)

  drawSprites();
text("Watch out for the obstacles use the arrows to move :)",550,100)
}

function force(){
	Matter.Body.applyForce(ball,{x:0, y:0},{x:6, y:-5})
  }
  
function force2(){
	Matter.Body.applyForce(ball,{x:0, y:0},{x:-6, y:-5})
  }
  

