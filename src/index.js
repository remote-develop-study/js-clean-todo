'use strict'

const $ = (selector) => document.querySelector(selector);
const $todoList = $('#todo-list');
const $newTitle = $('#new-todo-title');

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
 * TodoItem 추가
 * @param  {String} title - 추가할 내용
 */
const addTodoItem = (title) => {
  if (validateTodoTitle(title)) {
    insertTodoItem(title);
    clearTodoInput();
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
const validateTodoTitle = (title) => {
  return title.replace(/\s/g, '').length > 0;
}

/**
 * TodoItem 표시
 * @param  {String} title - 제목
 */
const insertTodoItem = (title) => {
  $todoList.insertAdjacentHTML('afterbegin',
  `
  <li>
    <div class="view">
      <input class="toggle" type="checkbox" />
      <label class="label">${title}</label>
      <button name="destroyBtn" class="destroy"></button>
    </div>
    <input class="edit" value="${title}" />
  </li>
  `);
}

/**
 * Todo 제목 입력란 초기화
 */
const clearTodoInput = () => {
  $newTitle.value = '';
}

window.onload = () => {
  $newTitle.addEventListener('keyup', (event) => {
    if (isAddTodoItemKey(event.key)) {
      addTodoItem(event.target.value);
    }
  });

  $todoList.addEventListener('click', (event) => {
    if (event.target.name === 'destroyBtn') removeParentTodoItem(event.target);
  });
};
