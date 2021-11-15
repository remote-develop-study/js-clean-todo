import { $ } from './utils/querySelector';

const $todoList = $('.todo-list');
const $newTodo = $('.new-todo');

const todoItemTemplate = ({ id, text }) => `<li id=${id}>
                                              <div class="view">
                                                <input class="toggle" type="checkbox" />
                                                <label class="label">${text}</label>
                                                <button class="destroy"></button>
                                              </div>
                                              <input class="edit" value="${text}" />
                                            </li>`;

const addTodoItem = ({ key, target }) => {
  if (key !== 'Enter') return;

  if (target.value.trim().length < 1) return;

  $todoList.insertAdjacentHTML(
    'beforeend',
    todoItemTemplate({ id: Date.now(), text: target.value })
  );

  target.value = '';
};

const removeTodoItem = ({ target }) => {
  if (!target.classList.contains('destroy')) return;

  target.parentNode.parentNode.remove();
};

const app = () => {
  $todoList.addEventListener('click', removeTodoItem);
  $newTodo.addEventListener('keyup', addTodoItem);
};

window.onload = () => {
  app();
};
