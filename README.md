# Coding Quiz

## Description
This application is a quiz which is designed to test the user's knowledge of Jvascript fundamentals. The rules are very simple and are as follows:

* There are currently ten questions to be answered.
* The user has 90 seconds in order to complete the quiz.
* When a question is answered incorrectly, a further 10 secods is removed from the timer.
* Each correct question is worth 10 points, with the total score being showcased once the timer ends.

**The functionality is achieved through the following means:**

* Questions provided via an array within the **question.js file**.
* The majority of the game functionality can be found within the **scores.js file**.
  * Document query selectors used to find HTML elements and Add/Remove element methods used to dynamically updaed the game content.
  * Timer is set to 90 seconds within a timer variable, with setInterval function used to decrement the time by 1 second.
  * ForEach loops used to cycle through questions and add a new one each time an answer has been given.
  * Score and initials logged to local storage, to be retrieved on the highscores page.
  * Event Listeners used to start game and submit score.
* The **scores.js** file contains getItem function to retrieve the scores data and then adds it to the list.

