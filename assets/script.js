const startButton = document.querySelector('.startBtn');
const startBox = document.querySelector('.startBox');
let question = document.querySelector('.question');
let userScore = 0;
startButton.addEventListener('click', quizStart);
let answerButtons = document.querySelector('.quizBox')



function quizStart(){
    answerButtons.classList.remove('hide')
    startBox.classList.add('hide')
    question.classList.remove('hide')

    question.innerHTML = "Which is not and example of a Primitive Data Type?"
    let answerOne=document.getElementById('answer1');
    answerOne.innerHTML = "underwear"
    let answerTwo=document.getElementById('answer2');
    answerTwo.innerHTML = "boolean"
    let answerThree=document.getElementById('answer3');
    answerThree.innerHTML = "number"
    let answerFour=document.getElementById('answer4');
    answerFour.innerHTML = "string"

    answerOne.addEventListener('click', correctAnswer, setTimeout(secondQuestion, 5000))
    answerTwo.addEventListener('click', incorrectAnswer, setTimeout(secondQuestion, 5000))
    answerThree.addEventListener('click', incorrectAnswer, setTimeout(secondQuestion, 5000))
    answerFour.addEventListener('click', incorrectAnswer, setTimeout(secondQuestion, 5000))

}

function secondQuestion(){
    answerButtons.classList.remove('hide')
    startBox.classList.add('hide')
    question.classList.remove('hide')
    document.body.style.backgroundColor = "rgb(109, 116, 109)"

    question.innerHTML = "What symbol can you use to create starter HTML Code?"
    let answerOne=document.getElementById('answer1');
    answerOne.innerHTML = "shift + 4"
    let answerTwo=document.getElementById('answer2');
    answerTwo.innerHTML = "CTRL + 3"
    let answerThree=document.getElementById('answer3');
    answerThree.innerHTML = "!"
    let answerFour=document.getElementById('answer4');
    answerFour.innerHTML = "*"

    answerOne.addEventListener('click', incorrectAnswer, setTimeout(thirdQuestion, 5000))
    answerTwo.addEventListener('click', incorrectAnswer, setTimeout(thirdQuestion, 5000))
    answerThree.addEventListener('click', correctAnswer, setTimeout(thirdQuestion, 5000))
    answerFour.addEventListener('click', incorrectAnswer, setTimeout(thirdQuestion, 5000))
}

function thirdQuestion(){
    answerButtons.classList.remove('hide')
    startBox.classList.add('hide')
    question.classList.remove('hide')
    document.body.style.backgroundColor = "rgb(109, 116, 109)"

    question.innerHTML = "What technique is important for coders when debugging within JavaScript?"
    let answerOne=document.getElementById('answer1');
    answerOne.innerHTML = "if statements"
    let answerTwo=document.getElementById('answer2');
    answerTwo.innerHTML = "for loops"
    let answerThree=document.getElementById('answer3');
    answerThree.innerHTML = "setInterval"
    let answerFour=document.getElementById('answer4');
    answerFour.innerHTML = "console.log()"

    answerOne.addEventListener('click', incorrectAnswer, setTimeout(fourthQuestion, 5000))
    answerTwo.addEventListener('click', incorrectAnswer, setTimeout(fourthQuestion, 5000))
    answerThree.addEventListener('click', incorrectAnswer, setTimeout(fourthQuestion, 5000))
    answerFour.addEventListener('click', correctAnswer, setTimeout(fourthQuestion, 5000))
}

function fourthQuestion(){
    answerButtons.classList.remove('hide')
    startBox.classList.add('hide')
    question.classList.remove('hide')
    document.body.style.backgroundColor = "rgb(109, 116, 109)"

    question.innerHTML = "What's 9+10?"
    let answerOne=document.getElementById('answer1');
    answerOne.innerHTML = "21"
    let answerTwo=document.getElementById('answer2');
    answerTwo.innerHTML = "19"
    let answerThree=document.getElementById('answer3');
    answerThree.innerHTML = "4"
    let answerFour=document.getElementById('answer4');
    answerFour.innerHTML = "7"

    answerOne.addEventListener('click', incorrectAnswer, setTimeout(userResults, 5000))
    answerTwo.addEventListener('click', correctAnswer, setTimeout(userResults, 5000))
    answerThree.addEventListener('click', incorrectAnswer, setTimeout(userResults, 5000))
    answerFour.addEventListener('click', incorrectAnswer, setTimeout(userResults, 5000))
}


function correctAnswer(){
    console.log("correct")
    document.body.style.backgroundColor = "green";
    answerButtons.classList.add('hide');
    question.innerHTML = "Correct!";
    userScore = userScore + 1;
}

function incorrectAnswer(){
    console.log('incorrect')
    document.body.style.backgroundColor = "red";
    answerButtons.classList.add('hide');
    question.innerHTML = "Incorrect!"
}

function userResults(){
    console.log(userScore)
    document.body.style.backgroundColor = "rgb(109, 116, 109)"
    let finalResults = document.createElement("h1");
    finalResults.innerHTML = ""
}