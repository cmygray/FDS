import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Todo {
  constructor(
    public id: number,
    public content: string,
    public completed: boolean
  ) {}
}

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  tabState = 'All';
  todos: Todo[];
  url = 'http://localhost:4500/todos';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.http.get<Todo[]>(this.url)
    .subscribe(todos => this.todos = todos);
  }
  changeTabState(tab) {
    this.tabState = tab.textContent;
  }
  filterByComplete(completed) {
    switch (this.tabState) {
      case 'Active':
        return !completed;
      case 'Completed':
        return completed;
      case 'All':
        return true;
    }
  }
  countCompleted() {
    return this.todos.filter(todo => todo.completed).length;
  }
  getNewId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }
  addTodo(e, content) {
    if(e.code === 'Enter') {
      const payload = { id: this.getNewId(), content, completed: false };
      e.currentTarget.value = '';
      this.http.post(this.url, payload)
      .subscribe(() => this.getTodos());
    }
  }
  removeTodo(id) {
    this.http.delete(`${this.url}/id/${id}`)
      .subscribe(() => this.getTodos());
  }
  checkTodo(e, id) {
    const payload = { completed: e.checked };
    this.http.patch(`${this.url}/${id}`, payload)
      .subscribe(() => this.getTodos());
  }
  completeAll(e) {
    this.http.patch(`${this.url}`, e.checked)
      .subscribe(() => this.getTodos());
  }
  clearCompleted() {
    this.http.delete(`${this.url}/completed`)
      .subscribe(() => this.getTodos());
  }
}
