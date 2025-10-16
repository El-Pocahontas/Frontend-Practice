console.log("JS działa");

const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCounter = document.getElementById("task-counter");
const clearCompletedBtn = document.getElementById("clear-completed");
const sortBtn = document.getElementById("sort-tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(renderTask);
updateCounter();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();

    if (taskText !== "") {
        const newTask = { text: taskText, completed: false };
        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        input.value = "";

        updateCounter();
    }
});

function renderTask(task) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(task.text));
    if (task.completed) {
        li.classList.add("completed");
        updateCounter();
    }

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        task.completed = !task.completed;
        saveTasks();
        updateCounter();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        taskList.removeChild(li);
        tasks = tasks.filter(t => t !== task);
        saveTasks();
        updateCounter();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCounter() {
    const remaining = tasks.filter(t => !t.completed).length;
    taskCounter.textContent = `${remaining} zadań do zrobienia`;
}

clearCompletedBtn.addEventListener("click", function () {
    tasks = tasks.filter(t => !t.completed);
    saveTasks();
    renderAllTasks();
});

sortBtn.addEventListener("click", function () {
    tasks.sort((a, b) => a.completed - b.completed);
    saveTasks();
    renderAllTasks();
});

function renderAllTasks() {
    taskList.innerHTML = "";
    tasks.forEach(renderTask);
}
