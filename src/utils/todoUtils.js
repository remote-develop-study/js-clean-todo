"use strict"

/**
 * {@link title}이 TodoItem에 추가 가능한 제목인지 확인
 * @param  {String} title - 제목
 * @return {Boolean}
 */
export const isValidateTodoTitle = (title) => {
  return title.replace(/\s/g, '').length > 0;
}

/**
 * {@link key}가 입력하는 키인지 확인
 * @param  {String} key - Key Values
 *   https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 * @return {Boolean}
 */
 export const isAddTodoItemKey = (key) => {
  return key === 'Enter';
}

/**
 * {@link key}가 입력을 취소하는 키인지 확인
 * @param  {String} key - Key Values
 *   https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 * @return {Boolean}
 */
export const isCancelTodoItemKey = (key) => {
  return key === 'Escape';
}
