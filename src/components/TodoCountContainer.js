import { createElement } from "../utils/domCreator.js";

export default class TodoCountContainer {
  constructor({ $app }) {
    this.$container = createElement("div");
    this.$container.className = "count-container";

    $app.appendChild(this.$container);

    this.$container.innerHTML = `
      <span class="todo-count">총 <strong>0</strong> 개</span>
      <ul class="filters">
        <li>
          <a class="all selected" href="#">전체보기</a>
        </li>
        <li>
          <a class="active" href="#active">해야할 일</a>
        </li>
        <li>
          <a class="completed" href="#completed">완료한 일</a>
        </li>
      </ul>
    `;
  }
}
