import { $ } from "../utils/selector.js";

import Component from "./Component.js";

export default class TodoList extends Component {
  constructor({ $app, initialState, onTodoDelete }) {
    super({ $app, initialState });

    this.onTodoDelete = onTodoDelete;
  }

  setEvent() {
    $("#todo-list").addEventListener("click", (e) => {
      console.log("클릭 ! ");
      if (e.target.closest(".destroy")) {
        const id = e.target.closest("li").id;

        this.onTodoDelete(id);
      }
    });
  }

  template() {
    return `
      <ul id="todo-list" class="todo-list">
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
