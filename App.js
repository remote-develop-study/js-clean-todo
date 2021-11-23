import TodoCountContainer from "./TodoCountContainer.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default class App {
  constructor({ $app }) {
    $app.innerHTML = `
      <h1>TODOS</h1>
    `;

    this.$form = new TodoForm({ $app });
    this.$todoList = new TodoList({ $app });
    this.$todoCountContainer = new TodoCountContainer({ $app });
  }
}
