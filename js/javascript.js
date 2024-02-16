const display = document.querySelector("#display");
const clearButton = document.querySelector(".clear-btn");
const numberButtons = document.querySelectorAll(".numBtn");
const calculateButton = document.querySelector(".calculate");
let currentEquation;
let nextEquation;
let currentOperator;

// What happens when you click on a number
for (button of numberButtons) {
	button.addEventListener("click", (e) => {
		if (isNaN(display.value)) {
			display.value = "";
		}
		display.value = display.value + e.target.textContent;
	});
}

// What happens when you click on an operator
const mathButtons = document.querySelectorAll(".operator");
for (button of mathButtons) {
	button.addEventListener("click", (e) => {
		currentOperator = e.target.textContent;
		currentEquation = Number(display.value);
		display.value = "";
	});
}

// What happens when you click on the clear button
clearButton.addEventListener("click", () => {
	display.value = "";
	currentEquation = null;
	nextEquation = null;
	currentOperator = null;
});

// What happens when you click on calculate button
calculateButton.addEventListener("click", () => {
	nextEquation = Number(display.value);
	calculate(currentEquation, nextEquation, currentOperator);
	currentEquation = display.value;
	nextEquation = null;
	currentOperator = null;
});

// Calculate function
const calculate = function (currentEquation, nextEquation, currentOperator) {
	if (currentOperator == "+") {
		display.value = currentEquation + nextEquation;
	} else if (currentOperator == "-") {
		display.value = currentEquation - nextEquation;
	} else if (currentOperator == "*") {
		display.value = currentEquation * nextEquation;
	} else if (currentOperator == "/") {
		display.value = currentEquation / nextEquation;
	}
};
