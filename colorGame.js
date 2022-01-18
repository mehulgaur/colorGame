var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons event listener
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener('click', function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//comoare pickeed color to colorDisplay	
		if(clickedColor === pickedColor) {
			resetButton.textContent = "Play Again!";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
			messageDisplay.textContent = 'Correct';
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
		}); 
		}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from an array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
		    squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
	reset();
});

for(var i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener('click', function() {
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//comoare pickeed color to colorDisplay	
	if(clickedColor === pickedColor) {
		resetButton.textContent = "Play Again!";
		h1.style.backgroundColor = clickedColor;
		changeColors(clickedColor);
		messageDisplay.textContent = 'Correct';
	}
	else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again!";
	}
	});
}

function changeColors(color) {
	//loop through all squares
	for(i = 0; i < squares.length; i++) {
		//change each color to m atch given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an aaray
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random colr and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blur" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}