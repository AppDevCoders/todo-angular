import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './../app.models';


/* tslint:enabled */
@Component({
  selector: 'record-component',  // tslint:disable-line
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Output() itemchanged: EventEmitter<Todo> = new EventEmitter();
  @Output() itemdeleted: EventEmitter<Todo> = new EventEmitter();

  @Input() item: Todo;

  row: Todo;

  constructor() {
    // --
  }

  ngOnInit() {
    this.row = Object.assign({}, this.item); // deep copy
  }


  toogleItem() {
    // console.log("toogleItem()");
    this.row.done = !this.row.done;
    this.itemchanged.emit(this.row);
  }

  editItem() {
    // console.log("editItem()");
    this.row.editing = true;
  }

  deleteItem() {
    // console.log("deleteItem()");
    const result = confirm('Delete this task?');
    if (result) {
        this.itemdeleted.emit(this.row);
    }
  }

  saveItem() {
    // console.log("saveItem()");
    this.itemchanged.emit(this.row);
  }


  onKeydown(event) {
    // console.log("onKeydown()", event);
    if (event.keyCode === 13) {
      // this.saveItem(); /* ok but redundant */
    }
  }

}
