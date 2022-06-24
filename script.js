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
        output.innerHTML = (`It's a tie! You both choose ${computerSelection}.`)
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

        }

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
    replay.classList.remove('active')

})