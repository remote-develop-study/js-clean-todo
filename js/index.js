// STEP 01 요구사항 분석
// Todo List 추가
// - [x] item의 title을 입력 받고 엔터키 입력으로 추가한다.
// - [x] 추가되는 item의 마크업은 `<ul id="todo-list" class="todo-list"></ul>` 안에 삽입해야 한다.
// - [x] 총 item 갯수를 count하여 하단에 보여준다.
// - [x] item이 추가되고 나면, input은 빈 값으로 초기화한다.
// - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// Todo List 삭제
// - [x] Todo List의 x버튼을 이용해서 해당 엘리먼트를 삭제하기
// - [x] 총 item 갯수를 count하여 하단에 보여준다.

const $ = (selector) => document.querySelector(selector)

function App() {
  const updateItemCount = () => {
    const todoCount = $('#todo-list').querySelectorAll('li').length
    $('.todo-count strong').innerText = todoCount
  }

  // enter를 누르면 item의 이름을 입력받는다.
  $('#new-todo-title').addEventListener('keypress', (e) => {
    if ($('#new-todo-title').value === '') {
      return
    }

    if (e.key === 'Enter') {
      const newTodoTitle = $('#new-todo-title').value
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
