import { $ } from "../utils/selector.js";

import getMaxNumber from "../utils/getMaxNumber.js";

import TodoCountContainer from "./TodoCountContainer.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
export default class App {
  state = {
    todos: [
      {
        id: 1,
        name: "과제하기",
        mode: "completed",
      },
      {
        id: 2,
        name: "과제하기",
        mode: "view",
      },
    ],
  };

  constructor({ $app }) {
    this.$app = $app;
    this.handleSubmit = this.handleSubmit.bind(this);

    $app.innerHTML = `
      <h1>TODOS</h1>
      <form id="todo-form"></form>
    `;

    this.render();
  }

  setState(nextState) {
    this.state = nextState;

    this.todoList.setState(this.state.todos);
  }

  render() {
    new TodoForm({
      $target: $("#todo-form"),
      onSubmit: this.handleSubmit,
    });

    this.todoList = new TodoList({
      $app: this.$app,
      todos: this.state.todos,
      onTodoDelete: this.handleTodoDelete.bind(this),
    });

    new TodoCountContainer({ $app: this.$app });
  }

  handleSubmit(name) {
    const { todos } = this.state;

    const nextId = getMaxNumber(todos) + 1;

    const newTodo = {
      id: nextId,
      name,
      mode: "view",
    };

    this.setState({
      ...this.state,
      todos: [...todos, newTodo],
    });
  }

  handleTodoDelete(id) {
    const { todos } = this.state;

    const filterTodos = todos.filter((todo) => todo.id !== Number(id));

    this.setState({
      ...this.state,
      todos: filterTodos,
    });
  }
}
