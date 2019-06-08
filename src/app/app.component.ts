import { Component, OnInit, OnDestroy } from '@angular/core';

import { RecordComponent } from './record/record.component';
import { PerformanceComponent } from './performance/performance.component';

import { Todo } from './app.models';


/* tslint:enabled */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title: string;
  search: string;

  todos: Array<Todo>;

  showPerformanceTest = false;

  constructor() {
    this.title = 'TODO WebApp / Angular 5';
    this.search = '';

    this.todos = [
      { id: 1, task: 'Learn Kotlin!',                   done: false, editing: false },
      { id: 2, task: 'Watch the movie: Thor Ragnarok',  done: false, editing: false },
      { id: 3, task: 'Travel to Germany',               done: false, editing: false },
      { id: 4, task: 'Travel to Argentina',             done: true,  editing: false },
    ];
  }


  ngOnInit() {
    // ---
  }


  ngOnDestroy() {
    // ---
  }


  filter(todo: Todo): boolean {
    const result = (this.search === '' || todo.task.toLowerCase().indexOf(this.search.toLowerCase()) >= 0);
    // console.log("filter() ", todo.task, this.search, result );
    return result;
  }


  sortList() {
    // console.log("sortList()");
    this.todos.sort((a, b) => {
      if (a.task < b.task) { return -1; }
      if (a.task > b.task) { return 1; }
      return 0;
    });
  }

  clearList() {
    // console.log("clearList()");
    const result = confirm('Delete all tasks?');
    if (result) {
        this.todos.splice(0, this.todos.length);
    }
  }

  getMaxID() {
    return Math.max.apply(Math, this.todos.map( function(i){ return i.id; } ));
  }

  newItem() {
    // console.log("newItem()");
    const newID = (this.getMaxID() || 0) + 1;

    this.todos.unshift(
      { id: newID, task: '', done: false, editing: true },
    );
  }

  updateTodo(todo: Todo) {
    if (todo.task !== '') {
      // console.log("update: " + JSON.stringify(todo));
      // var index = this.todos.indexOf(todo);  // do not work id modified

      let index = -1;
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === todo.id) {
          index = i;
        }
      }

      todo.editing = false;
      this.todos[index] = Object.assign({}, todo);
      // console.log("final: " + JSON.stringify(this.todos));
    }
  }

  deleteTodo(todo: Todo) {
    // alert("delete: " + JSON.stringify(todo));
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  onSearchChange(event) {
    // console.log("onSearchChange()", event);
    // this.todos = this.todos.filter((t) => { return t; });
    // this.todos = Object.assign({}, this.todos);
    // console.log("c: ", this.todos.length);
  }

  getTotal() {
    return this.todos.length;
  }

  getDonesCounter() {
    return this.todos.filter(t => t.done === true).length;
  }

  getRemainingCounter() {
    return this.getTotal() - this.getDonesCounter();
  }

}
