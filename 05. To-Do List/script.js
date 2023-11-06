const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
let taskContainer = document.querySelector("#task-container");

addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    let taskWrapper = document.createElement("div");
    taskWrapper.classList.add("task-wrapper");

    let singleTask = document.createElement("p");
    singleTask.innerText = input.value;

    let checkBtn = document.createElement("button");
    checkBtn.classList.add("btn");
    checkBtn.id = "check-btn";
    checkBtn.innerHTML = `<iconify-icon icon="mingcute:check-fill"></iconify-icon>`;
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.id = "delete-btn";
    deleteBtn.innerHTML = `<iconify-icon icon="fluent:delete-16-filled"></iconify-icon>`;

    taskContainer.appendChild(taskWrapper);
    taskWrapper.appendChild(singleTask);
    taskWrapper.appendChild(checkBtn);
    taskWrapper.appendChild(deleteBtn);

    input.value = "";

    checkBtn.addEventListener("click", () => {
      singleTask.style.textDecoration = "line-through";
    });
    deleteBtn.addEventListener("click", () => {
      taskWrapper.remove();
    });
  } else {
    window.alert("Please enter your task first");
  }
});
