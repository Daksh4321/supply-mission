const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  createCanvas(800,400);
  var balloption = {
    isStatic: false,
    restitution: 1
  }

  var groundoption = {
    isStatic: true,

  }


  engine = Engine.create()
  world = engine.world
  box1 = new Box(400,100,50,50)
  box2 = new Box(420,50,50,100)  
  ground = Bodies.rectangle(400,380,800,20, groundoption)
  World.add(world,ground)
}

function draw() {
  Engine.update(engine)
  background("black");  
  rectMode(CENTER) 
  box1.display()
  box2.display()

  rect(ground.position.x,ground.position.y,800,20)
}