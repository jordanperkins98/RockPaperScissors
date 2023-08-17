function getComputerChoice(){
    const choiceArray = ["Rock","Paper","Scissors"]
    return choiceArray[Math.floor(Math.random() * choiceArray.length)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection[0] == "r") {
        if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissors"
        }
        else if (computerSelection == "rock"){
            return "Draw!"
        } 
        else {
            return "You Lose! Paper beats Rock"
        }
    }
    else if (playerSelection[0] == "s"){
        if (computerSelection == "Paper"){
            return "You Win! Scissors beats Paper"
        }
        else if (computerSelection == "scissors"){
            return "Draw!"
        } 
        else {
            return "You Lose! Rock beats Scissors"
        }
    }
    else if (playerSelection[0] == "p"){
        if (computerSelection == "rock"){
            return "You Win! Paper beats Rock"
        }
        else if (computerSelection == "paper"){
            return "Draw!"
        } 
        else {
            return "You Lose! Scissors beats Paper"
        }
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    
    for (let i = 1; i <= 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper Or Scissors?")
        console.log(i)
        console.log(playRound(playerSelection,computerSelection))
        if (playRound(playerSelection,computerSelection).includes("Win")){
            playerScore++
        }
        else if (playRound(playerSelection,computerSelection).includes("Lose")){
            computerScore++
        }
        const getRoundPlural = (i==1) ? "round" : "rounds"
        console.log(`The score after ${i} ${getRoundPlural} is Player ${playerScore} - Computer ${computerScore}`)
    }
}

game()