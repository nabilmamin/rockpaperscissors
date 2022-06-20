


function computerPlay() {
    const gameInt = Math.floor(Math.random() * 3);
    let gameHand = ""
    if (gameInt === 0) {
        gameHand = "rock"
    } else if (gameInt === 1) {
        gameHand = "paper"
    } else {
        gameHand = "scissors"
    }

    return gameHand
    
}

const computerSelection = computerPlay();

// console.log(gameInt)
console.log(computerPlay)
console.log(computerSelection)


// function choose() {
//     let playerSelect = prompt("Rock, Paper, or Scissors?").toLowerCase();
//     if (playerSelect.toLowerCase() !== "rock" || playerSelect !== "paper" || playerSelect !== "scissors") {
//         playerSelect = prompt("Please only choose rock, paper, or scissors only!").toLowerCase();
//         return playerSelect
//     } else {
//         return playerSelect
//     }
// }
// const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

// console.log(playerSelection)



function playRound(playerSelection, computerSelection) {
    // rock beats scissors, paper beats rock, scissors beats paper
    // method 1: 
    // if playerSelection === computerSelection then "Its a tie! You both chose {computerSelection}."
    // going to have to account for all scenarios manually. 

    // let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("It's a tie! You both chose ",computerSelection)
        playerRound++;
        computerRound++;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"))  {
        console.log("You won! ",playerSelection," beats",computerSelection)
        playerRound++;
    } else {
        console.log("You Lost! ",computerSelection," beats",playerSelection)
        computerRound++;
    }
    console.log(playerRound)
    console.log(computerRound)
    score = [playerRound, computerRound]
    return score
}

// console.log(playRound(playerSelection,computerSelection))



    let playerRound = 0;
    let computerRound = 0;
    let i = 0;


    for (i; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection,computerSelection))
        console.log("Your score is", playerRound)
        console.log("The computer's score is", computerRound)

        
    }

    if (playerRound > computerRound) {
            console.log("After 5 rounds, you're the winner!")
        } else if (computerRound>playerRound) {
            console.log("After 5 rounds, the computer won!")
        } else {
            console.log("After 5 rounds, its a draw!")
        }

    
