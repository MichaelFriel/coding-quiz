// Element variables

const questionContainerEl = document.querySelector('#questions');
const startQuizButtonEl = document.querySelector('#start');
const timerEl = document.querySelector('#time');
const timerTextEl = document.querySelector('.timer');
const quizButtonsEl = document.querySelector('.questionChoices');
const endScreenEl = document.querySelector('#end-screen');
const finalScoreEl = document.querySelector('#final-score');
const feedbackEl = document.querySelector('#feedback');
const submitButtonEl = document.querySelector('#submit');
const userInitialsEl = document.querySelector('#initials')

// Variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60
let question = questions[currentQuestionIndex];


// timer function, which counts down in intervals of 1 second and then returns Time is Up text and initialises endQuiz function when the timer hits 0

function countdown () {


const timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if(timeLeft <= 0) {
        clearInterval(timeInterval);

        timerEl.textContent = "Time is up!";
        endQuiz();
      }
}
,1000);
}

// Start quiz function, which adds the first question and hides the start CTA.

function startQuiz () {
    currentQuestionIndex = 0;
    timeLeft = 60;
    score = 0;
    countdown();
    addQuestion(questions[currentQuestionIndex]);
    startQuizButtonEl.style.display = 'none';
    questionContainerEl.classList.remove("hide");

}

// End Quiz function, which hides the questions and shows the end screen.
function endQuiz () {

    questionContainerEl.classList.add("hide");
    endScreenEl.classList.remove("hide");
    finalScoreEl.textContent = score;
}

// Provide Feedback function, which checks to see if the selected choice matches the answer and tells the user if they were right or wrong.

function provideFeedback(isCorrect) {
    if (isCorrect) {
        feedbackEl.textContent = "Correct!"
    } else {
        feedbackEl.textContent = "Wrong!"
    }

    setTimeout(function() {
        feedbackEl.textContent = ""
    }
    ,4000);
}

// This function creates a variable which finds the correct answer and checks to see if it matches the user choice.
// It then adds 1 to the currentQuestionIndex ad moves through the AddQuestion functions until endQuiz is initialised.

function checkAnswer (selectedChoice) {
    let correctAnswer = questions[currentQuestionIndex].answer
    let isCorrect = selectedChoice === correctAnswer;

    provideFeedback(isCorrect);
   

    if (selectedChoice === correctAnswer){
        score+= 10;
        document.getElementById("right").play();
    } else {
        timeLeft-= 10;
        document.getElementById("wrong").play();}
        
    if (timeLeft <=0) {
            endQuiz();
        }
        

    currentQuestionIndex += 1

    if (currentQuestionIndex < questions.length) {
        addQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }

    console.log(score);
    }


// Add question function adds h2 and divs which contain the question information. For each one, the checkAnswer function is initialised and the choice parameter is added to it.

function addQuestion (question) {
    questionContainerEl.innerHTML = "";


    const questionTitle = document.createElement("h2");
    questionTitle.textContent = question.title;
    questionContainerEl.appendChild(questionTitle);

    const questionChoices = document.createElement("div");
    question.choices.forEach(choice => {
        const choiceElement = document.createElement("button"); 
        choiceElement.textContent = choice;
        questionChoices.appendChild(choiceElement);
        choiceElement.classList.add("questionChoices")

        choiceElement.addEventListener("click", function() {
            checkAnswer(choice);
        });
    });


    questionContainerEl.appendChild(questionChoices);

}

    startQuizButtonEl.addEventListener("click", startQuiz)

// Event Listener and function for button submit.

function saveScores () {
    let highScores = JSON.parse(localStorage.getItem ("High Scores") || "[]");
    let userInitials = userInitialsEl.value;
    let currentScore = score

    if (userInitials.length < 2 || userInitials.length > 3) {
        alert("Initials field must contain 2 or 3 characters");
        return;
    }

    highScores.push({
        initials: userInitials,
        score: currentScore
    });

    localStorage.setItem("High Scores", JSON.stringify(highScores));

    window.location.href = "./highscores.html"
}


submitButtonEl.addEventListener("click", function (event) {
event.preventDefault();

saveScores();
});
