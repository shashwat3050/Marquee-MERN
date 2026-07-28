// Select DOM elements
const taskInput = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("list");

// Function to add a task
function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        return;
    }

    // Create <li>
    const li = document.createElement("li");

    // Create <span>
    const taskText = document.createElement("span");
    taskText.innerText = taskValue;

    // Create button group
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    // Create Complete button
    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.innerText = "Complete";

    // Create Remove button
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.innerText = "Remove";

    // Append buttons to button group
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(removeBtn);

    // Append span and button group to li
    li.appendChild(taskText);
    li.appendChild(btnGroup);

    // Add li to ul
    todoList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Complete button functionality
    completeBtn.addEventListener("click", function () {
        taskText.classList.toggle("completed");

        if (taskText.classList.contains("completed")) {
            completeBtn.innerText = "Completed";
        } else {
            completeBtn.innerText = "Complete";
        }
    });

    // Remove button functionality
    removeBtn.addEventListener("click", function () {
        li.remove();
    });
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on pressing Enter
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});