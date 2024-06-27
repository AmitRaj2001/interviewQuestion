//1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 



function debounce(func, delay) {
	let timer;

	return function () {
		clearTimeout(timer);

		timer = setTimeout(func, delay);
	};
} 

const debounceFunc = debounce(() => console.log('Hello World'), 3000);

debounceFunc();