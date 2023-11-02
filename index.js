
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

function game() {
    let roundsPlayed = 0;
    let playerWin = 0;
    let computerWin = 0;

    while (roundsPlayed < 5) {
        roundsPlayed++;
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose rock, paper or scissors.")
        console.log("You chose " + playerSelection + "." + "The computer chose " + computerSelection + ".");
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your wins so far " + playerWin);
        console.log("Computer wins so far " + computerWin);
        console.log("");

        function playRound(playerSelection, computerSelection) {
            if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
                return 'It is a tie.';
            } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "scissors") {
                playerWin++;
                return "You win, rock breaks scissors.";
            } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "rock") {
                playerWin++;
                return "You win, paper covers rock.";
            } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "paper") {
                playerWin++;
                return "You win, scissors cuts paper.";
            } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "paper") {
                computerWin++;
                return "Computer wins, paper covers rock.";
            } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "scissors") {
                computerWin++;
                return "Computer wins, scissors cut paper.";
            } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "rock") {
                computerWin++;
                return "Computer wins, rock breaks scissors.";}
                        }
    }        
if (playerWin > computerWin) {
    console.log("After five rounds, you win!")
}
if (playerWin < computerWin) {
    console.log("After five rounds, you lose!")
}
else {
    console.log("After five rounds, it's a tie!")
}                                   
    }
game();






