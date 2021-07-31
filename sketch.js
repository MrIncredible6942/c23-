const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var myEngine, myWorld;
var tower, towerImg;
var ground;
var cannnon;
var backgroundIMG

function preload()
{
    towerImg = loadImage("assets/tower.png");
    backgroundIMG = loadImage("assets/background.gif")
}

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    
    
    tower = new Tower(130, 350,180, 330);
    ground = new Ground(600, height-1, 1200, 1);
    angle = -PI/4
    cannon = new Cannon(180, 110, 100, 50, angle);
}

function draw(){
    background(backgroundIMG);
    Engine.update(myEngine);
    tower.display();
    ground.display();
    cannon.display();
}
