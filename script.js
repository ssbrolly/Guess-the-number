'use strict';

const number = document.querySelector('.number');
const input = document.querySelector('.input');
const check = document.querySelector('.check');
const startGuessing = document.querySelector('.start-guessing');
const again = document.querySelector('.again');

const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');

// Random number generator //
let randomNum = 0;
const ranNumGen = () => {
	randomNum = Math.floor(Math.random() * 20) + 1;
	console.log(randomNum);
};

ranNumGen();

let scoreNum = 20;
let highScore = [];

// Limit 2 digit input in the input field //
input.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		return null;
	} else if (input.value.length >= 0) {
		input.value = input.value.slice(0, 1);
	}
});

// Reset function //
function reset() {
	ranNumGen();
	scoreNum = 20;
	score.innerHTML = scoreNum;
	input.value = '';
	number.innerHTML = '?';
}

// correct function //
const correct = () => {
	number.innerHTML = randomNum;
	startGuessing.innerHTML = 'Correct!';
	highScore.push(scoreNum);

	let highestScore = Math.max(...highScore);
	highscore.innerHTML = highestScore;
	scoreNum = 0;
	console.log(highScore);
};

const scoreAcc = () => {
	if (scoreNum <= 0) {
		scoreNum = 0;
	} else {
		scoreNum--;
		score.innerHTML = scoreNum;
	}
};

// Correct Number assessor //
const correctNum = () => {
	let int = parseInt(input.value);

	if (randomNum > int) {
		startGuessing.innerHTML = 'Too Low!';
		scoreAcc();
	} else if (int > 20) {
		input.value = '';
		startGuessing.innerHTML = 'Please guess between 1 through 20!';
	} else if (randomNum < int) {
		startGuessing.innerHTML = 'Too High!';
		scoreAcc();
	} else if (randomNum === int) {
		correct();
	}
};

// Again button //
again.addEventListener('click', () => {
	reset();
});

// Check button //
check.addEventListener('click', () => {
	correctNum();
});

// 'Enter' key to initiate correctNum() //
window.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		correctNum();
	}
});
