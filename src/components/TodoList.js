const TodoList = (todos) => {
  return todos
    .map(
      ({ id, text }) => `<li id=${id}>
                          <div class="view">
                             <input class="toggle" type="checkbox" />
                             <label class="label">${text}</label>
                             <button class="destroy" id=${id}></button>
                          </div>
                          <input class="edit" value="${text}" />
                         </li>`
    )
    .join('');
};

export default TodoList;
