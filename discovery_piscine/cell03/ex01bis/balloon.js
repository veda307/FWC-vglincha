const colors = ["red", "green", "blue"];

let size = 200;
let colorIndex = 0;

const MIN_SIZE = 200;
const MAX_SIZE = 420;
const STEP_GROW = 10;
const STEP_SHRINK = 5;

function updateBalloon() {
	$("#balloon").css({
		width: size + "px",
		height: size + "px",
		backgroundColor: colors[colorIndex]
	});
}

$("#balloon").on("click", function () {
	size += STEP_GROW;

	if (size > MAX_SIZE) {
		size = MIN_SIZE;
	}

	colorIndex = (colorIndex + 1) % colors.length;
	updateBalloon();
});

$("#balloon").on("mouseleave", function () {
	size -= STEP_SHRINK;

	if (size < MIN_SIZE) {
		size = MIN_SIZE;
	}

	colorIndex = (colorIndex - 1 + colors.length) % colors.length;
	updateBalloon();
});