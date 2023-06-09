const p1RollButton = document.getElementById("p1RollButton");
const p1Score = document.getElementById("p1Score");
const p1WinningMessage = document.getElementById("p1WinningMessage");
const p1LosingMessage = document.getElementById("p1LosingMessage");
const p1HoldButton = document.getElementById("p1HoldButton");
const p1Dice1 = document.getElementById("p1dice1");
const p1Dice2 = document.getElementById("p1dice2");
const p1Dice3 = document.getElementById("p1dice3");
const p1Dice4 = document.getElementById("p1dice4");
const p1Dice5 = document.getElementById("p1dice5");
const p1Dice6 = document.getElementById("p1dice6");
const p1beginMessage = document.getElementById("p1beginMessage")
const p1ScoreCounter = document.getElementById("p1ScoreCounter")
const p2ScoreCounter = document.getElementById("p2ScoreCounter")
let p1CurrentScore = 0;

p1RollButton.addEventListener("click", () => {
const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    p1RollButton.textContent = "Roll";
    p1LosingMessage.style.display = "none";
    p1WinningMessage.style.display = "none";
    p1Dice1.style.display = "none";
    p1Dice2.style.display = "none";
    p1Dice3.style.display = "none";
    p1Dice4.style.display = "none";
    p1Dice5.style.display = "none";
    p1Dice6.style.display = "none";
    p1Score.style.color = "black";
    p1beginMessage.style.display = "none"
    p2RollButton.disabled = true;
    
    if (randomNumber === 1) {  
        p1Dice1.style.display = "block";
        p1CurrentScore += 1;
        p1CurrentScore = 0;
        p1Score.textContent = p1CurrentScore;
        p1LosingMessage.textContent = "UNLUCKY!";
        p1LosingMessage.style.display = "block";
        p1Score.style.color = "red";
        p1RollButton.disabled = true;
        p2RollButton.disabled = false;
        p1HoldButton.disabled = true;
        p2HoldButton.disabled = false;

    } else if (randomNumber === 2) {
        p1Dice2.style.display = "block";
        p1CurrentScore += 2;
        p1Score.textContent = p1CurrentScore;
    } else if (randomNumber === 3) {
        p1Dice3.style.display = "block";
        p1CurrentScore += 3;
        p1Score.textContent = p1CurrentScore;
    } else if (randomNumber === 4) {
        p1Dice4.style.display = "block";
        p1CurrentScore += 4;
        p1Score.textContent = p1CurrentScore;
    } else if (randomNumber === 5) {
        p1Dice5.style.display = "block";
        p1CurrentScore += 5;
        p1Score.textContent = p1CurrentScore;
    } else if (randomNumber === 6) {
        p1Dice6.style.display = "block";
        p1CurrentScore += 6;
        p1Score.textContent = p1CurrentScore;
    }

    if (p1CurrentScore >= 20) {
        p1WinningMessage.textContent = "YOU WON!";
        p1WinningMessage.style.display = "block";
        p1CurrentScore = 0;
        p1RollButton.textContent = "Play Again?";
        p1Score.style.color = "green";
        p2RollButton.disabled = true;
        p1RollButton.disabled = true;
        p1HoldButton.disabled = true;
        p2HoldButton.disabled = true;
        p1ScoreCounter.textContent = +p1ScoreCounter.textContent + 1;
    }
});



p1HoldButton.addEventListener("click", () => {
    p1Score.style.color = "orange";
    p1Score.textContent = "Your score: " + p1CurrentScore;
    p2beginMessage.textContent = "Your turn";
    p1RollButton.disabled = true;
    p2RollButton.disabled = false;
    p1HoldButton.disabled = true;
    p2HoldButton.disabled = false;
});





















const p2RollButton = document.getElementById("p2RollButton");
const p2Score = document.getElementById("p2Score");
const p2WinningMessage = document.getElementById("p2WinningMessage");
const p2LosingMessage = document.getElementById("p2LosingMessage");
const p2HoldButton = document.getElementById("p2HoldButton");
const p2Dice1 = document.getElementById("p2dice1");
const p2Dice2 = document.getElementById("p2dice2");
const p2Dice3 = document.getElementById("p2dice3");
const p2Dice4 = document.getElementById("p2dice4");
const p2Dice5 = document.getElementById("p2dice5");
const p2Dice6 = document.getElementById("p2dice6");
const p2beginMessage = document.getElementById("p2beginMessage")

