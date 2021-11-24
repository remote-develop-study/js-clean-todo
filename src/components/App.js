import TodoCountContainer from "./TodoCountContainer.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default class App {
  state = {
    list: [
      {
        id: 1,
        name: "과제하기",
        mode: "completed", // "view" | "editing" | "completed"
      },
      {
        id: 2,
        name: "과제하기",
        mode: "view", // "view" | "editing" | "completed"
      },
    ],
  };

  constructor({ $app }) {
    this.$app = $app;
    $app.innerHTML = `
      <h1>TODOS</h1>
    `;

    this.render();
  }

  render() {
    new TodoForm({ $app: this.$app });
    this.todoList = new TodoList({
      $app: this.$app,
      mode: this.mode,
      list: this.state.list,
    });
    new TodoCountContainer({ $app: this.$app });
  }
}
