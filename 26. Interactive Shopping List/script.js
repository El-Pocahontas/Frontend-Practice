const form = document.getElementById("shopping-form");
const input = document.getElementById("item-input");
const list = document.getElementById("shopping-list");

let items = JSON.parse(localStorage.getItem("items")) || [];
items.forEach(renderItem);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
    const newItem = { text };
    items.push(newItem);
    saveItems();
    renderItem(newItem);
    input.value = "";
    }
});

function renderItem(item) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = item.text;

    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.type = "text";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edytuj";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";

    editBtn.addEventListener("click", function () {
        editInput.style.display = "inline";
        editInput.value = span.textContent;
        editInput.focus();

        editInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                span.textContent = editInput.value;
                item.text = editInput.value;
                saveItems();
                editInput.style.display = "none";
            }
        });
    });

    deleteBtn.addEventListener("click", function () {
        list.removeChild(li);
        items = items.filter(i => i !== item);
        saveItems();
    });
    li.appendChild(span);
    li.appendChild(editInput);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

function saveItems() {
    localStorage.setItem("items", JSON.stringify(items));
}