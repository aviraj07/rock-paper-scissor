let move = ['rock', 'paper', 'scissor'];
let userCount = 0;
let computerCount = 0;
document.querySelector('.container').style.display = 'block';
document.querySelector('.won').style.display = 'none';

function computerPlay() {
    let computerMove = Math.floor(Math.random() * move.length);
    return move[computerMove];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == null) {
        return "Invalid Selection"
    }


    playerSelection = playerSelection.toLowerCase().trim();
    document.querySelector('.chosen').textContent = `Computer: ${computerSelection}, You: ${playerSelection}`;

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {

        if (playerSelection === 'rock' && computerSelection === 'paper') {

            return "You Lose! Paper beats Rock";
        }

        else if (playerSelection === 'rock' && computerSelection === 'scissor') {
            return "You Won! Rock beats Scissor";
        }

        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You Won! Paper beats Rock";
        }

        else if (playerSelection === 'paper' && computerSelection === 'scissor') {
            return "You Lose! Scissor beats Paper";
        }

        else if (playerSelection === 'scissor' && computerSelection === 'paper') {
            return "You Won! Scissor beats Paper";
        }

        else if (playerSelection === 'scissor' && computerSelection === 'rock') {
            return "You Lose! Rock beats Scissor";
        }

        else {
            return "That's a tie.";
        }
    }

    else {
        return "Invalid Selection.";
    }



}

// function game(){

//     let count = 0;
//     for(let i = 0; i < 5; ++i){
//         let playerSelection = window.prompt("Make your move",'rock');
//         let computerSelection = computerPlay();
//         let result = playRound(playerSelection, computerSelection);
//         let Result = result.substring(4,5);

//         if (Result === 'W'){
//             count++;
//             console.log(result);
//             console.log(`Your score: ${count}`);
//         }
//         else if (Result === 'L'){
//             count--;
//             console.log(result);
//             console.log(`Your score: ${count}`);
//         }

//         else{
//             console.log(result);
//             console.log(`Your score: ${count}`);
//         }
//     }
// }

// game();


// document.querySelector('#rock').addEventListener('click',function(e){
//     console.log(e.target.id);
// });

// get the user move
document.querySelectorAll('button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e.target.id);
        computerSelection = computerPlay();
        let result = playRound(e.target.id, computerSelection);
        let Result = result.substring(4, 5);
        if (Result === 'W') {
            userCount++;
            
        }
        else if (Result === 'L') {
            computerCount++;
        }

        document.querySelector('.counter').textContent = `Your score: ${userCount}, \xa0 Computer score: ${computerCount}`;

        if (userCount === 5){
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.won').style.display = 'block';
            document.querySelector('.won').textContent = 'You Won!';
            document.querySelector('.won').style.color = 'green';

        }
        else if(computerCount === 5){

            document.querySelector('.container').style.display = 'none';
            document.querySelector('.won').style.display = 'block';
            document.querySelector('.won').textContent = 'You Lose :(';
            document.querySelector('.won').style.color = 'red';
        }

        document.querySelector('.result').textContent = `\n${result}`;
    })
})