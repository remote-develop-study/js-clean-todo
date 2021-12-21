import { $ } from './utils/dom.js'

function App() {
  this.list = []
  this.currentTodo = 'all'

  this.init = () => {
    initEventListener()
  }

  const $newTodoTitle = $('#new-todo-title')

  const $edit = (e) => e.target.closest('li').querySelector('.edit')
  const $label = (e) => e.target.closest('li').querySelector('.label')

  const render = () => {
    if (this.currentTodo === 'all') {
      allRender()

      return
    }

    if (this.currentTodo === 'active') {
      activeRender()

      return
    }

    if (this.currentTodo === 'completed') {
      completedRender()

      return
    }
  }

  const allRender = () => {
    const template = this.list
      .map((listItem) => {
        return `<li class="${listItem.completed && 'completed'}">
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
      .map((listItem) => {
        return `<li>
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
      .map((listItem) => {
        return `<li class="completed">
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
    const todoCount = this.list.length
    $('.todo-count strong').innerText = todoCount
  }

  const removeEditing = (e) => {
    e.target.closest('li').classList.remove('editing')
  }

  const resetNewTodoTitle = () => {
    $newTodoTitle.value = ''
  }

  const findTextIndex = (e) => {
    return this.list.findIndex(
      (listItem) => listItem.title === $label(e).innerText
    )
  }

  const addTodo = (e) => {
    if (e.key !== 'Enter') {
      return
    }

    if ($newTodoTitle.value.trim() === '') {
      resetNewTodoTitle()

      return
    }

    if (
      this.list.findIndex(
        (listItem) => listItem.title === $newTodoTitle.value
      ) !== -1
    ) {
      resetNewTodoTitle()

      return
    }

    const newTodoTitle = $newTodoTitle.value
    this.list.push({ title: newTodoTitle })
    resetNewTodoTitle()
    render()

    updateItemCount()
  }

  const removeTodo = (e) => {
    this.list.splice(findTextIndex(e), 1)
    render()

    updateItemCount()
  }

  const completeTodo = (e) => {
    this.list[findTextIndex(e)].completed =
      !this.list[findTextIndex(e)].completed
    render()
  }

  const editTodo = (e) => {
    if (e.target.closest('li').classList.contains('completed')) {
      return
    }

    e.target.closest('li').classList.add('editing')
    $edit(e).focus()
    $edit(e).setSelectionRange($edit(e).value.length, $edit(e).value.length)
  }

  const updateTodo = (e) => {
    if (e.key !== 'Escape' && e.key !== 'Enter') {
      return
    }

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

      this.list[findTextIndex(e)].title = $edit(e).value
      $label(e).innerText = $edit(e).value

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

  const moveRender = (e) => {
    for (let i = 1; i <= $('.filters').querySelectorAll('li').length; i++) {
      $(`.filters li:nth-child(${i}) a`).classList.remove('selected')
    }

    if (e.target.classList.contains('all')) {
      this.currentTodo = 'all'
      e.target.classList.add('selected')
      allRender()

      return
    }

    if (e.target.classList.contains('active')) {
      this.currentTodo = 'active'
      e.target.classList.add('selected')
      activeRender()

      return
    }

    if (e.target.classList.contains('completed')) {
      this.currentTodo = 'completed'
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
    $('.filters').addEventListener('click', moveRender)
  }
}

const app = new App()
app.init()
