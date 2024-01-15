const userScoreInformationEL = document.querySelector('#highscores');
const clearHighScoresEL = document.querySelector('#clear');

let userScores = JSON.parse(localStorage.getItem("High Scores") || "[]");


userScores.sort((a, b) => b.score - a.score);

userScores.forEach(scoreObj => {
    let userScoresContent = document.createElement("li");
    userScoresContent.textContent = `${scoreObj.initials} - ${scoreObj.score}`;
    userScoreInformationEL.appendChild(userScoresContent);
});


clearHighScoresEL.addEventListener("click", function()
{localStorage.clear();
userScoreInformationEL.innerHTML = "";
});
