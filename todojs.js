const form = document.querySelector('form');
const taskInput = document.querySelector('#taskInput');
const incompleteTasks = document.querySelector('#incompleteTasks');
const completedTasks = document.querySelector('#completedTasks');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const taskText = taskInput.value.trim();
	if (taskText !== '') {
		addTask(taskText);
		taskInput.value = '';
	}
});

function addTask(taskText) {
	const li = document.createElement('li');
	li.textContent = taskText;
	li.addEventListener('click', completeTask);
	incompleteTasks.appendChild(li);
}

function completeTask() {
	const li = this;
	li.classList.add('completed');
	li.removeEventListener('click', completeTask);
	completedTasks.appendChild(li);
}
