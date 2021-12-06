export default class Component {
  constructor({ $app, initialState }) {
    this.$app = $app;
    this.state = initialState;

    this.render();
  }

  setState(nextState) {
    this.state = nextState;

    this.render();
  }

  setEvent() {}

  render() {
    this.$app.innerHTML = this.template();

    this.setEvent();
  }

  template() {}
}
