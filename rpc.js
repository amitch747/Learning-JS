function rpsGame(playerMove) {
    const randomNum = Math.random();

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
    }
    else if (
        (computerMove === 'paper' && playerMove === 'scissors') ||
        (computerMove === 'scissors' && playerMove === 'rock') ||
        (computerMove === 'rock' && playerMove === 'paper')
    ) {
        result = 'Win';
    }
    else {
        result = 'loss'            
    }
    
    alert(`You picked ${playerMove}. Comp picked ${computerMove}. This is a ${result}`);
}