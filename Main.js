import { createElement } from "./utils/domCreator.js";

export default class Main {
  constructor({ $app }) {
    this.$main = createElement("main");
    this.$main.innerHTML = `
    <input class="toggle-all" type="checkbox" />
    `;

    $app.appendChild(this.$main);
  }
}
