// Element variables

const userScoreInformationEL = document.querySelector('#highscores');
const clearHighScoresEL = document.querySelector('#clear');

// Function to retrieve the user info from local storare, sort it, and add it within <li> elements.

let userScores = JSON.parse(localStorage.getItem("High Scores") || "[]");

userScores.sort((a, b) => b.score - a.score);

userScores.forEach(scoreObj => {
    let userScoresContent = document.createElement("li");
    userScoresContent.textContent = `${scoreObj.initials} - ${scoreObj.score}`;
    userScoreInformationEL.appendChild(userScoresContent);
});


// function to clear local storage and empty the user info element to remove li content when reset highscore button is clicked.
clearHighScoresEL.addEventListener("click", function()
{localStorage.clear();
userScoreInformationEL.innerHTML = "";
});
