export const todoItemTemplate = ({ id, text }) => {
  return `<li id=${id}>
             <div class="view">
                 <input class="toggle" type="checkbox" />
                 <label class="label">${text}</label>
                 <button class="destroy"></button>
             </div>
             <input class="edit" value="${text}" />
         </li>`;
};
