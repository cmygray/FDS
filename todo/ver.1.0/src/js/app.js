import axios from './axios';

(function () {
  let todos;

  const countCompleted = function () {
    return todos.filter(todo => todo.completed === true).length;
  };
  const filterTodo = function () {
    const status = document.querySelector('.active').id;
    if (status === 'active') {
      return todos.filter(todo => todo.completed === false);
    }
    if (status === 'completed') {
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
    document.querySelector('#leftTodos').innerHTML = `${todos.length - countCompleted()}`;
  };
  const getTodos = function () {
    axios.get('/todos')
      .then(res => {
        todos = res;
        render();
      })
      .catch(err => console.log(err));
  };
  const getNewId = function () {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  };
  const addTodo = function (content) {
    const todo = { id: getNewId(), content, completed: false };
    axios.post('/todos', todo)
      .then(res => {
        todos.splice(0, 0, res);
        render();
      })
      .catch(err => console.log(err));
  };
  const removeTodo = function (id) {
    axios.delete(`/todos/id/${id}`)
      .then(getTodos)
      .catch(err => console.log(err));
  };
  const checkTodo = function (id, completed) {
    const pl = { completed };
    axios.patch(`/todos/${id}`, pl)
      .then(getTodos)
      .catch(err => console.log(err));
  };
  const toggleMarkAll = function (completed) {
    axios.patch('/todos', completed)
      .then(getTodos)
      .catch(err => console.log(err));
  };
  const clearTodo = function () {
    axios.delete('/todos/completed')
      .then(getTodos)
      .catch(err => console.log(err));
  };

  // initial event
  window.addEventListener('load', getTodos);
  // input key event -> addTodo()
  document.querySelector('#input-todo').addEventListener('keyup', e => {
    const input = e.currentTarget;
    if (e.keyCode === 13 && input.value !== '') {
      addTodo(input.value);
      input.value = '';
    }
  });
  // ul click event -> removeTodo() || checkTodo()
  document.querySelector('#todo-list').addEventListener('click', e => {
    const { target, parent } = { target: e.target, parent: e.target.parentNode };
    // removeTodo
    if (target.nodeName === 'SPAN' && parent.nodeName !== 'LABEL') {
      const id = +target.dataset.id;
      removeTodo(id);
    }
    // checkTodo
    if (target.nodeName === 'INPUT' && parent.nodeName === 'LABEL') {
      const id = +parent.getAttribute('for');
      const { completed } = todos.find(todo => todo.id === id);
      checkTodo(id, !completed);
    }
  });
  // mark all event
  document.querySelector('#chk-allComplete').addEventListener('click', e => {
    const completed = e.target.checked;
    toggleMarkAll({ completed });
  });
  // clear btn event
  document.querySelector('#btn-removeCompletedTodos').addEventListener('click', () => {
    const url = 'http://localhost:4500';
    clearTodo('/todos/completed')
      .then(getTodos)
      .catch(err => console.log(err));
    // clearTodo();
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
