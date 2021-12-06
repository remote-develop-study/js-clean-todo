import TodoItem from '/src/components/TodoItem.js';
import { $ } from '/src/utils/queryUtils.js';
import * as todoUtils from "/src/utils/todoUtils.js";
import * as domUtils from "/src/utils/domUtils.js";

export default class TodoList {
  /**
   * 생성자
   * @param {Object} todoList - 추가할 todoList
   */
  constructor(todoList) {
    this.obj = todoList;
    TodoItem.prototype.parentList = this;

    $('#new-todo-title').addEventListener('keyup', function(event) {
      if (todoUtils.isAddTodoItemKey(event.key)) {
        this.addTodoItem(event.target.value);
        this.updateTodoItemCount();
        domUtils.clearInput(event.target);
        return ;
      }

      if (todoUtils.isCancelTodoItemKey(event.key)) {
        domUtils.clearInput(event.target);
        return ;
      }
    }.bind(this));
  }

  /**
   * TodoItem 추가
   * @param  {String} title - 추가할 내용
   */
  addTodoItem(title) {
    if (todoUtils.isValidateTodoTitle(title)) {
      this.obj.prepend((new TodoItem(title)).getObject());
    }
  }

  /**
   * TodoItem 개수 갱신
   */
  updateTodoItemCount() {
    $('.todo-count strong').textContent = this.obj.getElementsByTagName('li').length;
  }
}
