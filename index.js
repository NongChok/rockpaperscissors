
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber == 0) {
        return 'rock';
    }
    if(randomNumber == 1) {
        return 'paper';
        }
    if(randomNumber == 2) {
        return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 'It is a tie';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "scissors") {
        return "You win, rock breaks scissors";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "rock") {
        return "You win, paper covers rock";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "paper") {
        return "You win, scissors cuts paper";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "paper") {
        return "Computer wins, paper covers rock";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "scissors") {
        return "Computer wins, scissors cut paper";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "rock") {
        return "Computer wins, rock breaks scissors";}

  }
   
   const playerSelection = "rock";
   const computerSelection = getComputerChoice();
    
    console.log("You chose rock. The computer chose", computerSelection);
    console.log(playRound(playerSelection, computerSelection));