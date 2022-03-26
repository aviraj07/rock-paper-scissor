let move = ['rock', 'paper', 'scissor'];

function computerPlay(){
    let computerMove = Math.floor(Math.random()* move.length);
    return move[computerMove];
}

function playRound(playerSelection, computerSelection){

    if (playerSelection == null){
        return "Invalid Selection"
    }
    

    playerSelection = playerSelection.toLowerCase().trim();
    console.log(`Computer: ${computerSelection}, User: ${playerSelection}`);
    
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor')
    {
       
        if (playerSelection === 'rock' && computerSelection === 'paper'){
            
            return "You Lose! Paper beats Rock";
        }
    
        else if(playerSelection === 'rock' && computerSelection === 'scissor'){
            return "You Won! Rock beats Scissor";
        }
    
        else if(playerSelection === 'paper' && computerSelection === 'rock'){
            return "You Won! Paper beats Rock";
        }
    
        else if(playerSelection === 'paper' && computerSelection === 'scissor'){
            return "You Lose! Scissor beats Paper";
        }
    
        else if(playerSelection === 'scissor' && computerSelection === 'paper'){
            return "You Won! Scissor beats Paper";
        }
    
        else if(playerSelection === 'scissor' && computerSelection === 'rock'){
            return "You Lose! Rock beats Scissor";
        }
    
        else{
            return "That's a tie.";
        }
    }

    else{
        return "Invalid Selection.";
    }
    

    
}

function game(){
    
    let count = 0;
    for(let i = 0; i < 5; ++i){
        let playerSelection = window.prompt("Make your move",'rock');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        let Result = result.substring(4,5);
      
        if (Result === 'W'){
            count++;
            console.log(result);
            console.log(`Your score: ${count}`);
        }
        else if (Result === 'L'){
            count--;
            console.log(result);
            console.log(`Your score: ${count}`);
        }

        else{
            console.log(result);
            console.log(`Your score: ${count}`);
        }
    }
}

game();