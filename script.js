'use strict';

const timeLeft = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');
const squares = document.querySelectorAll('.square');
const startButton = document.querySelector('.start');
const againtButton = document.querySelector('.again');
let molePosition;
let score = 0;
const totalTime = 60;
let currentTime = totalTime;
let countDownTimeId;
let moleTimerId;

timeLeft.innerHTML = currentTime;

document.querySelector('.start').addEventListener('click', function () {
    moleTimerId = setInterval(function () {
        squares.forEach(square => square.classList.remove('mole'));
        const randomNumber = Math.floor(Math.random() * squares.length);
        const randomSquare = squares[randomNumber];
        randomSquare.classList.add('mole');
        molePosition = randomSquare.id;
    }, 550)
    countDownTimeId = setInterval(countDown, 1000);
})

function countDown() {
    currentTime--;
    timeLeft.innerHTML = currentTime;
    if (currentTime === 0) {
        clearInterval(countDownTimeId);
        clearInterval(moleTimerId);
    }
}

squares.forEach(square => square.addEventListener('click', function () { // for each square that exists in squares - 
    if (square.id === molePosition && currentTime !== 0) {
        score++;
        scoreDisplay.innerHTML = score;
    }
}));

document.querySelector('.again').addEventListener('click', function () {
    squares.forEach(square => square.classList.remove('mole'));
    score = 0;
    currentTime = totalTime;
    scoreDisplay.innerHTML = score;
    timeLeft.innerHTML = currentTime;
    clearInterval(countDownTimeId);
    clearInterval(moleTimerId);
})



