const form = document.getElementById("calcForm");
const leftInput = document.getElementById("leftValue");
const rightInput = document.getElementById("rightValue");
const operatorSelect = document.getElementById("operator");

function isPositiveInteger(value) {
	if (value === "") {
		return false;
	}
	return /^[0-9]+$/.test(value);
}

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const leftStr = leftInput.value;
	const rightStr = rightInput.value;

	if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
		alert("Error :(");
		return;
	}

	const left = parseInt(leftStr, 10);
	const right = parseInt(rightStr, 10);
	const operator = operatorSelect.value;

	if ((operator === "/" || operator === "%") && right === 0) {
		alert("It's over 9000!");
		return;
	}

	let result;

	if (operator === "+") {
		result = left + right;
	} else if (operator === "-") {
		result = left - right;
	} else if (operator === "*") {
		result = left * right;
	} else if (operator === "/") {
		result = left / right;
	} else if (operator === "%") {
		result = left % right;
	}

	alert(result);
	console.log(result);
});

setInterval(function () {
	alert("Please, use me...");
}, 30000);