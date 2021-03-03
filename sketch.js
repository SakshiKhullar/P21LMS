var canvas;
var music;

function preload(){
    music1 = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,800);

    //create 4 different surfaces
    surface1 = createSprite(115,590,230,30);
    surface1.shapeColor = "blue";

    surface2 = createSprite(370,590,235,30);
    surface2.shapeColor = "orange";

    surface3 = createSprite(630,590,230,30);
    surface3.shapeColor = "maroon";

    surface4 = createSprite(885,590,230,30);
    surface4.shapeColor = "green";



    //create box sprite and give velocity
    box = createSprite(random(20,750),50,20,20);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);



    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        //change color
        box.shapeColor = "blue";
        music1.play();
        
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        //change color
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY = 0;
        music1.stop();
        

    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        //change color
        box.shapeColor = "maroon";
        music1.play();
        
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        //change color
        box.shapeColor = "green";
        music1.play();
    
    }




    //add condition to check if box touching surface and make it box
    drawSprites();
}
