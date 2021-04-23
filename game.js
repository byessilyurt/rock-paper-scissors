let compChoices;
let userChoices;
let compScore = 0;
let userScore = 0;
let btns =Array.from(document.querySelectorAll("button"));
let roundResult = document.querySelector(".points p ");
let scores = document.querySelector(".points div ");
let tryAgainBtn = document.querySelector(".tryAgainBtn");


let computerPlay = () => {
    compChoices = {
        1: "rock",
        2: "paper",
        3: "scissors",
    }

    let compChoice = compChoices[(Math.ceil(Math.random() * 3))];
    return compChoice

    // return a choice among the trio.
}

let userPlay = (e) => {
    userChoices = {
        R: "rock",
        P: "paper",
        S: "scissors",        
    }
    let userChoice = userChoices[e.target.getAttribute('data-key')];

    return userChoice


    // when button clicked get the data key and match it to a choice.
}

let round = (userChoice, compChoice) => {
    if(userChoice == "rock" && compChoice == "scissors" ||
    userChoice == "paper" && compChoice == "rock" ||
    userChoice == "scissors" && compChoice == "paper" ){
    userScore += 1;
    scores.innerText = `Your score:${userScore}, Computer Score:${compScore} ` 
        if(userScore == 5){
            roundResult.innerText = `Game Over \n You won the game!`
            tryAgainBtn.style.display = "";    
        }else{
            roundResult.innerText = `Ohh you lucky! Beat the computer with the ${userChoice} over ${compChoice}.`
        }
    }else if(userChoice == "scissors" && compChoice == "rock" ||
    userChoice == "rock" && compChoice == "paper" ||
    userChoice == "paper" && compChoice == "scissors" ){
    compScore += 1;
    if(compScore == 5){
        roundResult.innerText = `Game Over \n Lost! Ohh, smart computers, they are getting better every day.`
        tryAgainBtn.style.display = "";
    }else{
        roundResult.innerText =`Noooo, computer gets it! You lost the round with ${userChoice} against ${compChoice}.` 
    }
    scores.innerText = `Your score:${userScore}, Computer Score:${compScore} ` 
    }else{
    roundResult.innerText = `It is a tie, another chance to win! You both chose ${userChoice}` 
    scores.innerText = `Your score:${userScore}, Computer Score:${compScore} ` 
    } 

   // take user and computer choices and compare them unless one of the scores is 5.
}


let game = (e) => {
    if(userScore == 5 || compScore == 5) {
        // one of the scores raises 5 end the game.
    }else{
    round(userPlay(e), computerPlay())
    }
}

let restart = () => {
    tryAgainBtn.style.display = "none";
    window.location = window.location;
}


btns.forEach(btn => btn.addEventListener('click', game));
// game starts when a button clicked.


tryAgainBtn.addEventListener("click", restart);    

