(function () {
  let todos;
  const todoList = document.querySelector('#todo-list');
  const input = document.querySelector('#input-todo');

  window.addEventListener('load', function () {
    getTodos();
    render();
  });

  input.addEventListener('keyup', function (e) {
    if (this.value !== '' && e.keyCode === 13) {
      addTodo();
      this.value = '';
    }
  });

  todoList.addEventListener('click', function (e) {
    const target = e.target;
    if (target.nodeName === 'SPAN' && target.parentNode.nodeName !== 'LABEL') {
      var id = e.target.dataset.id;
      removeTodo(id);
    }
    if (target.nodeName === 'LABEL') {
      var id = target.getAttribute('for');
      toggleCheck(id);
    }
  });

  var getTodos = function () {
    todos = [
      { id: 3, content: 'Angular2', completed: '' },
      { id: 2, content: 'Javascript', completed: '' },
      { id: 1, content: 'HTML/CSS', completed: '' }
    ];
  };

  const getId = function () {
    return todos.length === 0 ? 1 :
      Math.max.apply('', todos.map(function (todo) {
        return todo.id;
      })) + 1;
  };

  var toggleCheck = function (id) {
    todos.forEach(function (todo) {
      if (todo.id === +id) {
        Object.assign(todo, {
          completed: todo.completed ? '' : 'checked'
        });
        render();
      }
    });
  };

  var addTodo = function () {
    const todo = [
      {
        id: getId(),
        content: input.value,
        completed: ''
      }];
    todos = todo.concat(todos);
    render();
  };

  var removeTodo = function (id) {
    todos = todos.filter(function (todo) {
      return todo.id !== +id;
    });
    render();
  };

  var render = function () {
    todoList.innerHTML = '';
    let html = '';
    todos.forEach(function (todo) {
      html +=
          `<li class="list-group-item">\
              <div class="hover-anchor">\
              <a class="hover-action text-muted">\
                  <span class="glyphicon glyphicon-remove-circle pull-right"\
                  data-id=${todo.id}>\
                        </span>\
                    </a>\
                    <label class="i-checks" for=${todo.id}>\
                        <input type="checkbox" id=${todo.id} ${
    todo.completed}>\
                        <i></i>\
                        <span>${todo.content}</span>\
                    </label>\
                    </div>\
                </li>`;
    });
    todoList.innerHTML = html;
    console.log(todos);
  };
}());
