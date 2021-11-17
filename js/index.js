// STEP 01 요구사항 분석
// Todo List 추가
// - [ ] Todo List에 Item을 키보드로 입력하여 추가하기
// - [ ] 추가되는 item의 마크업은 `<ul id="todo-list" class="todo-list"></ul>` 안에 삽입해야 한다.
// - [ ] 총 item 갯수를 count하여 하단에 보여준다.
// - [ ] item이 추가되고 나면, input은 빈 값으로 초기화한다.
// - [ ] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// Todo List 삭제
// - [ ] Todo List의 x버튼을 이용해서 해당 엘리먼트를 삭제하기
// - [ ] 총 item 갯수를 count하여 하단에 보여준다.

function App() {
  // enter를 누르면 item의 이름을 입력받는다.
  document
    .querySelector('#new-todo-title')
    .addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        console.log(document.querySelector('#new-todo-title').value)
      }
    })
}

App()
