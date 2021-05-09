let quizSection = document.getElementById('questions');
let scoreSection = document.getElementById('score');
//let submitButton = document.getElementById('submit');
let startButton = document.getElementById('start');


let quizQuestions = [
    [
    ["question", "Which number is NOT a prime number?"],
    ["answers", ["7", "14", "8", "16"]],
    ["correctAnswer", "0"]
    ],

    [
	["question", "Who invented JavaScript?"],
    ["answers", ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "George Bush"]],
    ["correctAnswer", "2"]
    ],

    [
	["question", "What is my favorite color?"],
    ["answers", ["Red", "Yellow", "Green", "Blue"]],
    ["correctAnswer", "0"]
    ],

    [
	["question", "What is the browser we use for class?"],
    ["answers", ["Internet Explorer", "Firefox", "Edge", "Chrome"]],
    ["correctAnswer", "3"]
    ],

    [
	["question", "What color is a red fire truck?"],
    ["answers", ["Yellow", "Red", "Orange", "Black"]],
    ["correctAnswer", "1"]
    ],
	
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


    console.log(questionNumber);
    console.log("Quiz Question Number:: " + quizQuestions[questionNumber][0]);

    quizSection.children[1].textContent = "";
    quizSection.children[0].textContent = quizQuestions[questionNumber][0][1];

    console.log(quizQuestions[questionNumber].length);

    for(i = 0; i < quizQuestions[questionNumber][1][1].length; i++) {
        let quizAnswerQuestion = document.createElement("button");
        //quizAnswerQuestion = setAttribute("value", quizQuestions[questionNumber][1][1][i]);
        quizAnswerQuestion.innerHTML = quizQuestions[questionNumber][1][1][i];
        document.body.appendChild(quizAnswerQuestion);
    }

    //document.body.appendChild(quizAnswerQuestion);

    //let submitButton = document.createElement("button");
    //submitButton.innerHTML = "Submit";
    //document.body.appendChild(submitButton);

    //quizQuestions[questionNumber].forEach(element => console.log(element));


    
    //document.getElementById("questions").innerHTML = quizQuestions[questionNumber].answers;



}









function endQuiz(message) {
    console.log(message);
}

let hidden = false;

function hideButton() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById("start").style.visibility = "hidden";
    } else {
        document.getElementById("start").style.visibility = "visible";
    }
}

//  Start Button
startButton.addEventListener("click", function () {
    startQuiz();
});

//submitButton.addEventListener("click", function () {
//    assembleQuiz();
//});


