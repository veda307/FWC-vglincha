const list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

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
	const items = list.querySelectorAll(".todo-item");
	const texts = [];
	items.forEach(function (item) {
		texts.push(item.textContent);
	});
	setCookie("todoList", JSON.stringify(texts));
}

function createTodoElement(text) {
	const item = document.createElement("div");
	item.className = "todo-item";
	item.textContent = text;

	item.addEventListener("click", function () {
		const confirmed = confirm("Remove this to-do item?");
		if (confirmed) {
			item.remove();
			saveList();
		}
	});

	return item;
}

function addTodo(text) {
	const item = createTodoElement(text);
	list.insertBefore(item, list.firstChild);
	saveList();
}

function loadList() {
	const saved = getCookie("todoList");
	if (!saved) {
		return;
	}
	const texts = JSON.parse(saved);
	texts.forEach(function (text) {
		const item = createTodoElement(text);
		list.appendChild(item);
	});
}

newBtn.addEventListener("click", function () {
	const text = prompt("Enter a new to-do:");
	if (text !== null && text.trim() !== "") {
		addTodo(text.trim());
	}
});

loadList();