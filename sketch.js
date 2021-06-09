const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1;
var rubber;
var Iron1



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    stone1= new Stone(810,160,20,20);
    rubber1= new Rubber(650,160,50,50);

    Iron1= new Iron(550,160,50,50);


  


}

function draw(){
    background("brown");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    rubber1.display();
    Iron1.display();

    
 
}