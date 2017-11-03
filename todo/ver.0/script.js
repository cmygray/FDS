let todoInput = document.querySelector('#text-input')
let todoList = document.querySelector('#todo-list')
todoInput.addEventListener('keypress', function(e){
  if ((e.keyCode === 13) && (this.value !== '')) {
    todoList.innerHTML += '<li>' + this.value + '</li>'
    this.value = '';
  }
})
todoList.addEventListener('click', function(e){
  e.target.parentNode.removeChild(e.target);
})