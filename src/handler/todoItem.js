import { todoItemTemplate } from '../template/template';
import { isContain, isEmptyString } from '../utils/validator';

export const addTodoItem = ({ key, target }, $todoList) => {
  if (key !== 'Enter') return;

  if (isEmptyString(target.value)) return;

  $todoList.insertAdjacentHTML(
    'beforeend',
    todoItemTemplate({ id: Date.now(), text: target.value })
  );

  target.value = '';
};

export const removeTodoItem = ({ target }) => {
  if (!isContain(target, 'destroy')) return;

  target.parentNode.parentNode.remove();
};
