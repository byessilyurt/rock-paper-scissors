let compChoices;
let userChoices;
let compScore = 0;
let userScore = 0;


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

let userPlay = () => {
    userChoices = {
        1: "rock",
        2: "paper",
        3: "scissors",        
    }
    let userChoice = userChoices[prompt("Make a choice! 1 for rock, 2 for paper, 3 for scissors.")];

    return userChoice


    // get user choice and return it
}

let round = (userChoice, compChoice) => {
    if(userChoice == "rock" && compChoice == "scissors" ||
    userChoice == "paper" && compChoice == "rock" ||
    userChoice == "scissors" && compChoice == "paper" ){
    userScore += 1; 
    console.log(`Ohh you lucky! Beat the computer with the ${userChoice} over ${compChoice}. `, "Your Score is:",userScore)        
    }else if(userChoice == "scissors" && compChoice == "rock" ||
    userChoice == "rock" && compChoice == "paper" ||
    userChoice == "paper" && compChoice == "scissors" ){
    compScore += 1;
    console.log(`Noooo, computer gets it! You lost the round with ${userChoice} against ${compChoice}. `, "Computers score is:",compScore)    
    }else{
    console.log("It is a tie, another chance to win!")
    } 

    // play a round of game.
}


let game = () => {
    for(let i= 0 ; i = 5 ; i++){
        round(userPlay(), computerPlay())
        if(userScore>2){
            console.log("You won the game boy!")
            break
        }else if(compScore>2){
            console.log("lost to a computer, try when you learn it..")
            break
        }
    }
    // main game func
}

game()
