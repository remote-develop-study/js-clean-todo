import * as todoUtils from "/src/utils/todoUtils.js";
import * as domUtils from "/src/utils/domUtils.js";

export default class TodoItem {
  /**
   * 생성자
   * @param {String} title - 내용
   */
  constructor(title) {
    const div = document.createElement('div');
    div.innerHTML = `
    <li>
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label class="label">${title}</label>
        <button name="destroyBtn" class="destroy"></button>
      </div>
      <input class="edit" value="${title}" />
    </li>
    `.trim();

    this.obj = div.firstChild;
    this.titleEdit = this.obj.getElementsByClassName('edit')[0];
    this.titleLabel = this.obj.getElementsByClassName('label')[0];

    this.obj.addEventListener('click', (event) => {
      if (event.target.name === 'destroyBtn') {
        this.obj.remove();
        this.parentList.updateTodoItemCount();
      }
    });

    this.obj.addEventListener('dblclick', () => {
      this.obj.classList.add("editing");
      domUtils.lastFocus(this.titleEdit);
    });

    this.obj.addEventListener('keyup', (event) => {
      if (todoUtils.isAddTodoItemKey(event.key)) {
        this.changeTodoTitle(event.target.value);
        return ;
      }
      if (todoUtils.isCancelTodoItemKey(event.key)) {
        this.cancelEditTodoItem(this.obj);
        return ;
      }
    });

    this.obj.addEventListener("focusout", () => {
      this.cancelEditTodoItem();
    });
  }

  /**
   * TodoItem 취득
   * @return {Object} - TodoItem
   */
  getObject() {
    return this.obj;
  }

  /**
   * 내용 수정
   * @param {String} title - 수정할 내용
   */
  changeTodoTitle(title) {
    if (todoUtils.isValidateTodoTitle(title)) {
      this.obj.classList.remove("editing");
      this.titleEdit.value = title;
      this.titleLabel.textContent = title;
    }
  }

  /**
   * 수정 취소
   */
  cancelEditTodoItem() {
    const labelText = this.titleLabel.textContent;
    if (todoUtils.isValidateTodoTitle(labelText)) {
      this.titleEdit.value = labelText;
      this.obj.classList.remove("editing");
    }
  }
}
