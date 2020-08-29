let compScore = 0;
let userScore = 0;
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
main(); 

function main(){
    rock_div.addEventListener('click', function(){
        game("rock");
    });
    paper_div.addEventListener('click', function(){
        game("paper");             
    });
    scissors_div.addEventListener('click', function(){
        game("scissors");                     
    });
}

function game(userChoice){
    let compChoice = getComputerChoice();

    result_p.innerHTML = "User is " + userChoice+" and Comp is " + compChoice;
    setTimeout(function(){
        switch(userChoice + compChoice){
            case "scissorspaper":
                win("Scissors cuts paper. You won!");
                break;
            case "rockscissors":
                win("Rock breaks scissors. You won!");
                break;
            case "paperrock":
                win("Paper covers rock. You won!");
                break;
            case "rockpaper":
                lose("Paper covers rock. You lose!");
                break;
            case "paperscissors":
                lose("Scissors cuts paper. You lose!");
                break;
            case "scissorsrock":
                lose("Rock breaks scissors. You lose!");
                break;
            case "paperpaper":
            case "scissorsscissors":
            case "rockrock":
                result_p.innerHTML = "Draw!";
                break;
        }
        
    }, 3000);
    
}

function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function win(message){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = message;
    
}

function lose(message){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = message;
}

