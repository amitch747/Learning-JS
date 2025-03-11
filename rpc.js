const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    displayScore();
}

function displayScore() {
    document.getElementById("score-display").innerText =
    `Wins: ${score.wins} - Losses: ${score.losses} - Ties: ${score.ties}`;
}

function rpsGame(playerMove) {
    const randomNum = Math.random();
    let computerMove = '';
    if (randomNum >= 0 && randomNum < 1/3) 
        computerMove = 'rock';
    else if (randomNum >= 1/3 && randomNum < 2/3)  
        computerMove = 'paper';
    else 
        computerMove = 'scissors'

    console.log(computerMove)

    let result = '';

    if(computerMove === playerMove) {
        result = 'Tie';
        score.ties++;
    }
    else if (
        (computerMove === 'paper' && playerMove === 'scissors') ||
        (computerMove === 'scissors' && playerMove === 'rock') ||
        (computerMove === 'rock' && playerMove === 'paper')
    ) {
        result = 'Win';
        score.wins++;
    }
    else {
        result = 'loss'
        score.losses++;            
    }
    
    alert(`You picked ${playerMove}. Comp picked ${computerMove}. This is a ${result}`);
    displayScore();
}