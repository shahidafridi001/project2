const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Add todo
addBtn.addEventListener("click", addTodo);

// Add todo when pressing Enter
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.className = "todo-item";

    // Create todo text
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todoText;

    // Mark as completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add list item to todo list
    todoList.appendChild(li);

    // Clear input
    todoInput.value = "";
    todoInput.focus();
}
