var hello1,hello2,hello3,hello4;
var striker, edges;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    helllo1 = createSprite(0,580,360,30);
    hello1.shapeColor = "red";s

    helllo2 = createSprite(295,580,200,30);
    helllo2.shapeColor = "green";

    helllo3 = createSprite(515,580,200,30);
    helllo3.shapeColor = "purple";

    helllo4 = createSprite(740,580,220,30);
    helllo4.shapeColor = "blue";

    striker = createSprite(random(20,750),100, 40,40);
    striker.shapeColor = "white";
    striker.velocityX = 4;
    striker.velocityY = 9;

}

function draw() {
    background(225));
    edges=createEdgeSprites();
    striker.bounceOff(edges);

    if(hello1.isTouching(striker) && striker.bounceOff(hello1)){
        striker.shapeColor = "red";
        music.play();
    }

    if(hello2.isTouching(striker)){
        striker.shapeColor = "green";
        striker.velocityX = 0;
        striker.velocityY = 0;
        music.stop();
    }

    if(hello3.isTouching(striker) && striker.bounceOff(hello3)){
        striker.shapeColor = "purple";
    }

    if(hello4.isTouching(striker) && striker.bounceOff(hello4)){
        striker.shapeColor = "blue";
    }

    drawSprites();
}