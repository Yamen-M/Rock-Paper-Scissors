


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

function playRound(humanChoice, computerChoice){

    if(humanChoice == computerChoice) {
        console.log("DRAW! No one wins.\n\n")    
        return -1
    }

    if(humanChoice == "rock" && computerChoice != "paper")
        console.log("You WIN!! " + humanChoice +" beats " + computerChoice + "\n\n")
    else if(humanChoice == "paper" && computerChoice != "scissors")
        console.log("You WIN!! " + humanChoice +" beats " + computerChoice + "\n\n")
    else if(humanChoice == "scissors" && computerChoice != "rock")
        console.log("You WIN!! " + humanChoice +" beats " + computerChoice + "\n\n")
    else{
        console.log("You lost... " + computerChoice +" beats " + humanChoice + "\n\n")
        return 1;
    }


    return 0;
}




function playGame(){
    let round = 0;
    let humanScore = 0;
    let computerScore = 0;



    while(round < 5)
    {
        console.log("Round " + (round + 1) + "\n")

        console.log("Your Score: " + humanScore + "\n")
        console.log("Computer Score: " + computerScore + "\n")

        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection)

        if( result == 1)
            computerScore++;
        else if(result == 0)
            humanScore++;

        round++
    }

    console.log("FINAL SCORES:\n\n PLAYER SCORE: " + humanScore + "\n COMPUTER SCORE: "+ computerScore + "\n")

    if(humanScore > computerScore)
        console.log("\nYOU WON THE GAME!\n")
    else if(humanScore < computerScore)
        console.log("\nYOU lost...Better luck next time!\n")
    else
        console.log("\nGame ended with a DRAW. No one wins!\n")
}

playGame();