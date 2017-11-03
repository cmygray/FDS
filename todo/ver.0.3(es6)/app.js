(function () {
  // variable declarations
  const input = document.querySelector('#input-todo');
  const leftTodos = document.querySelector('#leftTodos');
  const todoList = document.querySelector('.list-group');
  const todos;
  let allComplete;
  let tabId;

  // function declarations
  const filterTodos = function () {
    if (tabId === 'active') {
      return todos.filter(todo => todo.completed === false);
    }
    if (tabId === 'completed') {
      return todos.filter(todo => todo.completed === true);
    }
    return todos;
  };

  const render = function () {
    let html = '';
    todoList.innerHTML = '';
    filterTodos().forEach(todo => {
      const checked = todo.completed ? 'checked' : '';
      html += `<li class="list-group-item">
  <div class="hover-anchor">
  <a class="hover-action text-muted">
    <span class="glyphicon glyphicon-remove-circle pull-right" data-id=${todo.id}></span>
  </a>
  <label class="i-checks" for=${todo.id}>
    <input type="checkbox" id=${todo.id} ${checked}><i></i>
    <span>${todo.content}</span>
  </label>
  </div>
</li>`;
    });
    todoList.innerHTML = html;
    leftTodos.textContent = todos.filter(todo => todo.completed === false).length;
  };

  const getTodo = function () {
    todos = [
      { id: 3, content: 'eslint 가이드대로 수정하기', completed: false },
      { id: 2, content: 'ES6 문법으로 수정하기', completed: true },
      { id: 1, content: '일단 만들어보기', completed: false }
    ];
    console.log('/GET/');
    render();
  };

  const getIds = function () {
    return todos.map(todo => todo.id);
  };

  const addTodo = function () {
    todos = [
      {
        id: Math.max(...getIds()) + 1,
        content: input.value,
        completed: false
      }, ...todos
    ];
    render();
  };

  const removeTodo = function (id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
  };

  const toggleComplete = function (id) {
    todos.forEach(todo => {
      todo.completed = todo.id === id ? !todo.completed : todo.completed;
    });
    render();
  };

  const toggleCompleteAll = function () {
    todos.forEach(todo => {
      todo.completed = allComplete;
    });
    render();
  };

  // Event bindings
  window.addEventListener('load', getTodo);
  // 텍스트 입력 -> 할일 추가
  input.addEventListener('keyup', e => {
    if (e.keyCode === 13 && input.value !== '') {
      addTodo();
      input.value = '';
    }
  });
  // 할일 리스트 클릭 이벤트
  todoList.addEventListener('click', e => {
    const parent = e.target.parentNode;
    let id;
    // 제거버튼인 경우 할일 삭제
    if (e.target.nodeName === 'SPAN' && parent.nodeName !== 'LABEL') {
      id = +e.target.dataset.id;
      removeTodo(id);
    }
    // 스팬 또는 체크박스인 경우 완료 표시
    if (parent.nodeName === 'LABEL') {
      id = +parent.getAttribute('for');
      toggleComplete(id);
    }
  });
  // Mark all as complete
  document.querySelector('.col-xs-6').addEventListener('click', e => {
    if (e.target.nodeName === 'INPUT') {
      allComplete = !allComplete;
      toggleCompleteAll();
    }
  });
  // Clear completed
  document.querySelector('#btn-removeCompletedTodos').addEventListener('click', () => {
    todos = todos.filter(todo => todo.completed === false);
    render();
  });
  // tab event
  document.querySelector('.nav-pills').addEventListener('click', e => {
    if (e.target.nodeName === 'A') {
      document.querySelector('.active').removeAttribute('class');
      e.target.parentNode.className = 'active';
      tabId = e.target.parentNode.id;
      render();
    }
  });
}());
