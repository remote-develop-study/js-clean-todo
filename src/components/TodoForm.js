import Component from "./Component.js";

export default class TodoForm extends Component {
  constructor({ $app, initialState, onSubmit }) {
    super({ $app, initialState });

    this.onSubmit = onSubmit;
  }

  template() {
    return `
      <input
        id="new-todo-title"
        class="new-todo"
        placeholder="할일을 추가해주세요"
        autofocus
      />
    `;
  }

  setState(nextState) {
    this.state = nextState;
  }

  setEvent() {
    this.$app.addEventListener("submit", (event) => {
      event.preventDefault();

      this.onSubmit(this.state);

      this.clearInput();
    });

    this.$app.addEventListener("input", (event) => {
      if (event.target.closest("input")) {
        const {
          target: { value },
        } = event;

        this.setState(value);
      }
    });
  }

  clearInput() {
    this.setState("");

    super.render();
  }
}
