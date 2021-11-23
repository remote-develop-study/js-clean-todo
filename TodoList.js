import { createElement } from "./utils/domCreator.js";

export default class TodoList {
  constructor({ $app }) {
    this.$list = createElement("ul");
    this.$list.className = "todo-list";
    this.$list.innerHTML = `
      <ul id="todo-list" class="todo-list"></ul>
    `;

    $app.appendChild(this.$list);
  }
}
