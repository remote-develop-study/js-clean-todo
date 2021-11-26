"use strict"

/**
 * {@link element}의 마지막으로 커서를 이동
 * @param  {Object} element - 입력란
 */
export const lastFocus = (element) => {
  element.focus();
  const elementValue = element.value;
  element.value = '';
  element.value = elementValue;
}

/**
 * 입력란 초기화
 * @param  {Object} input - 초기화할 입력란
 */
export const clearInput = (input) => {
  input.value = '';
}
