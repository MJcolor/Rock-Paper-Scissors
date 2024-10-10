//Computer choice logic

let cptc = "";
let dice = Math.floor((Math.random() * 3) + 1);
/* let userChoice = prompt("Rock, Paper, Scissors ! Choose:"); */

function getComputerChoice() {
    if (dice === 1){
        return cptc = "ROCK";
    } else if (dice === 2) {
        return cptc = "PAPER";
    } else if (dice === 3){
        return cptc = "SCISSORS";
    }
};

console.log(getComputerChoice());

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper, Scissors ! Choose:");
    userChoice = userChoice.toUpperCase();
    //console.log(userChoice);
    if (userChoice === "ROCK"){
        return userChoice;
    } else if (userChoice === "PAPER"){
        return userChoice;
    } else if (userChoice === "SCISSORS") {
        return userChoice;
    } else {
        return "Invalid input. Please try again."
    }

};

console.log(getHumanChoice());

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log("It's a tie !");
        } else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") || (humanChoice === "PAPER" && computerChoice === "ROCK") || (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
            console.log("Computer choice = " + cptc + ", You win !");
            humanScore++;
            computerScore;
            console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
        } else if ((humanChoice === "ROCK" && computerChoice === "PAPER") || (humanChoice === "PAPER" && computerChoice === "SCISSORS") || (humanChoice === "SCISSORS" && computerChoice === "ROCK")) {
            console.log("Computer choice = " + cptc + ", You lose...");
            computerScore++;
            humanScore;
            console.log("Your Score: " + humanScore + ", Computer Score : " + computerScore);
        }
    };

    for (let i = 0; i != 5; i++){
        console.log("Round " + (i + 1) + ":");
        const humanSelection = getHumanChoice();
        dice = Math.floor((Math.random() * 3) +1);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    };

    if (humanScore > computerScore) {
        console.log("Congratulations ! You won !");
    } else if (humanScore < computerScore) {
        console.log("You lost the game... Refresh to try again !");
    } else {
        console.log("Tie game !");
    }
}

playGame();