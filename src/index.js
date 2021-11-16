import { addTodoItem, removeTodoItem } from './handler/todoItem';
import { $ } from './utils/querySelector';

const app = () => {
  const $todoList = $('.todo-list');
  const $newTodo = $('.new-todo');

  $todoList.addEventListener('click', removeTodoItem);
  $newTodo.addEventListener('keyup', (e) => addTodoItem(e, $todoList));
};

window.onload = () => {
  app();
};
