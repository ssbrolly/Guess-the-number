'use strict';

const number = document.querySelector('.number');
const input = document.querySelector('.input');
const check = document.querySelector('.check');
const startGuessing = document.querySelector('.start-guessing');

let randomNum = Math.round(Math.random() * 20) + 1;
console.log(randomNum);

input.addEventListener('keypress', () => {
	console.log(input.value);
	if (input.value.length > 1) {
		input.value = input.value.slice(0, 2);
	}
});

const correctNum = () => {
	console.log(input.value);
	let int = parseInt(input.value);

	if (randomNum > int) {
		startGuessing.innerHTML = 'Too Low!';
	} else if (int > 20) {
		input.value = '';
		startGuessing.innerHTML = 'Please guess between 1 through 20!';
	} else if (randomNum < int) {
		startGuessing.innerHTML = 'Too High!';
	} else {
		startGuessing.innerHTML = 'Correct!';
		number.innerHTML = randomNum;
	}
};

check.addEventListener('click', () => {
	correctNum();
});

window.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		correctNum();
	}
});
