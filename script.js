const playerHand = document.querySelectorAll('.btn-key');
const output = document.querySelector('.output');
const playerScore = document.querySelector('.playerscore');
const computerScore = document.querySelector('.computerscore');
const playerIcon = document.querySelector('.player-icon');
const computerIcon = document.querySelector('.computer-icon');
const replay = document.querySelector('.replay');
const rockImgSrc = 'images/hand-fist-solid.svg';
const paperImgSrc = 'images/hand-solid.svg';
const scissorsImgSrc = 'images/hand-scissors-solid.svg';

let i = 0;
let playerRound = 0;
let computerRound = 0;
let winnerRound = '';

playerScore.innerHTML = (`Player: ${playerRound}`);
computerScore.innerHTML = (`Computer: ${computerRound}`);
output.innerHTML = 'Choose your hand.'

function computerHand() {
    const round = Math.floor(Math.random() * 3);
    
    switch (round) {
        case 0:
            computerIcon.src = rockImgSrc
            return 'rock'
        case 1:
            computerIcon.src = paperImgSrc
            return 'paper'
        case 2:
            computerIcon.src = scissorsImgSrc
            return 'scissors'
    }
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        output.innerHTML = (`It's a tie! You both choose ${computerSelection}`)
        playerIcon.classList.remove('win')
        computerIcon.classList.remove('win')
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"))  {
        output.innerHTML = (`You won! ${playerSelection} beats ${computerSelection}.`)
        playerRound++;
        playerIcon.classList.add('win')
        computerIcon.classList.remove('win')
    } else {
        output.innerHTML = (`You lost! ${computerSelection} beats ${playerSelection}.`)
        computerRound++;
        playerIcon.classList.remove('win')
        computerIcon.classList.add('win')
    }
    score = [playerRound, computerRound]
    return score
}

for (i; i < 3; i++) {
    playerHand[i].addEventListener('click', function() {


        // let score = [playerRound, computerRound]

        if (playerRound === 5) {
            output.innerHTML = 'Congrats! You have won the game!'
            replay.classList.add('active')
        } else if (computerRound === 5) {
            output.innerHTML = 'Sorry! You have lost the game!'
            replay.classList.add('active')
        }
        else {
            const computerSelection = computerHand();
            let playerSelection = '';
        
            if (this.getAttribute('data-hand') === "rock") {
                playerSelection = 'rock'
                playerIcon.src = rockImgSrc
            } else if (this.getAttribute('data-hand') === 'paper') {
                playerSelection = 'paper'
                playerIcon.src = paperImgSrc
            } else {
                playerSelection = 'scissors'
                playerIcon.src = scissorsImgSrc
            }

            playRound(playerSelection, computerSelection)

            console.log(winnerRound)
            // switch (winnerRound) {
            //     case 'tie':
            //         playerIcon.classList.remove('win')
            //         playerIcon.classList.remove('lose')
            //         computerIcon.classList.remove('win')
            //         computerIcon.classList.remove('lose')
            //     case 'player':
            //         playerIcon.classList.remove('lose')
            //         playerIcon.classList.add('win')
            //         computerIcon.classList.remove('win')
            //         computerIcon.classList.add('lose')
            //     case 'computer':
            //         playerIcon.classList.remove('win')
            //         playerIcon.classList.add('lose')
            //         computerIcon.classList.remove('lose')
            //         computerIcon.classList.add('win')
            // }

        }
        
        // if (score[0] === '5' && score[0] === score[1]) {
        //     output.innerHTML = 'After 5 rounds, its a tie!'
        //     score = [0,0]
        //     return
        // } else if (score[0] === '5' && score[0] > score[1]) {
        //     output.innerHTML = 'After 5 rounds, YOU WON!'
        //     score = [0,0]
        //     return
        // } else if (score[1] === '5' && score[1] > score[0]) {
        //     output.innerHTML = 'After 5 rounds, the computer won.'
        //     score[0,0]
        //     return
        // } else {
            
        // }


        playerScore.innerHTML = (`Player: ${playerRound}`);
        computerScore.innerHTML = (`Computer: ${computerRound}`);

        
    

})
}

replay.addEventListener('click', function(e){
    playerRound = 0;
    computerRound = 0;
    playerScore.innerHTML = (`Player: ${playerRound}`);
    computerScore.innerHTML = (`Computer: ${computerRound}`);
    output.innerHTML = 'Choose your hand.'

})

