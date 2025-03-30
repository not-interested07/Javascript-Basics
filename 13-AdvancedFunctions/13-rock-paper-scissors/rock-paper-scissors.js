
const score = JSON.parse(localStorage.getItem('score')) || {Wins: 0, Losses : 0, Ties: 0};
function playGame(playerMove) {
    let computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove == 'scissors') {
            result = 'Tie.';
        }
        
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove == 'scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove == 'scissors') {
            result = 'You win.';
        }

    }

    if (result === 'You win.') {
        score.Wins += 1;
    } else if (result === 'You lose.') {
        score.Losses += 1;
    } else if (result === 'Tie.'){
        score.Ties += 1;
    }


    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You 
                                                    <img src="Images/${playerMove}-emoji.png" class="move-icon">
                                                    <img src="Images/${computerMove}-emoji.png" class="move-icon">
                                                    Computer.`;
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => { 
    playGame('scissors');
});


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        showResetConfirmation();
    }
});

function showResetConfirmation() {
    document.querySelector('.js-reset-confirmation').innerHTML = `  
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;  
    // You could use onclick="..." in the HTML above,
    // but it's recommended to use .addEventListener()
    document.querySelector('.js-reset-confirm-yes')
      .addEventListener('click', () => {
        resetGame();
        hideResetConfirmation();
      });
    
    document.querySelector('.js-reset-confirm-no')
      .addEventListener('click', () => {
        hideResetConfirmation();
      });
  }
  
// A helper function (it helps us reuse the
// code for hiding the confirmation message).
function hideResetConfirmation() {
document.querySelector('.js-reset-confirmation')
    .innerHTML = '';
}

function pickComputerMove() {
    let computerMove = '';
    randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = 
        `Wins : ${score.Wins}, Losses : ${score.Losses}, Ties : ${score.Ties}`;   
}

function resetGame() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
}

document.querySelector('.js-reset-button').addEventListener('click', ()=> {
    showResetConfirmation();
})


let isAutoPlay = false;
let intervalID;


function autoPlay() {
    const buttonElement = document.querySelector('.js-auto-play-button');
    if (!isAutoPlay) {
        buttonElement.innerHTML = 'Stop Playing!'
        intervalID  = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlay = true;
    } else {
        buttonElement.innerHTML = 'Auto Play'
        clearInterval(intervalID);
        isAutoPlay = false;
    }
}

document.querySelector('.js-auto-play-button').addEventListener('click', ()=> {
    autoPlay();
});

