let quizSection = document.getElementById('questions');
let scoreSection = document.getElementById('score');
//let submitButton = document.getElementById('submit');
let startButton = document.getElementById('start');

let quizQuestions = [
    {
        question: "Which number is NOT a prime number?",
        answers: ["7", "14", "8", "16"],
        correctAnswer: "7"
    },
    {
        question: "Who invented JavaScript?",
        answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "George Bush"],
        correctAnswer: "Brendan Eich"
    },
    {
        question: "What is my favorite color?",
        answers: ["Red", "Yellow", "Green", "Blue"],
        correctAnswer: "Red"
    },
    {
        question: "What is the browser we use for class?",
        answers: ["Internet Explorer", "Firefox", "Edge", "Chrome"],
        correctAnswer: "Chrome"
    },
    {
        question: "What color is a red fire truck?",
        answers: ["Yellow", "Red", "Orange", "Black"],
        correctAnswer: "Red"
    }


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


    console.log(questionNumber);
    console.log("Quiz Question Number:: " + quizQuestions[questionNumber].question);

    quizSection.children[1].textContent = "";
    quizSection.children[0].textContent = quizQuestions[questionNumber].question;

    for (i = 0; i < quizQuestions[questionNumber].answers.length; i++) {
        let answerButton = document.createElement("button");
        answerButton.setAttribute("value", quizQuestions[questionNumber].answers[i]);
        answerButton.setAttribute("class", "answerButton");
        answerButton.innerHTML = quizQuestions[questionNumber].answers[i];
        document.body.appendChild(answerButton);
        answerButton.addEventListener("click", function () {
            // if button clicked does not equal current answer,deduct
            // if (quizQuestions[questionNumber].answers[1][i] === quizQuestions[questionNumber][1][2])
            console.log(this.value);
            // nextQuestion();
        });
    }

}









function endQuiz(message) {
    console.log(message);
}

let hidden = false;

function hideButton() {
    hidden = !hidden;
    if (hidden) {
        document.getElementById("start").style.visibility = "hidden";
    } else {
        document.getElementById("start").style.visibility = "visible";
    }
}

//  Start Button
startButton.addEventListener("click", function () {
    startQuiz();
});

// submitButton.addEventListener("click", function () {
//     assembleQuiz();
// });


