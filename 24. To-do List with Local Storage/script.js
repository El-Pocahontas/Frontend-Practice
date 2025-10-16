const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(renderTask);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();

    if (taskText !== "") {
        const newTask = { text: taskText, completed: false };
        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        input.value = "";
    }
});

function renderTask(task) {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
        li.classList.add("completed");
    }

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        task.completed = !task.completed;
        saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        taskList.removeChild(li);
        tasks = tasks.filter(t => t !== task);
        saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
