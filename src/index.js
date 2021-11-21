'use strict'

const $ = (selector) => document.querySelector(selector);

/**
 * {@link key}가 입력하는 키인지 확인
 * @param  {String} key - Key Values
 *   https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 * @return {Boolean}
 */
 const isAddTodoItemKey = (key) => {
  return key === 'Enter';
}

/**
 * {@link todoList}에 TodoItem 추가
 * @param  {Object} todoList - 추가할 리스트
 * @param  {String} title - 추가할 내용
 */
const addTodoItem = (todoList, title) => {
  if (isValidateTodoTitle(title)) {
    insertTodoItem(todoList, title);
  }
}

/**
 * {@link childElement}의 부모 TodoItem 삭제
 * @param  {Object} childElement - 자식 엘리먼트
 */
 const removeParentTodoItem = (childElement) => {
  childElement.closest('li').remove();
}

/**
 * {@link title}이 TodoItem에 추가 가능한 제목인지 확인
 * @param  {String} title - 제목
 * @return {Boolean}
 */
const isValidateTodoTitle = (title) => {
  return title.replace(/\s/g, '').length > 0;
}

/**
 * TodoItem 표시
 * @param  {Object} todoList - 표시할 리스트
 * @param  {String} title - 제목
 */
const insertTodoItem = (todoList, title) => {
  todoList.insertAdjacentHTML('afterbegin', createTodoItemHTML(title));
}

/**
 * TodoItem용 HTML 생성
 * @param  {String} title - 제목
 * @return {String} HTML
 */
const createTodoItemHTML = (title) => {
  return `
  <li>
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="label">${title}</label>
      <button name="destroyBtn" class="destroy"></button>
    </div>
    <input class="edit" value="${title}" />
  </li>
  `;
}

/**
 * 입력란 초기화
 * @param  {Object} input - 초기화할 입력란
 */
const clearTodoInput = (input) => {
  input.value = '';
}

window.onload = () => {
  const $todoList = $('#todo-list');

  $('#new-todo-title').addEventListener('keyup', function(event) {
    if (isAddTodoItemKey(event.key)) {
      addTodoItem($todoList, event.target.value);
      clearTodoInput(this);
    }
  });

  $todoList.addEventListener('click', (event) => {
    if (event.target.name === 'destroyBtn') {
      removeParentTodoItem(event.target);
    }
  });
};
