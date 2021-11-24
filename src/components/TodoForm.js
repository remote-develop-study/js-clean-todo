import { createElement } from "../utils/domCreator.js";

export default class TodoForm {
  constructor({ $app }) {
    this.$form = createElement("form");
    this.$form.id = "todo-form";
    this.$form.innerHTML = `
      <input
        id="new-todo-title"
        class="new-todo"
        placeholder="할일을 추가해주세요"
        autofocus
      />
    `;

    $app.appendChild(this.$form);
  }
}
