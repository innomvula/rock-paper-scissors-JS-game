// set the score to win the game

function getWinScore() {
    const bestOf = parseInt(prompt("Best of: "));
    const winScore = Math.floor(bestOf/2) + 1;
    return winScore;
}

// get the computer choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3); // generates a random number between 0 and 2
    let cpuChoice = options[i]; // use random number to select cpu option from rps list
    return [options, cpuChoice];
}

// get the user's choice
function getUserChoice() {
   
    let userChoice = prompt("rock, paper, or scissors?"); // request user's choice of hand
    return userChoice;
}

// Rock Paper scissors
function ropasc() {
    let userScore = 0
    let cpuScore = 0
    let winScore = getWinScore()
    let haveWinScore = false
    rps = getComputerChoice()[0]

    while (haveWinScore == false) {
        let cpuChoice = getComputerChoice()[1]
        let userChoice = getUserChoice()

        // check if user choice is in list of availble options. 
        // If not print error statement and request choice again.
        
        if (!rps.includes(userChoice)) {
            console.log("Error! Incorrect input. Make sure to type rock, paper or scissors.");
        }

        // if the user choice is in the list of available options, we can now compare to the cpu's choice
        // and determine a winner for the round
    
        if (userChoice == cpuChoice) {
            console.log(`Score: ${userScore}-${cpuScore}`);
        }
        else {
            if (userChoice == "rock" && cpuChoice == "paper") {
                cpuScore++; //increment score of winner
                console.log(`Score: ${userScore}-${cpuScore}`);
            }
            else if (userChoice == "rock" && cpuChoice == "scissors") {
                userScore++;
                console.log(`Score: ${userScore}-${cpuScore}`);
            }
            else if (userChoice == "paper" && cpuChoice == "rock") {
                userScore++;
                console.log(`Score: ${userScore}-${cpuScore}`);
            }
            else if (userChoice == "paper" && cpuChoice == "scissors") {
                cpuScore++;
                console.log(`Score: ${userScore}-${cpuScore}`);
            }
        
            else if (userChoice == "scissors" && cpuChoice == "rock") {
                cpuScore++;
                console.log(`Score: ${userScore}-${cpuScore}`);
            }
            else if (userChoice == "scissors" && cpuChoice == "paper") {
                userScore++;
                console.log(`Score: ${userScore}-${cpuScore}`);
            }
        
        }
    
        // Check to see if user or cpu has the winning score
        if (userScore == winScore || cpuScore == winScore) {
            haveWinScore = true;
        }
    }
    
    if (userScore > cpuScore) {
        console.log("Congratulations you are the winner!");
    }
    
    else {
        console.log("The CPU is the winner, better luckk next time!");
    }
    

}