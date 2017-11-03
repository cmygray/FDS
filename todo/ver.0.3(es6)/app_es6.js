(function () {
  // variable declarations
  const input = document.querySelector('#input-todo');
  const todoList = document.querySelector('.list-group');
  let allComplete;
  let tabId;

  // data load
  const todos = (function () {
    console.log('/GET/');
    return [
      { id: 3, content: 'eslint 가이드대로 수정하기', completed: false },
      { id: 2, content: 'ES6 문법으로 수정하기', completed: false },
      { id: 1, content: '일단 만들어보기', completed: false }
    ];
  }());
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
    document.querySelector('#leftTodos').textContent =
      `${todos.filter(todo => todo.completed === false).length}`;
  };
  render();
  const getNewId = function () {
    return todos ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  };

  // functions
  const addTodo = function () {
    const todo = {
      id: getNewId(),
      content: input.value,
      completed: false
    };
    todos.splice(0, 0, todo);
    render();
  };
  const removeTodo = function (id) {
    todos.splice(todos.indexOf(todos.find(todo => todo.id === id)), 1);
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

  // 텍스트 입력 -> 할일 추가
  input.addEventListener('keyup', e => {
    if (e.keyCode === 13 && input.value !== '') {
      addTodo();
      input.value = '';
    }
  });
  // Event bindings
  todoList.addEventListener('click', e => {
    const parent = e.target.parentNode;
    // 삭제버튼
    if (e.target.nodeName === 'SPAN' && parent.nodeName !== 'LABEL') {
      removeTodo(+e.target.dataset.id);
    }
    // 완료항목 체크
    if (parent.nodeName === 'LABEL') {
      toggleComplete(+parent.getAttribute('for'));
    }
  });
  // 전체완료 체크
  document.querySelector('.col-xs-6').addEventListener('click', e => {
    if (e.target.nodeName === 'INPUT') {
      allComplete = !allComplete;
      toggleCompleteAll();
    }
  });
  // 체크항목 삭제
  document.querySelector('#btn-removeCompletedTodos').addEventListener('click', () => {
    todos.forEach((todo, index, arr) => {
      if (todo.completed === true) {
        arr.splice(index, 1);
      }
    });
    render();
  });
  // 탭 이동효과
  document.querySelector('.nav-pills').addEventListener('click', e => {
    if (e.target.nodeName === 'A') {
      document.querySelector('.active').removeAttribute('class');
      e.target.parentNode.className = 'active';
      tabId = e.target.parentNode.id;
      render();
    }
  });
}());
