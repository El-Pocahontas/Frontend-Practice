const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        input.value = "";
    }
});

function addTask(text) {
    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}