let round = 0;
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const roundCount = document.querySelector(".round");
const resetButton = document.querySelector(".resetGamebtn");

const rstButton = document.createElement("button");
rstButton.textContent = " Restart Game?"
rstButton.addEventListener('click', () => resetGame());


function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    if(x == 0)
        return "rock";
    else if (x == 1)
        return "paper";
    else
        return "scissors";
}

function updateRound()
{
    roundCount.textContent = `ROUND: ${round}`;
}

function updateScore()
{
    scoreDiv.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
}

function playRound(humanChoice){
    
    round++;
    updateRound();

    let computerChoice = getComputerChoice();

    let roundResult = "";

    if(humanChoice == computerChoice) {
        roundResult = `DRAW! Both chose ${humanChoice}. No one wins.`;
        resultsDiv.textContent = roundResult;
        return;
    }

    if(humanChoice == "rock" && computerChoice != "paper"){
        roundResult= `You WIN!! ${humanChoice} beats ${computerChoice} `;
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice != "scissors"){
        roundResult= `You WIN!! ${humanChoice} beats ${computerChoice} `;
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice != "rock"){
        roundResult= `You WIN!! ${humanChoice} beats ${computerChoice} `;
        humanScore++;
    }
    else{
        roundResult = `You lost... ${computerChoice} beats ${humanChoice} `;
        computerScore++;
    }

    resultsDiv.textContent = roundResult;
    updateScore();

    if(humanScore >= 5){
        resultsDiv.innerHTML += "<br><br>YOU WON THE GAME!";
        disableButtons();
        resetButton.appendChild(rstButton);
    }    
    else if(computerScore >= 5){
        resultsDiv.innerHTML += "<br><br>YOU lost... Better luck next time!";
        disableButtons();
        resetButton.appendChild(rstButton);
    }    

}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function resetGame(){
    round = 0;    
    humanScore = 0;
    computerScore = 0;
    updateRound();
    updateScore();
    enableButtons();
    rstButton.remove();
    resultsDiv.textContent = "Make your selection to start the game!"
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
