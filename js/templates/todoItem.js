export const todoItem = (title) => {
  return `
    <li>
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label class="label">${title}</label>
        <button class="destroy" type="button"></button>
      </div>
      <input class="edit" value="새로운 타이틀" />
    </li>`;
};
