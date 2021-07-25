const Question = document.querySelector("#question");
const Answer = document.querySelector("#answer");
const Verdict = document.querySelector("#verdict");


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
var questions = [
    new Question("How many Essential Vitamins are there?",
 [ "12", "15", "13", "11" ], "11"),

function nextQuestion() {
    number += 1;
    Question.innerHTML = text;
}