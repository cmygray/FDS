(function () {
  const getTodos = function () {
    return [
      { id: 3, content: 'Angular2', completed: false },
      { id: 2, content: 'Typescript', completed: false },
      { id: 1, content: 'ECMAScript6', completed: false }
    ];
  };
  let todos = getTodos();

  const countCompleted = function () {
    return todos.filter(todo => todo.completed === true).length;
  };
  const filterTodo = function () {
    const { id } = { id: document.querySelector('.active').id };
    if (id === 'active') {
      return todos.filter(todo => todo.completed === false);
    }
    if (id === 'completed') {
      return todos.filter(todo => todo.completed === true);
    }
    return todos;
  };
  const render = function () {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';
    filterTodo().forEach(todo => {
      const checked = todo.completed ? 'checked' : '';
      todoList.innerHTML += `<li class="list-group-item">
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
    document.querySelector('#completedTodos').innerHTML = `${countCompleted()}`;
    document.querySelector('#leftTodos').innerText = `${todos.length - countCompleted()}`;
  };
  const getNewId = function () {
    return getTodos().length ? Math.max(...getTodos().map(todo => todo.id)) + 1 : 1;
  };
  const addTodo = function (content) {
    return todos.splice(0, 0, { id: getNewId(), content, completed: false });
  };
  const removeTodo = function (id) {
    todos.forEach((todo, idx) => {
      if (id === todo.id) {
        todos.splice(idx, 1);
      }
    });
  };
  const checkTodo = function (id) {
    todos.forEach(todo => {
      todo.completed = todo.id === id ? !todo.completed : todo.completed;
    });
  };
  const toggleMarkAll = function () {
    return document.querySelector('#chk-allComplete').checked;
  };
  const clearTodo = function () {
    todos = todos.filter(todo => todo.completed === false);
  };

  // initial event
  window.addEventListener('load', render);
  // input key event -> addTodo()
  document.querySelector('#input-todo').addEventListener('keyup', e => {
    const input = e.currentTarget;
    if (e.keyCode === 13 && input.value !== '') {
      addTodo(input.value);
      input.value = '';
      render();
    }
  });
  // ul click event -> removeTodo() || checkTodo()
  document.querySelector('#todo-list').addEventListener('click', e => {
    const { target, parent } = { target: e.target, parent: e.target.parentNode };
    if (target.nodeName === 'SPAN' && parent.nodeName !== 'LABEL') {
      const id = +target.dataset.id;
      removeTodo(id);
      render();
    }
    if (target.nodeName === 'INPUT' && parent.nodeName === 'LABEL') {
      const id = +parent.getAttribute('for');
      checkTodo(id);
      render();
    }
  });
  // mark all event
  document.querySelector('#chk-allComplete').addEventListener('click', () => {
    todos.forEach(todo => todo.completed = toggleMarkAll());
    render();
  });
  // clear btn event
  document.querySelector('#btn-removeCompletedTodos').addEventListener('click', () => {
    clearTodo();
    render();
  });
  // tab event
  document.querySelector('.nav-pills').addEventListener('click', e => {
    if (e.target.nodeName === 'A') {
      document.querySelectorAll('.nav-pills > li').forEach(tab => {
        tab.className = '';
        e.target.parentNode.className = 'active';
      });
      render();
    }
  });
}());
