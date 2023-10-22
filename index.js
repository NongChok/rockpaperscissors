function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0) {
        computerChoice = 'rock';
    }
    if(randomNumber == 1) {
        computerChoice = 'paper';
        }
    if(randomNumber == 2) {
        computerChoice = 'scissors';
    }
}
getComputerChoice();
console.log("The computer chooses", computerChoice);