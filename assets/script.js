const startButton = document.getElementById('startBtn');
const answerButton = document.querySelector('.answerBtn');
const nextButton = document.getElementById('nextBtn');
const question = document.querySelector('.codeQuestion')

startButton.addEventListener('click', quizStart)

function quizStart(){
    answerButton.classList.remove('hide');
    nextButton.classList.remove('hide');
    startButton.classList.add('hide');
    question.classList.remove('hide');
}