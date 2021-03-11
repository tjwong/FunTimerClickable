/***********************************************************************************
	Something fun with p5js
	by Tyler Wong
	
	This is a fun little program that plays with using a timer and a clickable
	picture to create a bunch of chaotic circles
	
------------------------------------------------------------------------------------
	How it works:

	A clickable picture is placed in the middle of the screen with text directing you to 
	click it. After clicking it, chaos ensues and it uses a timer to count down and stop
	the random circle generation.

***********************************************************************************/


// Initiating timer and clickable button boolean
var simpleTimer;
var waitForClick = true;

// ClickMe is the clickable button picture of me 
var clickMe;

// Photo of me 
var littleMe;

// Variables for middle of height and width
var midX;
var midY;

//random variables for the circles
var randRadius;
var randX;
var randY;
var randColor;

//text variables
var txtSize = 60;
var intro;

//random colors pallettes
var pallette = ['#F7D90C', '#D4970B', '#EB8117', '#D43D0B', '#8D0201']; 
 
// preload function
function preload() {
	// Loading picture of baby Tyler
	littleMe = loadImage('assets/lilme.png');

	// Intro text
	intro = "Click baby me below to begin the wild time!";
}

// Setup function
function setup() {
	createCanvas(windowWidth, windowHeight);
	
	imageMode(CORNER);
	textAlign(CENTER);

	midX = windowWidth/2;
	midY = windowHeight/2;


	// Creating the button
	makeLilMeButton();

	// Setting up the intro background and text
	background('#FFE596');
	fill('#8D0201');
	textSize(50);		
	text(intro, midX, midY - 70);
}

// Draw function
function draw() {

	fill('#8D0201');	
	if(waitForClick){
		//Three dots waiting
		ellipse(midX - 70, midY - 20, 50, 50);
		ellipse(midX, midY - 20, 50, 50);
		ellipse(midX + 70, midY - 20, 50, 50);
	} else {
		updateTimer();
	}

	// Drawing the cilckable button
	clickMe.draw();
}

// If timer is expired, print "Chaos will ensue"; else update the timer and make circles
function updateTimer() {

	if( simpleTimer.expired() ) {
		print("timer is expired");
		fill(255);
		textSize(100);
		text("CHAOS WILL ENSUE", midX, midY - 150);
	} else {
		createCircles();
		fill('#8D0201');
		ellipse(midX, midY - 50, 150, 150);
		fill(255);
		textSize(100);
		text(Math.round(simpleTimer.getRemainingTime()/1000), midX, midY - 50);
	}
}

// Function that creates the clickable button of me 
function makeLilMeButton() {
	clickMe = new Clickable();

	// Sets the image
	clickMe.image = littleMe;

	// Sets the background color
	clickMe.color = "#00000000";

	// Sets the boarder stroke of the button
	clickMe.strokeWeight = 0;

	// Sets text to empty string
	clickMe.text = "";

	// Sets the button width/height to the width/height of the image
	clickMe.width = littleMe.width;
	clickMe.height = littleMe.height;

	// Places the button at the middle on the bottom of the page
	clickMe.locate(midX - clickMe.width/2, height - clickMe.height);

	// Sets the function for what happens when pressed
	clickMe.onPress = clickMePressed;
}

// Function that sets click wait to false, and creates a new timer and starts the circle creation
clickMePressed = function () {
	waitForClick = false;
	simpleTimer = new Timer(10000);
	createCircles()
}

// Function that creates random circles of varying sizes and color pallettes
function createCircles(timer) {
	randColor = random(pallette);

	randX = random(0, windowWidth);
	randY = random(0, windowHeight);

	randRadius = random(80, 200);

	fill(randColor);

	ellipse(randX, randY, randRadius, randRadius);
}



