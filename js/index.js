import { $ } from './utils/dom.js'

function App() {
  this.list = []

  this.init = () => {
    initEventListener()
  }

  const $newTodoTitle = $('#new-todo-title')

  const listId = (e) => e.target.closest('li').dataset.listId
  const $edit = (e) => e.target.closest('li').querySelector('.edit')
  const $label = (e) => e.target.closest('li').querySelector('.label')

  const render = () => {
    const template = this.list
      .map((listItem, index) => {
        return `<li data-list-id="${index}" class="${
          listItem.completed && 'completed'
        }">
          <div class="view">
            <input class="toggle" type="checkbox" ${
              listItem.completed && 'checked'
            } />
            <label class="label">${listItem.title}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${listItem.title}" />
        </li>`
      })
      .join('')

    $('#todo-list').innerHTML = template
  }

  const activeRender = () => {
    const template = this.list
      .filter(
        (listItem) =>
          listItem.completed === undefined || listItem.completed === false
      )
      .map((listItem, index) => {
        return `<li data-list-id="${index}" class="${
          listItem.completed && 'completed'
        }">
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label class="label">${listItem.title}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${listItem.title}" />
        </li>`
      })
      .join('')

    $('#todo-list').innerHTML = template
  }

  const completedRender = () => {
    const template = this.list
      .filter((listItem) => listItem.completed === true)
      .map((listItem, index) => {
        return `<li data-list-id="${index}" class="${
          listItem.completed && 'completed'
        }">
          <div class="view">
            <input class="toggle" type="checkbox" checked />
            <label class="label">${listItem.title}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${listItem.title}" />
        </li>`
      })
      .join('')

    $('#todo-list').innerHTML = template
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
      this.list.push({ title: newTodoTitle })
      $newTodoTitle.value = ''
      render()

      updateItemCount()
    }
  }

  const removeTodo = (e) => {
    this.list.splice(listId(e), 1)
    render()

    updateItemCount()
  }

  const completeTodo = (e) => {
    this.list[listId(e)].completed = !this.list[listId(e)].completed
    console.log(this.list[listId(e)])
    render()
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

      this.list[listId(e)].title = $edit(e).value
      render()

      removeEditing(e)
    }
  }

  const handleTodo = (e) => {
    if (e.target.classList.contains('destroy')) {
      removeTodo(e)

      return
    }

    if (e.target.classList.contains('toggle')) {
      completeTodo(e)

      return
    }
  }

  const filterRender = (e) => {
    for (let i = 1; i <= $('.filters').querySelectorAll('li').length; i++) {
      $(`.filters li:nth-child(${i}) a`).classList.remove('selected')
    }

    if (e.target.classList.contains('all')) {
      e.target.classList.add('selected')
      render()

      return
    }

    if (e.target.classList.contains('active')) {
      e.target.classList.add('selected')
      activeRender()

      return
    }

    if (e.target.classList.contains('completed')) {
      e.target.classList.add('selected')
      completedRender()

      return
    }
  }

  const initEventListener = () => {
    $('#new-todo-title').addEventListener('keyup', addTodo)
    $('#todo-list').addEventListener('click', handleTodo)
    $('#todo-list').addEventListener('dblclick', editTodo)
    $('#todo-list').addEventListener('keyup', updateTodo)
    $('.filters').addEventListener('click', filterRender)
  }
}

const app = new App()
app.init()
