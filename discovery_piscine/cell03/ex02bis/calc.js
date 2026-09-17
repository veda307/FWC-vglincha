function isPositiveInteger(value) {
	if (value === "") {
		return false;
	}
	return /^[0-9]+$/.test(value);
}

$("#calcForm").on("submit", function (event) {
	event.preventDefault();

	const leftStr = $("#leftValue").val();
	const rightStr = $("#rightValue").val();

	if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
		alert("Error :(");
		return;
	}

	const left = parseInt(leftStr, 10);
	const right = parseInt(rightStr, 10);
	const operator = $("#operator").val();

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