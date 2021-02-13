var ball;
var database;
var myBall,position;
var backgroundImg;
var ballonImg;
function preload(){
    backgroundImg = loadImage("Hot Air Ballon-01.png")
    ballonImg = loadImage("Hot Air Ballon-02.png")
}
function setup(){
    createCanvas(1350,650);
    
database = firebase.database();
    
    myBall = createSprite(250,250,50,50);
    myBall.shapeColor = "red";
    myBall.addImage(ballonImg);
    myBall.scale = 0.7

var myBallPosition = database.ref('ball/position');
myBallPosition.on("value",readPosition,ShowError)

}

function draw(){
    
    background(backgroundImg);
    text("**Use Arrow Keys to Move the ballon !",50,50 )
    textSize(3)
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function ShowError(){
    console.log("error");

}
function readPosition(data){
position = data.val();
console.log(position.x,position.y);
myBall.x = position.x
myBall.y = position.y
}
function writePosition(x,y){
database.ref('ball/position').set({
    'x': position.x + x,
    'y': position.y + y
})
}