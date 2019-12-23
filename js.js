let computerPlay = function () {

    let cpu = Math.floor(Math.random()*3)+1;

    if (cpu == 1) {
        return 'rock';
    } else if (cpu == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
};
let playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                return ["draw", "Draw! Rock vs Rock", computerSelection];
              } else if (computerSelection === "paper") {
                return ["lose", "You lose! Paper beats Rock", computerSelection];
              } else if (computerSelection === "scissors") {
                return ["win", "You win! Rock beats Scissors", computerSelection];
              }
              break;
        case "paper":
            if (computerSelection === "rock") {
                return ["win", "You win! Paper beats Rock", computerSelection];
              } else if (computerSelection === "paper") {
                return ["draw", "Draw! Paper vs Paper", computerSelection];
              } else if (computerSelection === "scissors") {
                return ["lose", "You lose! Scissors beats Paper", computerSelection];
              }
              break;
        case "scissors":
            if (computerSelection === "rock") {
                return ["lose", "You lose! Rock beats Scissors", computerSelection];
              } else if (computerSelection === "paper") {
                return ["win", "You win! Scissors beats Paper", computerSelection];
              } else if (computerSelection === "scissors") {
                return ["draw", "Draw! Scissors vs Scissors", computerSelection];
              }
              break;
    }
};

let playGame = function () {
    let cpuScore = 0,
    playerScore = 0;

    for (let round =1; round<=5; round++) {
        let playerSelection = prompt('Make your choice (rock/paper/scissors): ');
        let roundResult = playRound(playerSelection, computerPlay());
        if(roundResult[0] == "win") {
            playerScore += 1;
        } else if (roundResult[0] == "lose") {
            cpuScore += 1;
        }

        console.log("Round #" + round + '. ' + 'You chose ' + playerSelection + ' and the computer chose ' + roundResult[2])
        console.log(roundResult[1]);
        console.log("Your score: " + playerScore);
        console.log("Computer score: " + cpuScore);
    }

    console.log("And the final results: Computer Score - " + cpuScore + " and Your Score - " + playerScore);

    if (playerScore > cpuScore){
        console.log("You win the game!")
    } else if (cpuScore > playerScore) {
        console.log("Computer win the game!")
    } else {
        console.log("Draw!")
    }
}
    