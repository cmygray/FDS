import axios from './axios';
// import axios from 'axios';

(function () {
  let todos;
  const todoList = document.querySelector('#todo-list');

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
    todoList.innerHTML = '';
    filterTodo().forEach(todo => {
      const checked = todo.completed ? 'checked' : '';
      todoList.innerHTML += `<li class="list-group-item edit">
<div class="hover-anchor">
  <a class="hover-action text-muted">
    <span class="glyphicon glyphicon-remove-circle pull-right" data-id=${todo.id}></span>
  </a>
  <label class="i-checks" for="">
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
        console.log(res);
        getTodos();
      })
      .catch(err => console.log(err));
  };
  const removeTodo = function (id) {
    axios.delete(`/todos/id/${id}`)
      .then(getTodos)
      .catch(err => console.log(err));
  };
  const editTodo = function (id, content) {
    const pl = { content };
    axios.patch(`/todos/${id}`, pl)
      .then(res => {
        console.log(res);
        getTodos();
      })
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
  const instantEdit = function (input) {
    const { id } = input;
    if (input.value === '') {
      removeTodo(id);
    } else {
      const content = input.value;
      editTodo(id, content);
    }
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
  todoList.addEventListener('click', e => {
    const { target, parent } = { target: e.target, parent: e.target.parentNode };
    // removeTodo
    if (target.nodeName === 'SPAN' && parent.nodeName !== 'LABEL') {
      const id = +target.dataset.id;
      removeTodo(id);
    }
    // checkTodo
    if (target.nodeName === 'I' && parent.nodeName === 'LABEL') {
      const id = +parent.firstElementChild.id;
      const { completed } = todos.find(todo => todo.id === id);
      checkTodo(id, !completed);
    }
  });
  // input pop up
  todoList.addEventListener('dblclick', e => {
    if (e.target.nodeName === 'LABEL') {
      const id = +e.target.firstElementChild.id;
      e.target.insertAdjacentHTML('beforeend', `
      <input type="text" id=${id} class="form-control input-lg edit" value="${e.target.lastElementChild.textContent}">`);
      document.querySelector('.form-control.input-lg.edit').focus();
    }
    if (e.target.nodeName === 'SPAN') {
      const id = +e.target.parentNode.firstElementChild.id;
      e.target.parentNode.insertAdjacentHTML('beforeend', `
      <input type="text" id=${id} class="form-control input-lg edit" value=${e.target.textContent}>`);
      document.querySelector('.form-control.input-lg.edit').focus();
    }
  });
  // editTodo
  todoList.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      instantEdit(e.target);
    }
  });
  // editTodo
  todoList.addEventListener('focusout', e => {
    console.log(e.target);
    instantEdit(e.target);
  });
  // mark all event
  document.querySelector('#chk-allComplete').addEventListener('click', e => {
    const completed = e.target.checked;
    toggleMarkAll({ completed });
  });
  // clear btn event
  document.querySelector('#btn-removeCompletedTodos').addEventListener('click', () => {
    clearTodo('/todos/completed');
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
