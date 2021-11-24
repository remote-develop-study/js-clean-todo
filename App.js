import TodoCountContainer from "./TodoCountContainer.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default class App {
  constructor({ $app }) {
    this.state = {
      mode: "view", // "view" | "editing" | "completed"
      list: [
        {
          id: 1,
          name: "과제하기",
          checked: true,
        },
        {
          id: 2,
          name: "과제하기",
          checked: false,
        },
      ],
    };

    $app.innerHTML = `
      <h1>TODOS</h1>
    `;

    new TodoForm({ $app });
    this.todoList = new TodoList({
      $app,
      mode: this.mode,
      list: this.state.list,
    });
    new TodoCountContainer({ $app });
  }
}
