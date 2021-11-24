const $ = (selector) => document.querySelector(selector)

function App() {
  const todoTemplate = (newTodoTitle) => {
    return `<li>
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label class="label">${newTodoTitle}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${newTodoTitle}" />
    </li>`
  }

  const updateItemCount = () => {
    const todoCount = $('#todo-list').querySelectorAll('li').length
    $('.todo-count strong').innerText = todoCount
  }

  // enter를 누르면 item의 이름을 입력받는다.
  $('#new-todo-title').addEventListener('keypress', (e) => {
    if ($('#new-todo-title').value.trim() === '') {
      return
    }

    if (e.key === 'Enter') {
      const newTodoTitle = $('#new-todo-title').value

      $('#todo-list').insertAdjacentHTML(
        'beforeend',
        todoTemplate(newTodoTitle)
      )

      $('#new-todo-title').value = ''

      updateItemCount()
    }
  })

  $('#todo-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('destroy')) {
      e.target.closest('li').remove()

      updateItemCount()
    }
  })
}

App()
