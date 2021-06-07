const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
        if(backgroudImg)
        background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
        fill("black");
        textSize(30);

        if(hour>=12){
            text("Time :"+ hour%12 + "PM",50,100);
        }
        else if(hour===0){
            text("Time : 12 AM",100,100);
        }
        else {
            text("Time : " + hour%12 + "AM",50,100);
        }
}

async function getBackgroundImg(){
    
        var response = await fetch("http://worldclockapi.com/api/json/est/now");
        var responseJSON = await response.json();
        var dateTime = responseJSON.currentDateTime;
        var hour = dateTime.slice(11,13);
        
        if(hour>=4 && hour<=06){
            debugger;
            bg = "sunrise1.png";
            
        }
        else if(hour>=6&&hour<=8){
            debugger;
            bg = "sunrise2.png";
        }
        else if(hour>=8 &&hour<=10){
            debugger;
            bg = "sunrise3.png";
        }
        else if(hour>=10 &&hour<=12){
            debugger;
            bg = "sunrise4.png";
        }
        else if(hour>=12 &&hour<=14){
            debugger;
            bg = "sunrise5.png";
        }
        else if(hour>=14 &&hour<=16){
            debugger;
            bg = "sunrise6.png";
        }
        else if(hour>=16 &&hour<=18){
            debugger;
            bg = "sunset7.png";
        }
        else if(hour>=18 &&hour<=20){
            debugger;
            bg = "sunset8.png";
        }
        else if(hour>=20&&hour<=23){
            debugger;
            bg = "sunset9.png";
        }
        else if(hour>=23 &&hour<=0){
            debugger;
            bg = "sunset10.png";
        }
        else if(hour>=0 &&hour<=3){
            debugger;
            bg = "sunset11.png";
        }
        else{
            debugger;
            bg="sunset12.png";
        }
         backgroundImg = loadImage(bg); 
    
    }
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


