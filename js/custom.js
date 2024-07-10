//In the HTML, create a form that has the following inputs:
//name
//first favorite number
//second favorite number
//a radio button asking the user if they want to add or subtract
//a submit button

//in the JS, create your submit function and save the values to global variables
//create another function that takes in parameters for name, num1, num2, and if they want to add or subtract
//run the calculation and return a sentence that reads: "Hi {name}! When we add your favorite numbers, the answer is {num}"

//create a third function whose job it is to display the sentence to the user on the screen
//TIP: think about where should this function be called.

const form = document.getElementById("form");
let name;
let favNum1;
let favNum2;
let operation;
let sentence;
let response = document.getElementById("sentence");
console.log(response);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
	console.log(dataObject);
	form.reset();
	name = dataObject.name;
	favNum1 = Number(dataObject.favNum1);
	favNum2 = Number(dataObject.favNum2);
	operation = dataObject.operation;
	showMeTheNumber(name, favNum1, favNum2, operation);
	displaySentence();
}

function showMeTheNumber(name, num1, num2, operation) {
	let answer;
	if (operation === "add") {
		answer = num1 + num2;
	} else if (operation === "subtract") {
		answer = num1 - num2;
	} else if (operation === "multiply") {
		answer = num1 * num2;
	} else if (operation === "divide") {
		answer = num1 / num2;
	}
	sentence = `Hi ${name}, When we ${operation} your favorite numbers, the answer is ${answer}.`;
	return sentence;
}

function displaySentence() {
	response.textContent = sentence;
}
