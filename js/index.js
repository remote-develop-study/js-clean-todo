import { $ } from './utils.js';

const $todoInput = $('#new-todo-title');
const $todoList = $('#todo-list');

const makeTodoItem = (title) => `
<li>
  <div class="view">
    <input class="toggle" type="checkbox" />
    <label class="label">${title}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="${title}" />
</li>
`;

const addTodoItem = ({ key, target }) => {
	if (key === 'Enter') {
		const newTodoItem = makeTodoItem(target.value);
		$todoList.insertAdjacentHTML('beforeend', newTodoItem);
		target.value = '';
	}
	return;
};

const deleteTodoItem = ({ target }) => {
	if (target.classList.contains('destroy')) target.closest('li').remove();
};

const addEvents = () => {
	$todoInput.addEventListener('keyup', addTodoItem);
	$todoList.addEventListener('click', deleteTodoItem);
};

window.onload = () => addEvents();
