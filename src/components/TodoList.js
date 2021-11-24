import { createElement } from "../utils/domCreator.js";

export default class TodoList {
  constructor({ $app, todos, onTodoDelete }) {
    this.state = todos;

    this.$list = createElement("ul");
    this.$list.className = "todo-list";

    this.onTodoDelete = onTodoDelete;

    $app.appendChild(this.$list);

    this.render();
    this.setEvent();
  }

  setState(nextState) {
    this.state = nextState;

    this.render();
  }

  setEvent() {
    this.$list.addEventListener("click", (e) => {
      if (e.target.closest(".destroy")) {
        const id = e.target.closest("li").id;

        this.onTodoDelete(id);
      }
    });
  }

  render() {
    this.$list.innerHTML = this.template();
  }

  template() {
    return `
      <ul>
        ${this.state
          .map(
            ({ id, name, mode }) => `
        <li id="${id}" class="${mode}">
          <div>
            <input class="toggle" type="checkbox" ${
              mode === "completed" ? "checked" : ""
            } />
            <label class="label">${name}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${name}" />
        </li>
      `
          )
          .join("")}
      </ul>
    `;
  }
}
