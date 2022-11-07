const startButton = document.querySelector('.startBtn');
const startBox = document.querySelector('.startBox');
let question = document.querySelector('.question');
let answerButtons = document.querySelector('.quizBox');
let resultsButton = document.querySelector('.seeResults');
let quizBox = document.querySelector('.quizBox');
let timeEl = document.querySelector('.timeEl')
let nameEl = document.querySelector('.nameInput');
let userScore = 0;
startButton.addEventListener('click', firstQuestion);



function firstQuestion(){
    nameEl.classList.add('hide');
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

    answerOne.addEventListener('click', correctAnswer, setTimeout((secondQuestion), 5000))
    answerTwo.addEventListener('click', incorrectAnswer, setTimeout((secondQuestion),5000))
    answerThree.addEventListener('click', incorrectAnswer, setTimeout((secondQuestion),5000))
    answerFour.addEventListener('click', incorrectAnswer, setTimeout((secondQuestion),5000))

    //timer:
    
    let secondsRemaining = 5;

    let timerInterval = setInterval(function(){
        secondsRemaining--;
        timeEl.textContent = "Time Remaining: " + secondsRemaining;

        if(secondsRemaining === 0 ){
            clearInterval(timerInterval);
        }
    }, 1000)
}

function secondQuestion(){
    answerButtons.classList.remove('hide')
    startBox.classList.add('hide')
    question.classList.remove('hide')
    document.body.style.backgroundColor = "rgb(109, 116, 109)"
    timeEl.classList.remove('hide');

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

    //timer:
    let secondsRemaining = 5;

    let timerInterval = setInterval(function(){
        secondsRemaining--;
        timeEl.textContent = "Time Remaining: " + secondsRemaining;

        if(secondsRemaining === 0 ){
            clearInterval(timerInterval);
        }
    }, 1000)
}

function thirdQuestion(){
    answerButtons.classList.remove('hide')
    startBox.classList.add('hide')
    question.classList.remove('hide')
    document.body.style.backgroundColor = "rgb(109, 116, 109)"
    timeEl.classList.remove('hide');

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

    //timer:
    
    let secondsRemaining = 5;

    let timerInterval = setInterval(function(){
        secondsRemaining--;
        timeEl.textContent = "Time Remaining: " + secondsRemaining;

        if(secondsRemaining === 0 ){
            clearInterval(timerInterval);
        }
    }, 1000)
}

function fourthQuestion(){
    answerButtons.classList.remove('hide')
    startBox.classList.add('hide')
    question.classList.remove('hide')
    document.body.style.backgroundColor = "rgb(109, 116, 109)"
    timeEl.classList.remove('hide');

    question.innerHTML = "What's 9+10?"
    let answerOne=document.getElementById('answer1');
    answerOne.innerHTML = "21"
    let answerTwo=document.getElementById('answer2');
    answerTwo.innerHTML = "19"
    let answerThree=document.getElementById('answer3');
    answerThree.innerHTML = "4"
    let answerFour=document.getElementById('answer4');
    answerFour.innerHTML = "7"

    answerOne.addEventListener('click', incorrectAnswer, setTimeout(seeResult, 5000))
    answerTwo.addEventListener('click', correctAnswer, setTimeout(seeResult, 5000))
    answerThree.addEventListener('click', incorrectAnswer, setTimeout(seeResult, 5000))
    answerFour.addEventListener('click', incorrectAnswer, setTimeout(seeResult, 5000))

    //timer:
    
    let secondsRemaining = 5;

    let timerInterval = setInterval(function(){
        secondsRemaining--;
        timeEl.textContent = "Time Remaining: " + secondsRemaining;

        if(secondsRemaining === 0 ){
            clearInterval(timerInterval);
        }
    }, 1000)
}


function correctAnswer(){
    console.log("correct")
    document.body.style.backgroundColor = "green";
    answerButtons.classList.add('hide');
    timeEl.classList.add('hide');
    question.innerHTML = "Correct!";
    userScore = userScore + 1;
    clearInterval();

}

function incorrectAnswer(){
    console.log('incorrect')
    document.body.style.backgroundColor = "red";
    answerButtons.classList.add('hide');
    timeEl.classList.add('hide');
    question.innerHTML = "Incorrect!"
}

function seeResult(){
    document.body.style.backgroundColor = "rgb(109, 116, 109)"
    timeEl.classList.add('hide');
    quizBox.classList.add('hide');
    startButton.classList.add('hide');
    startBox.classList.remove('hide');
    resultsButton.classList.remove('hide');
    resultsButton.addEventListener('click', userResults)
    question.innerHTML = "";

    let name = document.createElement('input');

}

function userResults(){
    resultsButton.classList.add('hide');
    startButton.classList.remove('hide');
    startButton.innerHTML = "Restart";
    document.body.style.backgroundColor = "rgb(109, 116, 109)"
    let finalResults = document.createElement("h1");
    finalResults.innerHTML = `Your Final Score is ${userScore}` + " out of 4!"
    document.body.appendChild(finalResults);
    finalResults.classList.add('quizContainer');
    localStorage.setItem('name', nameEl.value);
    localStorage.setItem('score', userScore);

}