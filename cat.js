var canvas;
var context;
var image;
var currentFrame = 0;
var frames = 4;
var width = 350;
var height = 300;
var total = 0
var finalFrame = 0;
var called = false;
$( document ).ready(function() {
			prepareCanvas(document.getElementById("canvasDiv"), 1200, 400);
			$("#canvas").bind("click",loadImage);
			$("#text2").hide();
			$("#text3").hide();
			$("#text4").hide();
			$("#text5").hide();
			$("#text6").hide();
			$("#text7").hide();
			// loadImage("cat");
			// document.getElementById("canvas").addEventListener("click", function(){console.log("clicked");loadImage("cat");console.log(total);console.log(currentFrame);}, false);
});

// $(document).ready(function(){
// 	v
// });


function prepareCanvas(canvasDiv, canvasWidth, canvasHeight)
{
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild(canvas);

	context = canvas.getContext("2d");
	canvas.width = canvas.width;//clears canvas
	loadImage("cat");
};

function loadImage(name)
{
	if (total == 0 && currentFrame == 1) {$("#text1").hide();$("#text2").show();};
	if (total == 0 && currentFrame == 2) {$("#text2").hide();$("#text3").show();};	
	if (total == 0 && currentFrame == 3) {$("#text3").hide();$("#text4").show();};	
	if (total == 1 && currentFrame == 1) {$("#text4").hide();$("#text5").show();};	
	if (total == 1 && currentFrame == 2) {$("#text5").hide();$("#text6").show();};	
	if (total == 1 && currentFrame == 3) {$("#text6").hide();$("#text7").show();};	
	// if (total == 0 && currentFrame == 2) {$("#text2").hide();$("#text3").show();};	
	console.log(total);
	console.log(currentFrame);
	image = new Image();
	image.src = "images/cat" + currentFrame +".png";
		draw("one");
	if (currentFrame == 3 && total == 1){
		init();
		// document.getElementById("canvas").removeEventListener("click", function(){console.log("remove");}, false);
		// debugger;
		setInterval(finaldraw,50);
	}
}

function draw(params)
{
	if (total < 2) {
		image.onload = function(){
			canvas.width = canvas.width;
			context.drawImage(image,600,0);
			currentFrame++;
			if (currentFrame == 4) {
				currentFrame = 0;
				total++;
			}
		}
	}
}

function finaldraw(){
	// document.getElementById("canvas").removeEventListener("click",function(){});
	image.src = "images/eatsheet.png";
	// context.clearRect(0, 0, canvas.width, canvas.height);
	image.onload = function(){
		// canvas.width = canvas.width;
		// context.drawImage(image,0,0);
		// debugger;
		// context.clearRect(0, 0, canvas.width, canvas.height);
		// console.log("hello");
		context.drawImage(image,350*finalFrame,0,width,320,600,0,width,320);
		// debugger;
		if (finalFrame == frames) {
			finalFrame = 0;
		} else {
			finalFrame = finalFrame + 1;			
		}
	}
}

function init(){
	init.called = true;
	$("#canvas").unbind('click');
	// debugger;
	// document.getElementById("canvas").removeEventListener("click", function(){console.log("remove");});
}
