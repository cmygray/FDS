(function () {
    var todos;
    var todoList = document.getElementById('todo-list');
    var list = document.getElementById('todo-list');
    var input = document.getElementById('input-todo');

    window.addEventListener('load', getTodos());

    input.addEventListener('keypress', function (e) {
        if (e.keyCode === 13 /*&& this.value !== ''*/) {
            addTodo(this.value)
            this.value = '';
            render();
            console.log(todos)
        };
    })

    list.addEventListener('click', function (e) {
        var target = e.target;
        if (target.parentNode.nodeName !== 'LABEL' && target.nodeName == 'SPAN') {
            var id = +e.target.dataset.id;
            todos = todos.filter(function (todo) {
                return todo.id !== id
            })
            render();
            console.log(todos)
        }
        if (target.parentNode.nodeName === 'LABEL') {
            var id = +target.parentNode.getAttribute('for');
            todos.forEach(function (todo, index, todos) {
                if (todo.id === id) {
                    var complete = todos[index].completed
                    todos[index].completed = complete ? false : true;
                    render();
                    console.log(todos)
                }
            })
        }
    })
    function getTodos() {
        todos = [
            { id: 3, content: 'HTML', completed: false },
            { id: 2, content: 'CSS', completed: false },
            { id: 1, content: 'Javascript', completed: false }
        ];
        render();
        console.log('[GET]\n', todos);
    }

    function addTodo(content) {
        todos = [{
            id: lastTodoId(),
            content: content,
            completed: false
        }].concat(todos);
    }

    function lastTodoId() {
        if (todos.length === 0) {
            return 1;
        }
        return todos ? Math.max.apply('', todos.map(function (todo) {
            return todo.id + 1;
        })) : 1;
    }

    function render() {
        todoList.innerHTML = '';
        todos.forEach(function (todo) {
            var checked = todo.completed ? 'checked' : '';
            todoList.innerHTML +=
                '<li class="list-group-item"> \
          <div class="hover-anchor"> \
            <a class="hover-action text-muted"> \
              <span class="glyphicon glyphicon-remove-circle pull-right" data-id=' + todo.id + '> \
              </span> \
            </a> \
            <label class="i-checks" for=' + todo.id + '> \
              <input type="checkbox" id=' + todo.id + ' ' + checked + '> \
              <i></i> \
              <span>' + todo.content + '</span> \
            </label> \
          </div> \
        </li>'
        })
    }
})();