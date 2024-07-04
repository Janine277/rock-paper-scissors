let compChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    a = Math.floor(Math.random()*3);
    alert(a);
    if (a == 0){
        compChoice = "rock";
    }else if( a == 1){
        compChoice = "paper";
    }else{
        compChoice = "scissors";
    }
}

function getHumanChoice(){
    humanChoice = prompt("Please enter rock, paper or scissors").toLowerCase();
}

function playRound(compChoice, humanChoice){
    
    if (compChoice == "rock"){
        if(humanChoice == "scissors"){
            computerScore++; 
            alert("You loose " + compChoice +  " beats " + humanChoice);
        }else if(humanChoice == "paper"){
            humanScore++;
            alert("You win "+ humanChoice+ " beats "+ compChoice);
        } 

    }else if (compChoice == "paper"){
        if(humanChoice == "rock"){
            computerScore++; 
            alert("You loose " + compChoice +  " beats " + humanChoice);
        }else if(humanChoice == "scissors"){
            humanScore++;
            alert("You win "+ humanChoice+ " beats "+ compChoice);
        } 
    }else if (compChoice == "scissors"){
        if(humanChoice == "paper"){
            computerScore++; 
            alert("You loose " + compChoice +  " beats " + humanChoice);
        }else if(humanChoice == "rock"){
            humanScore++;
            alert("You win "+ humanChoice+ " beats "+ compChoice);
        } 
    } console.log("human Score: ", humanScore , "computer Score: ", computerScore);
}

function rockPaperScissor(){
    while(humanScore < 5 && computerScore <5){
        getComputerChoice();
        getHumanChoice();
        playRound(compChoice, humanChoice);
    }
    if (humanScore == 5){
        alert("Human Won!");
    }else {
        alert("Computer Won!");
    }
}

rockPaperScissor();
