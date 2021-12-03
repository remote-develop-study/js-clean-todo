import TodoList from './components/TodoList';
import Model from './model/Model';
import { $ } from './utils/querySelector';
import { isEmptyString } from './utils/validator';

const initialState = [
  {
    id: 123,
    text: 'temp1',
  },
  {
    id: 456,
    text: 'temp2',
  },
];

const todoApp = () => {
  const $todoList = $('.todo-list');
  const $newTodo = $('.new-todo');

  const model = Model({
    observable: [],
    renderer: () => {
      $todoList.innerHTML = TodoList(model.todo);
    },
  });

  const addTodo = ({ key, target }) => {
    if (key !== 'Enter') return;

    if (isEmptyString(target.value)) return;

    model.todo = [
      ...model.todo,
      {
        id: Date.now(),
        text: target.value,
      },
    ];

    target.value = '';
  };

  const deleteTodo = ({ target }) => {
    if (!target.classList.contains('destroy')) return;

    model.todo = model.todo.filter((item) => item.id !== +target.id);
  };

  return {
    init: () => {
      model.todo = initialState;

      $newTodo.addEventListener('keyup', addTodo);
      $todoList.addEventListener('click', deleteTodo);
    },
  };
};

export default todoApp;
