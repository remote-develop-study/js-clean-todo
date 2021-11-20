import { todoItem } from "./templates/todoItem.js";
import { ELEMENT } from "../constants/dom.js";

const todoListApp = () => {
  const todoForm = document.querySelector(ELEMENT.TODO_FORM);
  const todoList = document.querySelector(ELEMENT.TODO_LIST);

  const resetInput = () => todoForm.reset();

  const addTodoList = (newTodoTitle) => {
    todoList.insertAdjacentHTML("beforeend", todoItem(newTodoTitle));
  };

  const onAddTodoListHandler = (event) => {
    event.preventDefault();

    const inputValue = event.target[ELEMENT.NEW_TODO].value.trim();
    if (!inputValue) return;

    addTodoList(inputValue);
    resetInput();
  };

  const onDeleteTodoItemHandler = (event) => {
    const eventTarget = event.target.className;
    if (eventTarget !== ELEMENT.DLEETE_BUTTON) return;

    const targetTodoItem = event.target.parentNode;
    targetTodoItem.remove();
  };

  todoForm.addEventListener("submit", onAddTodoListHandler);
  todoList.addEventListener("click", onDeleteTodoItemHandler);
};

export default todoListApp;
