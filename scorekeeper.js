var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p3Button = document.getElementById("p3");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInPut = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 8;


p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
    if(p1Score === winningScore){
/*    	p1Display.classlist.add("winner");
*/    	gameOver = true;
    }
    p1Display.textContent = p1Score;

	}
		
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;
	if(p2Score === winningScore){
		gameOver = true;
	}

	}
	p2Display.textContent = p2Score;
});

p3Button.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
});


numInPut.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInPut.value;
	winningScore = Number(numInPut.value);
})