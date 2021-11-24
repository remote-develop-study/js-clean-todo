import { createElement } from "../utils/domCreator.js";

export default class TodoList {
  constructor({ $app, todos }) {
    this.state = todos;

    this.$list = createElement("ul");
    this.$list.className = "todo-list";

    $app.appendChild(this.$list);

    this.render();
  }

  setState(nextState) {
    this.state = nextState;

    this.render();
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
