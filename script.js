const taskdo = document.querySelector(".taskInput");
const taskdate = document.querySelector(".taskTime");
const addtask = document.querySelector(".addTaskButton");
const tasklist = document.querySelector(".taskList");

function createTaskElement(task) {
    const template = document.createElement("template");

    template.innerHTML = `
        <div class="taskItem">
            <input type="checkbox" class="taskCheckbox" ${task.completed ? "checked" : ""}>
            <span class="taskText"></span>
            <span class="taskDate"></span>
            <button class="deleteTaskButton">Delete</button>
            <button class="editTaskButton">Edit</button>
        </div>
    `;

    const fragment = template.content.cloneNode(true);
    const taskItem = fragment.querySelector(".taskItem");
    const textEl = taskItem.querySelector(".taskText");
    const dateEl = taskItem.querySelector(".taskDate");

    textEl.textContent = task.text;
    dateEl.textContent = task.date;

    if (task.completed) {
        taskItem.classList.add("completed");
    }

    return fragment;
}

function addTask(text, date) {
    const task = {
        text: text,
        date: date,
        completed: false
    };
    const taskElement = createTaskElement(task);
    tasklist.prepend(taskElement);
}

addtask.addEventListener("click", function () {
    const taskText = taskdo.value.trim();
    const taskTime = taskdate.value;

    if (taskText === "") {
        alert("Please enter a task.");
    } else {
        addTask(taskText, taskTime);
        taskdo.value = "";
        taskdate.value = "";
        taskdo.focus();
        saveTasks();
    }
});

tasklist.addEventListener("click", function (event) {
    const taskItem = event.target.closest(".taskItem");
    if (!taskItem) return;

    let changesMade = false;

    if (event.target.classList.contains("taskCheckbox")) {
        taskItem.classList.toggle("completed");
        changesMade = true;
    }

    if (event.target.classList.contains("deleteTaskButton")) {
        taskItem.remove();
        changesMade = true;
    }

    if (event.target.classList.contains("editTaskButton")) {
        const taskText = taskItem.querySelector(".taskText");
        const newTask = prompt("Edit your task:", taskText.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask.trim();
            changesMade = true;
        }
    }

    if (changesMade) {
        setTimeout(saveTasks, 0);
    }
});

function saveTasks() {
    const tasks = [];

    document.querySelectorAll(".taskItem").forEach(item => {
        tasks.push({
            text: item.querySelector(".taskText").textContent,
            date: item.querySelector(".taskDate").textContent,
            completed: item.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasklist.appendChild(taskElement);
    });
}

loadTasks();