function setCookie(name, value) {
	document.cookie = name + "=" + encodeURIComponent(value) + ";path=/;max-age=" + (60 * 60 * 24 * 365);
}

function getCookie(name) {
	const cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		const parts = cookies[i].trim().split("=");
		if (parts[0] === name) {
			return decodeURIComponent(parts[1]);
		}
	}
	return null;
}

function saveList() {
	const texts = [];
	$(".todo-item").each(function () {
		texts.push($(this).text());
	});
	setCookie("todoList", JSON.stringify(texts));
}

function createTodoElement(text) {
	const $item = $("<div>").addClass("todo-item").text(text);

	$item.on("click", function () {
		const confirmed = confirm("Remove this to-do item?");
		if (confirmed) {
			$item.remove();
			saveList();
		}
	});

	return $item;
}

function addTodo(text) {
	const $item = createTodoElement(text);
	$("#ft_list").prepend($item);
	saveList();
}

function loadList() {
	const saved = getCookie("todoList");
	if (!saved) {
		return;
	}
	const texts = JSON.parse(saved);
	texts.forEach(function (text) {
		const $item = createTodoElement(text);
		$("#ft_list").append($item);
	});
}

$("#newBtn").on("click", function () {
	const text = prompt("Enter a new to-do:");
	if (text !== null && text.trim() !== "") {
		addTodo(text.trim());
	}
});

loadList();