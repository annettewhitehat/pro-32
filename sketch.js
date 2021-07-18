const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg = "sunrise1.png";

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(backgroundImg);
    background(bg);
    Engine.update(engine);


}

async function getBackgroundImg(){
    var r = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var rJSON = await r.json();
    var datetime = rJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour>=04 && hour<=06){
        bg = "sunrise1.png"
    }
    else if(hour>=06 && hour<=08){
       bg = "sunrise2.png"
    } 
    else if(hour>=23 && hour<=03){
        bg = "sunset.7.png"
    }else {
        bg = "sunset.12.png"
    }

    backgroundImg = loadImage(bg);
}
