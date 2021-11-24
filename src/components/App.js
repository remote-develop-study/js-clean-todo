import { $ } from "../utils/selector.js";

import getMaxNumber from "../utils/getMaxNumber.js";

import TodoCountContainer from "./TodoCountContainer.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import Component from "./Component.js";

export default class App extends Component {
  constructor({ $app, initialState }) {
    super({ $app, initialState });
  }

  template() {
    return `
      <h1>TODOS</h1>
      <form id="todo-form"></form>
      <main></main>
    `;
  }

  setState(nextState) {
    super.setState(nextState);

    this.todoList.setState(this.state.todos);
  }

  render() {
    super.render();

    this.appendChildComponent();
  }

  appendChildComponent() {
    new TodoForm({
      $app: $("#todo-form"),
      initialState: this.state.todoField,
      onSubmit: this.handleSubmit.bind(this),
    });

    this.todoList = new TodoList({
      $app: $("main"),
      initialState: this.state.todos,
      onTodoDelete: this.handleTodoDelete.bind(this),
    });

    new TodoCountContainer({ $app: $("main") });
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
