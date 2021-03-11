/***********************************************************************************
	Something fun with p5js
	by Tyler Wong

	
------------------------------------------------------------------------------------
	

***********************************************************************************/


var simpleTimer;
var simpleTimer_1;
var waitForClick = true;

var clickMe;

var midX;
var midY;

//random variables
var randRadius;
var randX;
var randY;
var randColor;


//text variables
var txtSize = 60;

var clickToStart;


var pallette = ['#F7D90C', '#D4970B', '#EB8117', '#D43D0B', '#8D0201']; 
 
function preload() {
	clickMe = loadImage('assets/lilme.png');

	intro = "Click me here to begin the wild time!";

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	imageMode(CORNER);
	textAlign(CENTER);

	midX = height/2;
	midY = width/2;

	makeLilMeButton();
}


function makeLilMeButton() {
	clickMe = new Clickable();

	clickMe.image = clickMe;

	clickMe.color = "#00000000";

	clickMe.text = "";

	clickMe.width = clickMe.width;
	clickMe.height = clickMe.height;

	clickMe.locate(midX - clickMe.width/2, midY - clickMe.height/2);

	clickMe.onPress = clickMePressed;
}

clickMePressed = function () {
	
}

createCircles = function () {
	randColor = random(pallette);

	randX = random(0, windowWidth);
	randY = random(0, windowHeight);

	randRadius = random(80, 200);

	ellipse(randX, randY, randRadius, randRadius);
}



