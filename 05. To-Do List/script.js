
// Input, add button, and task-container Variables
let input = document.getElementById("task-input");
let addBtn = document.getElementById("add-task-btn");
let taskContainer = document.querySelector("#task-container");


// Event listener for adding new task on user click, if input value exists.
addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    let taskWrapper = document.createElement("div");
    taskWrapper.classList.add("task-wrapper");
    
    // Create a paragraph element that has input value as it's text.
    let singleTask = document.createElement("p");
    singleTask.innerText = input.value;

    // Create a button element to check tasks.
    let checkBtn = document.createElement("button");
    checkBtn.classList.add("btn");
    checkBtn.id = "check-btn";
    checkBtn.innerHTML = `<iconify-icon icon="mingcute:check-fill"></iconify-icon>`;

    // Create a button element to delete tasks.
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.id = "delete-btn";
    deleteBtn.innerHTML = `<iconify-icon icon="fluent:delete-16-filled"></iconify-icon>`;

    // Appending input value, check, and remove buttons to their parent.
    taskContainer.appendChild(taskWrapper);
    taskWrapper.appendChild(singleTask);
    taskWrapper.appendChild(checkBtn);
    taskWrapper.appendChild(deleteBtn);

    // Empty input field after adding any task.
    input.value = "";

    // Event listener for checking tasks on user click.
    checkBtn.addEventListener("click", () => {
      singleTask.style.textDecoration = "line-through";
    });

    // Event listener for removing tasks on user click.
    deleteBtn.addEventListener("click", () => {
      taskWrapper.remove();
    });
  } else {

    // View alert if user clicked the add task button, without entering a value in the input field.
    window.alert("Please enter your task first");
  }
});
