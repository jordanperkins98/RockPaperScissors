let gameReady = true    // Used to prevent the user from spamming the buttons;



function getComputerChoice(){
    const choiceArray = ["Rock","Paper","Scissors"]
    return choiceArray[Math.floor(Math.random() * choiceArray.length)]
}

const timeToWait = 1000;
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection[0] == "r") {
        if (computerSelection == "scissors"){
            let result = document.querySelector('.result');
            result.textContent = "Rock beats Scissors"
            gameReady = false;
            setTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);

            let playerScore = document.querySelector('#player');
            playerScore.textContent = parseInt(playerScore.textContent) + 1;


        }
        else if (computerSelection == "rock"){
            let result = document.querySelector('.result');
            result.textContent = "Draw!"
            gameReady = false;
            setTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);
        } 
        else {
            let result = document.querySelector('.result');
            result.textContent = "Paper beats Rock"
            gameReady = false;
            setTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);

            let computerScore = document.querySelector('#AI');
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    }
    else if (playerSelection[0] == "s"){
        if (computerSelection == "Paper"){
            let result = document.querySelector('.result');
            result.textContent = "Scissors beats Paper"
            gameReady = false;
            SetTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);
            
            let playerScore = document.querySelector('#player');
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        }
        else if (computerSelection == "scissors"){
            let result = document.querySelector('.result');
            result.textContent = "Draw!"
            gameReady = false;
            setTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);
        } 
        else {
            let result = document.querySelector('.result');
            result.textContent = "Rock beats Scissors"
            gameReady = false;

            setTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);


            let computerScore = document.querySelector('#AI');
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    }
    else if (playerSelection[0] == "p"){
        if (computerSelection == "rock"){
            let result = document.querySelector('.result');
            result.textContent = "Paper beats Rock"
            gameReady = false;

            setTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);

            let playerScore = document.querySelector('#player');
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        }
        else if (computerSelection == "paper"){
            let result = document.querySelector('.result');
            result.textContent = "Draw!"
            gameReady = false;

            setTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);
        } 
        else {
            let result = document.querySelector('.result');
            result.textContent = "Scissors beats Paper"
            gameReady = false;

            setTimeout(function(){
                gameReady = true;
                result.textContent = "Make your choice!";
            }, timeToWait);



            let computerScore = document.querySelector('#AI');
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    }
}



function game(){

    document.querySelector('.result').innerHTML = "Make your choice! <br> First to 5 wins!";

    const buttons = document.querySelectorAll('.option-button');

    buttons.forEach((button) => {
        
        button.addEventListener('click', () => {

            if (gameReady == false) return;

            playRound(button.id, getComputerChoice());

            if (parseInt(document.querySelector('#player').textContent) == 5){
                let result = document.querySelector('.result');
                result.innerHTML = "<strong> You Win! </strong>";

                let playerScore = document.querySelector('#player');
                playerScore.textContent = 0;

                let computerScore = document.querySelector('#AI');
                computerScore.textContent = 0;
            }
            else if (parseInt(document.querySelector('#AI').textContent) == 5){
                let result = document.querySelector('.result');
                result.innerHTML = "<strong> You Lose! </strong>";

                let playerScore = document.querySelector('#player');
                playerScore.textContent = 0;

                let computerScore = document.querySelector('#AI');
                computerScore.textContent = 0;
            }

        });
    });
    
    
    
}

game()

