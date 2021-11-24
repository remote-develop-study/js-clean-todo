export default class TodoForm {
  state = "";

  constructor({ $target, onSubmit }) {
    this.$target = $target;
    this.onSubmit = onSubmit;

    this.render();
    this.setEvent();
  }

  setState(nextState) {
    this.state = nextState;

    this.componentDidMount();
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

  render() {
    this.$target.innerHTML = this.template();
    this.componentDidMount();
  }

  componentDidMount() {
    this.$target.querySelector("input").value = this.state;
  }

  setEvent() {
    this.$target.addEventListener("submit", (event) => {
      event.preventDefault();

      this.onSubmit(this.state);

      this.clearInput();
    });

    this.$target.addEventListener("input", (event) => {
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
  }
}
