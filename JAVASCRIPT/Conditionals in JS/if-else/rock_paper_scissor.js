let playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

let randomNumber = Math.random();
let computerChoice;

if (randomNumber < 0.34) {
    computerChoice = "rock";
} else {
    if (randomNumber <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }
}

console.log("Player chose: " + playerChoice);
console.log("Computer chose: " + computerChoice);

if (playerChoice === "rock") {
    if (computerChoice === "rock") {
        console.log("Tie");
    } else {
        if (computerChoice === "paper") {
            console.log("You lose");
        } else {
            console.log("You win");
        }
    }
} else {
    if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("Result: It's a tie!");
        } else {
            if (computerChoice === "scissors") {
                console.log("You lose");
            } else {
                console.log("You win");
            }
        }
    } else {
        if (playerChoice === "scissor") {
            if (computerChoice === "scissor") {
                console.log("Tie");
            } else {
                if (computerChoice === "rock") {
                    console.log("You win");
                } else {
                    console.log("You lose");
                }
            }
        } else {
            console.log("Invalid input!");
        }
    }
}