// // Anything below this line is just work in progress, testing ideas, or notes.
// // Computer chooses their hand. 
// function computerPlay() {
//     const gameInt = Math.floor(Math.random() * 3);
//     let gameHand = ""
//     if (gameInt === 0) {
//         gameHand = "rock"
//     } else if (gameInt === 1) {
//         gameHand = "paper"
//     } else {
//         gameHand = "scissors"
//     }
//     return gameHand  
// }

// const computerSelection = computerPlay(); //assign function to a variable for computer hand.

// // console.log(gameInt)
// console.log(computerPlay)
// console.log(computerSelection)


// // function choose() {
// //     let playerSelect = prompt("Rock, Paper, or Scissors?").toLowerCase();
// //     if (playerSelect.toLowerCase() !== "rock" || playerSelect !== "paper" || playerSelect !== "scissors") {
// //         playerSelect = prompt("Please only choose rock, paper, or scissors only!").toLowerCase();
// //         return playerSelect
// //     } else {
// //         return playerSelect
// //     }
// // }
// // const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

// // console.log(playerSelection)



// function playRound(playerSelection, computerSelection) {
//     // rock beats scissors, paper beats rock, scissors beats paper
//     // method 1: 
//     // if playerSelection === computerSelection then "Its a tie! You both chose {computerSelection}."
//     // going to have to account for all scenarios manually. 

//     // let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

//     if (playerSelection === computerSelection) {
//         console.log("It's a tie! You both chose ",computerSelection)
//         playerRound++;
//         computerRound++;
//     } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"))  {
//         console.log("You won! ",playerSelection," beats",computerSelection)
//         playerRound++;
//     } else {
//         console.log("You Lost! ",computerSelection," beats",playerSelection)
//         computerRound++;
//     }
//     console.log(playerRound)
//     console.log(computerRound)
//     score = [playerRound, computerRound]
//     return score
// }

// // console.log(playRound(playerSelection,computerSelection))



// let playerRound = 0;
// let computerRound = 0;
// let i = 0;

// // const plyr_rock = document.querySelector('#btn-1');
// // const plyr_paper = document.querySelector('#btn-2');
// // const plyr_scissors = document.querySelector('#btn-3');

// // clicking on these player buttons will do a number of things:
// // 1. it will load up the player's hand icon on the center screen
// // 2. it will return the value of the players chosen hand (rock, paper, scissors)
// // 3. it will initiate the game and the computers choice

// // should we do queryselectorall and iterate over the three choices with the appropriate IDs (#btn-1 > scissors, #btn-2 > rock, #btn-3 > paper)

// const playerHand = document.querySelectorAll('.btn-key');

// // function determinePlayerHand() {
// //     if (this.getAttribute('data-hand') === "rock") {
// //         console.log("rock")
// //         return "rock"
// //     } else if (this.getAttribute('data-hand') === "paper") {
// //         console.log("paper")
// //         return "paper"
// //     } else if (this.getAttribute('data-hand') === "scissors") {
// //         console.log("scissors")
// //         return "scissors"
// //     }
// // } 

// function highlightBox() {
//     this.classList.add('playing')
// }

// for (i; i < 3; i++) {
//     playerHand[i].addEventListener('click', function() {
//         // this.classList.add('playing') // update the button's style (css class)

//         let playerSelection = ""

//         if (this.getAttribute('data-hand') === "rock") {
//             console.log("rock")
//             playerSelection = "rock";
//         } else if (this.getAttribute('data-hand') === "paper") {
//             console.log("paper")
//             playerSelection = "paper";
//         } else if (this.getAttribute('data-hand') === "scissors") {
//             console.log("scissors")
//             playerSelection = "scissors";
//         }

//         const computerSelection = computerPlay();

//         console.log(playRound(playerSelection, computerSelection));



//     }
//     );
// }



//     // for (i; i < 5; i++) {
//     //     let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase()
//     //     const computerSelection = computerPlay()
//     //     console.log(playRound(playerSelection,computerSelection))
//     //     console.log("Your score is", playerRound)
//     //     console.log("The computer's score is", computerRound)

        
//     // }

//     // if (playerRound > computerRound) {
//     //         console.log("After 5 rounds, you're the winner!")
//     //     } else if (computerRound>playerRound) {
//     //         console.log("After 5 rounds, the computer won!")
//     //     } else {
//     //         console.log("After 5 rounds, its a draw!")
//     //     }