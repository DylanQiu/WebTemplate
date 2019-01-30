var player1Btn = document.querySelector("#player1");
var player2Btn = document.querySelector("#player2");
var player1Score = document.querySelector("#score1");
var player2Score = document.querySelector("#score2");
var resetBtn = document.querySelector("#reset");
var winningDisplay = document.querySelector("p span");

var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winningPoint = 5;

player1Btn.addEventListener("click", function(){
    if (!gameover) {
        p1Score++;
        player1Score.textContent = p1Score;
        if (p1Score === winningPoint) {
            gameover = true;
            player1Score.classList.add("winner");
        }
    }
});

player2Btn.addEventListener("click", function(){
    if (!gameover) {
        p2Score++;
        player2Score.textContent = p2Score;
        if (p2Score === winningPoint) {
            gameover = true;
            player2Score.classList.add("winner");
        }
    }
});

resetBtn.addEventListener("click", reset);

numInput.addEventListener("change", function(){
    winningDisplay.textContent = this.value;
    winningPoint = Number(this.value);
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    player1Score.textContent = p1Score;
    player2Score.textContent = p2Score;
    player1Score.classList.remove("winner");
    player2Score.classList.remove("winner");
    gameover = false;
}
