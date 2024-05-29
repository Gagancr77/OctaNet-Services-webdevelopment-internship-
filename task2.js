document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const priorityInput = document.getElementById('priorityInput');
    const categoryInput = document.getElementById('categoryInput');

    const task = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const category = categoryInput.value;

    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = priority;
    li.innerHTML = `
        <span>${task} (${category}) - ${dueDate}</span>
        <div class="task-buttons">
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(li);

    const completeButton = li.querySelector('.complete');
    completeButton.addEventListener('click', () => {
        li.classList.toggle('complete');
    });

    const deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
    categoryInput.value = 'work';
}
