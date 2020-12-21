const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myWorld,myEngine,ground;
var box1,box2;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  myEngine=Engine.create()
  myWorld=myEngine.world;
  var groundOptions={
isStatic:true

  }
  
  var ballOptions={
    restitution:1
  }
ground=Bodies.rectangle(200,390,400,5,groundOptions)

World.add(myWorld,ground)

console.log(ground)
box1=new box(200,300,50,50)
box2=new box(220,220,50,100)
}

function draw() {
  background(255,255,255); 
  Engine.update(myEngine)
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,5)

  box1.display()
 box2.display()
}