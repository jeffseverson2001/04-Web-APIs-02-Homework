let quizSection = document.getElementById('questions');
let scoreSection = document.getElementById('score');
let submitButton = document.getElementById('submit');
let startButton = document.getElementById('start');

let quizQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "George Bush"
        },
        correctAnswer: "c"
    },
    {
        question: "What is my favorite color?",
        answers: {
            a: "Red",
            b: "Yellow",
            c: "Green",
            d: "Blue"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the browser we use for class?",
        answers: {
            a: "Internet Explorer",
            b: "Firefox",
            c: "Edge",
            d: "Chrome"
        },
        correctAnswer: "d"
    },
    {
        question: "What color is a red fire truck?",
        answers: {
            a: "Yellow",
            b: "Red",
            c: "Green",
            d: "Black"
        },
        correctAnswer: "b"
    },
    {
        question: "Which number is NOT a prime number?",
        answers: {
            a: "7",
            b: "14",
            c: "8",
            d: "16"
        },
        correctAnswer: "a"
    }
];

console.log(quizQuestions);

//  Quiz Timer
let secondsLeft = 60;

function setQuizTimer() {
    let quizTimer = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft + " Seconds";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(quizTimer);
            endQuiz("Time has expired");
            // Calls function to create and append image
            //sendMessage();
            return;
        }

    }, 1000);
}

function startQuiz() {
    setQuizTimer();
    assembleQuiz();

}

//  Loop through questions
let questionNumber = 0;

function assembleQuiz() {
    //questions.textContent = "QUESTIONS HERE";

    let output = [];

    quizQuestions.forEach(
    
}

function endQuiz(message) {
    console.log(message);
}




//  Start Button
startButton.addEventListener("click", function () {
    startQuiz();
});

/*
let quizQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

function buildQuiz(){
    let output = [];

    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {

          // variable to store the list of possible answers
          let answers = [];

          // and for each available answer...
          for(letter in currentQuestion.answers){

            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }

          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );

      // finally combine our output list into one string of HTML and put it on the page
      quizSection.innerHTML = output.join('');
}

function showResults(){
    // gather answer containers from our quiz
  let answerContainers = quizSection.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    let answerContainer = answerContainers[questionNumber];
    let selector = `input[name=question${questionNumber}]:checked`;
    let userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  scoreSection.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
*/
