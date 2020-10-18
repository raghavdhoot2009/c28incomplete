
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var man,stones,trees,sling;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	man = new boy(100,650);
	stones = new stone(150,600);
	trees= new tree(600,650);
    sling = new Chain(boy.Body,{x:150,y:550});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  man.display();
  stones.display();
  trees.display();
  sling.display();

  drawSprites();
 
}



