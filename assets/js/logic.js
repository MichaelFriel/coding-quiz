const questionContainerEl = document.querySelector('#questions');
const startQuizButtonEl = document.querySelector('#start');
const timerEl = document.querySelector('#time');
const timerTextEl = document.querySelector('.timer');
const quizButtonsEl = questionContainerEl.querySelectorAll('.button');


let currentQuestionIndex = 0;
let score = 0;
const question = questions[currentQuestionIndex];
// timer

function countdown () {

let timeLeft = 60


const timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if(timeLeft === 0) {
        clearInterval(timeInterval);

        timerEl.textContent = "Time is up!";
      }
}
,1000);
}


function startQuiz (event) {
    currentQuestionIndex = 0;
    timeLeft = 60;
    countdown();
    addQuestion(questions[currentQuestionIndex]);
    startQuizButtonEl.style.display = 'none';
    questionContainerEl.classList.remove("hide");

}

function changeQuestion () {
    // when button is clicked, check whether or not it is the correct answer.
    // if answer is incorrect, then remove 10 seconds from time remaining.
    // if answer is correct, incremement the score variable by 1. (if choices === answer, then score++.)
    // once clicked, run addquestion function and increment currentQuestionIndex each time.
}

function reduceTime (x,y) {
return x - y
}



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
    });


    questionContainerEl.appendChild(questionChoices);

    console.log(questionContainerEl);

}

for (let i = 0; i < questions.length; i++) {
    addQuestion(questions[i])
    }

    startQuizButtonEl.addEventListener("click", startQuiz)

//     console.log(questionContainerEl);

    

    // const questionChoicesContainer = document.createElement("div");
    // questionChoices.textContent = question.choices


// Create questions and answer - Done
// Find all of the required elements through query selectors. - Done
// Write function which creates h2 elements and divs with choices. It should also display answer.
// For loop which goes through each question until time has run out.
// Empty content and then add the next question.
// Log score to local storage (variable which is added to)
// Pull this information from local storage and add to highscores page.
// Set timer which increments down by 1 every 1000ms. - Done
// Remove 10 from it every time a question is answered incorrectly.
// End the game when the timer variable hits 0.
// Redirect to the highscores page once this is completed.
// Add click event to the clear button, which empties content from local storage.

// NICE TO HAVE
// Timer to go up by 5 seconds with a correct answer
// Add more questions (50-100) and randomise the chosen questions each time, for longevity of game.
// Timer to turn red when the user has less than 10 seconds left (when var < 10, style:red)



// Thoughts
// Add a Current Question Inde