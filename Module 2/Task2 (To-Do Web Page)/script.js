



const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskItem.appendChild(taskTextSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function () {
        completeTask(taskItem);
    });
    taskItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        deleteTask(taskItem);
    });
    taskItem.appendChild(deleteButton);

    pendingTasksList.appendChild(taskItem);
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    completedTasksList.appendChild(taskItem);
}

function deleteTask(taskItem) {
    taskItem.remove();
}