const Question = document.querySelector("#question");
const Answer = document.querySelector("#answer");
const Verdict = document.querySelector("#verdict");
const questionList = ["How many essential vitamins are there", "What is the chemical name for Vitamin C", "How many chemical names are there for vitamin E", ];
const answerList = ["13", "Ascorbic Acid.", "2"];
const congratsList = ["Correct!", "Well Done!", "Amazing!"];
const wrongList = ["Incorrect", "Nope.", "No! You're wrong!"];
var number = 0; 
let text = questionList[number] + "?";
Question.innerHTML = text;
function quizFunction() {
    if (Answer.value == answerList[number]) {
        document.body.style.backgroundColor = "Green";
        Verdict.innerHTML = congratsList[number];
    } else {
        document.body.style.backgroundColor = "Red";
        Verdict.innerHTML = wrongList[number];
    }
    text = "";
}
function nextQuestion() {
    number += 1;
    text += questionList[number] + "?";
    Question.innerHTML = text;
}
