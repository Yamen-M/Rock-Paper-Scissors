let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    if(x == 0)
        return "rock";
    else if (x == 1)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice(){
    console.log("Rock - Paper - Scissors\n");
    let x = prompt("Enter your choice: ")
    while(x.toLowerCase() != "rock" && x.toLowerCase() != "paper" && x.toLowerCase() != "scissors")
    {
        console.log("Input Invalid!!\n");
        console.log("Rock - Paper - Scissors\n");
        x = prompt("Enter your choice: ")
    }
    return x;
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();


console.log(humanSelection)