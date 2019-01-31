var numOfSquares = 6;
var colors;
var pickedColor;
var squares =  document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.getElementsByClassName("mode");

init();

function init(){
    // mode button event listener
    for (var i=0; i<modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
    // square event listener
    for(var i=0; i<squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetBtn.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}

function reset(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colors";
}

resetBtn.addEventListener("click", reset);

function changeColors(color) {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
