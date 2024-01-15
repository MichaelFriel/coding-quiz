const userScoreInformationEL = document.querySelector('#highscores');

let userScores = JSON.parse(localStorage.getItem("High Scores") || "[]");


userScores.forEach(scoreObj => {
    let userScoresContent = document.createElement("li");
    userScoresContent.textContent = `${scoreObj.initials} - ${scoreObj.score}`;
    userScoreInformationEL.appendChild(userScoresContent);
});


