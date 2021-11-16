const $ = (selector) => document.querySelector(selector);

const $form = $("#todo-form");
const $input = $("#new-todo-title");
const $todoList = $("#todo-list");

const createTemplate = ({ value }) => `
<li>
  <div class="view">
    <input class="toggle" type="checkbox" />
    <label class="label">${value}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="${value}" />
</li>
`;

const clearInput = () => {
  $input.value = "";
};

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  $todoList.insertAdjacentHTML(
    "beforeend",
    createTemplate({ value: $input.value })
  );

  clearInput();
});

$todoList.addEventListener("click", (event) => {
  if (event.target.closest(".destroy")) {
    event.target.closest("li").remove();
  }
});