let p2CurrentScore = 0;

p2RollButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    p2RollButton.textContent = "Roll";
    p2LosingMessage.style.display = "none";
    p2WinningMessage.style.display = "none";
    p2Dice1.style.display = "none";
    p2Dice2.style.display = "none";
    p2Dice3.style.display = "none";
    p2Dice4.style.display = "none";
    p2Dice5.style.display = "none";
    p2Dice6.style.display = "none";
    p2beginMessage.style.display ="none";
    p2Score.style.color = "black";
    

    if (randomNumber === 1) {  
        p2Dice1.style.display = "block";
        p2CurrentScore += 1;
        p2CurrentScore = 0;
        p2Score.textContent = p2CurrentScore;
        p2LosingMessage.textContent = "UNLUCKY!";
        p2LosingMessage.style.display = "block";
        p2Score.style.color = "red";
        p1RollButton.disabled = false;
        p2RollButton.disabled = true;
        p2HoldButton.disabled = true;
        p1HoldButton.disabled = false;

    } else if (randomNumber === 2) {
        p2Dice2.style.display = "block";
        p2CurrentScore += 2;
        p2Score.textContent = p2CurrentScore;
    } else if (randomNumber === 3) {
        p2Dice3.style.display = "block";
        p2CurrentScore += 3;
        p2Score.textContent = p2CurrentScore;
    } else if (randomNumber === 4) {
        p2Dice4.style.display = "block";
        p2CurrentScore += 4;
        p2Score.textContent = p2CurrentScore;
    } else if (randomNumber === 5) {
        p2Dice5.style.display = "block";
        p2CurrentScore += 5;
        p2Score.textContent = p2CurrentScore;
    } else if (randomNumber === 6) {
        p2Dice6.style.display = "block";
        p2CurrentScore += 6;
        p2Score.textContent = p2CurrentScore;
    }

    if (p2CurrentScore >= 20) {
        p2WinningMessage.textContent = "YOU WON!";
        p2WinningMessage.style.display = "block";
        p2CurrentScore = 0;
        p2RollButton.textContent = "Roll";
        p2Score.style.color = "green";
        p2RollButton.disabled = true;
        p1RollButton.disabled = true;
        p1HoldButton.disabled = true;
        p2HoldButton.disabled = true;
        p2ScoreCounter.textContent = +p2ScoreCounter.textContent + 1;
    
    }
});



p2HoldButton.addEventListener("click", () => {
    p2Score.style.color = "orange";
    p2Score.textContent = "Your score: " + p2CurrentScore;
    
    p2RollButton.disabled = true;
    p1RollButton.disabled = false;
    p2HoldButton.disabled = true;
    p1HoldButton.disabled = false;
});





const resetButton = document.getElementById("resetButton");


const resetGame = () => {
  p1RollButton.textContent = "Roll";
  p1Score.textContent = "0";
  p1WinningMessage.style.display = "none";
  p1LosingMessage.style.display = "none";
  p1Dice1.style.display = "none";
  p1Dice2.style.display = "none";
  p1Dice3.style.display = "none";
  p1Dice4.style.display = "none";
  p1Dice5.style.display = "none";
  p1Dice6.style.display = "none";
  p1Score.style.color = "black";
  p1beginMessage.style.display = "block";
  

  p2RollButton.textContent = "Roll";
  p2Score.textContent = "0";
  p2WinningMessage.style.display = "none";
  p2LosingMessage.style.display = "none";
  p2Dice1.style.display = "none";
  p2Dice2.style.display = "none";
  p2Dice3.style.display = "none";
  p2Dice4.style.display = "none";
  p2Dice5.style.display = "none";
  p2Dice6.style.display = "none";
  p2Score.style.color = "black";
  p2beginMessage.style.display = "none";
  

  p1CurrentScore = 0;
  p2CurrentScore = 0;

  p1RollButton.disabled = false;
  p2RollButton.disabled = true;
  p1HoldButton.disabled = false;
  p2HoldButton.disabled = false;
};

resetButton.addEventListener("click", resetGame);
