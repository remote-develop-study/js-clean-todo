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

  $('#new-todo-title').addEventListener('keyup', (e) => {
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

  $('#todo-list').addEventListener('dblclick', (e) => {
    e.target.closest('li').classList.add('editing')
  })

  $('#todo-list').addEventListener('keyup', (e) => {
    const $edit = e.target.closest('li').querySelector('.edit')
    const $label = e.target.closest('li').querySelector('.label')

    const removeEditing = (e) => {
      e.target.closest('li').classList.remove('editing')
    }

    if (e.key === 'Escape') {
      $edit.value = $label.innerText
      removeEditing(e)

      return
    }

    if (e.key === 'Enter') {
      if ($edit.value.trim() === '') {
        $edit.value = $label.innerText
        removeEditing(e)

        return
      }

      $label.innerText = $edit.value
      removeEditing(e)
    }
  })
}

App()
