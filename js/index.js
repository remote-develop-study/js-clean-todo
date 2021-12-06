const $ = (selector) => document.querySelector(selector)

function App() {
  const $newTodoTitle = $('#new-todo-title')

  const $edit = (e) => e.target.closest('li').querySelector('.edit')
  const $label = (e) => e.target.closest('li').querySelector('.label')

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

  const removeEditing = (e) => {
    e.target.closest('li').classList.remove('editing')
  }

  const addTodo = (e) => {
    if ($newTodoTitle.value.trim() === '') {
      return
    }

    if (e.key === 'Enter') {
      const newTodoTitle = $newTodoTitle.value

      $('#todo-list').insertAdjacentHTML(
        'beforeend',
        todoTemplate(newTodoTitle)
      )

      $newTodoTitle.value = ''

      updateItemCount()
    }
  }

  const removeTodo = (e) => {
    if (e.target.classList.contains('destroy')) {
      e.target.closest('li').remove()

      updateItemCount()
    }
  }

  const editTodo = (e) => {
    e.target.closest('li').classList.add('editing')
    $edit(e).focus()
    $edit(e).setSelectionRange($edit(e).value.length, $edit(e).value.length)
  }

  const updateTodo = (e) => {
    if (e.key === 'Escape') {
      $edit(e).value = $label(e).innerText
      removeEditing(e)

      return
    }

    if (e.key === 'Enter') {
      if ($edit(e).value.trim() === '') {
        $edit(e).value = $label(e).innerText
        removeEditing(e)

        return
      }

      $label(e).innerText = $edit(e).value
      removeEditing(e)
    }
  }

  $('#new-todo-title').addEventListener('keyup', addTodo)
  $('#todo-list').addEventListener('click', removeTodo)
  $('#todo-list').addEventListener('dblclick', editTodo)
  $('#todo-list').addEventListener('keyup', updateTodo)
}

App()
