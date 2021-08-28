const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playbtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playbtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //computer choise
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //here is where we call compare hands
                    compareHands(this.textContent, computerChoice);

                    //update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const ComputerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        ComputerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //update Text
        const winner = document.querySelector(".winner");
        //check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }
        //check for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }

    }

    //call all the inner functions
    startGame();
    playMatch();
};


//start the game
game();