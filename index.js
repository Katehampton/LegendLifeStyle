const Question = document.querySelector("#question");
const Answer = document.querySelector("#answer");
const Verdict = document.querySelector("#verdict");
const questionList = ["2 + 2", "3 + 3", "4 + 4"];
const answerList = ["4", "6", "8"];
const congratsList = ["Correct", "Well Done","Amazing"];
const worngList = ["Incorrect", "NOPE.", "NO! You're Wrong"];

var number = 0;


Question.innerHTML = text;

function quizFunction() {
    if (Answer.value == answerList[number]){
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
    Question.innerHTML = text;

}