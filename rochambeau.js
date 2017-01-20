// This is the varaible that stores the score.
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];
var mScore = [0, 0, 0];
// The variables store the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors
var playerChoice;
var computerChoice;

function playGame() {
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    }
    else if (playerChoice == 0 && computerChoice == 2) {
        // Rock beats scissors - a win!
        console.log("win");
        return 1;
<<<<<<< HEAD
    } else if (playerChoice == 1 && computerChoice == 0) {
        // Paper beats rock - a win!
=======
    }
    else if (playerChoice == 1 && computerChoice == 0) {
        // Paper beats scissors - a win!
>>>>>>> origin/master
        console.log("win");
        return 1;
    }
    else if (playerChoice == 2 && computerChoice == 1) {
        // Scissors beats paper - a win!
        console.log("win");
        return 1;
<<<<<<< HEAD
    } else if (playerChoice == 2 && computerChoice == 3) {
        console.log("win");
        return 1;
    } else if (playerChoice == 1 && computerChoice == 4) {
        console.log("win");
        return 1;
    } else if (playerChoice == 0 && computerChoice == 3) {
        console.log("win");
        return 1;
    } else if (playerChoice == 3 && computerChoice == 4) {
        console.log("win");
        return 1;
    } else if (playerChoice == 3 && computerChoice == 1) {
        console.log("win");
        return 1;
    } else if (playerChoice == 4 && computerChoice == 0) {
        console.log("win");
        return 1;
    } else if (playerChoice == 4 && computerChoice == 2) {
        console.log("win");
        return 1;
    } else {
=======
    }
    else {
>>>>>>> origin/master
        // All other combinations are losses
        console.log("lose");
        return -1;
    }
}

function displayScoreBoard(winsId, lossesId, tiesId) {
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
}

function displayMatchBoard(mWinsId, mLossesId, mTiesId) {
    document.getElementById(mWinsId).innerHTML = mScore[0];
    document.getElementById(mLossesId).innerHTML = mScore[2];
    document.getElementById(mTiesId).innerHTML = mScore[1];
}

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

function updateMatchScore(val) {
    ++mScore[val];
    console.log("The match score is now " + mScore);
}

function resetScore() {
    score = [0, 0, 0];
}

function displayGameResult(resultId) {
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        updateScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
        if (score[0] == 2) {
            updateMatchScore(0);
            resetScore();
        }
    }
    else if (result == -1) {
        updateScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
        if (score[2] == 2) {
            updateMatchScore(2);
            resetScore();
        }
    }
    else if (score[0] == 1 && score[1] == 1 && score[2] == 1) {
        updateMatchScore(1);
        resetScore();
    }
    else {
        // Display that it was a tie
        updateScore(1);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
        if (score[1] == 2) {
            updateMatchScore(1);
            resetScore();
        }
    }
    if (score[0] == 1 && score[1] == 1 && score[2] == 1) {
        updateMatchScore(1);
        resetScore();
    }
}

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    // Generate computer's random choice
<<<<<<< HEAD
    computerChoice = Math.floor(Math.random()*5);
=======
    computerChoice = Math.floor(Math.random() * 3);
>>>>>>> origin/master
    console.log("Computer choice = " + computerChoice);
}
