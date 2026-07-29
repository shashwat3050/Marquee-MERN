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

    // Create list item elements
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.innerText = taskValue;

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.innerText = "Complete";

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.innerText = "Remove";

    // Assemble elements
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(removeBtn);
    li.appendChild(taskText);
    li.appendChild(btnGroup);
    todoList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Event: Toggle task completion
    completeBtn.addEventListener("click", function () {
        taskText.style.textDecoration='line-through';
        completeBtn.style.display = 'none';
        completeBtn.remove();

    });

    // Event: Remove task
    removeBtn.addEventListener("click", function () {
        li.remove();
    });
}

// Event Listener for adding tasks (Button Click Only)
addBtn.addEventListener("click", addTask);
