import { todoItem } from "./templates/todoItem.js";

const todoForm = document.querySelector("#todo-input-form");
const todoList = document.querySelector("#todo-list");

const resetInput = () => todoForm.reset();

const addTodoList = (newTodoTitle) => {
  todoList.insertAdjacentHTML("beforeend", todoItem(newTodoTitle));
};

const onAddTodoListHandler = (event) => {
  event.preventDefault();

  const inputValue = event.target["new-todo-title"].value.trim();
  if (!inputValue) return;

  addTodoList(inputValue);
  resetInput();
};

const onDeleteTodoItemHandler = (event) => {
  const eventTarget = event.target.className;
  if (eventTarget !== "destroy") return;

  const targetTodoItem = event.target.parentNode;
  targetTodoItem.remove();
};

todoForm.addEventListener("submit", onAddTodoListHandler);

todoList.addEventListener("click", onDeleteTodoItemHandler);
