import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/common/services/todo-list/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  list: any[] = [];

  constructor(
    public todolistservice: TodoListService,
  ) { }

  ngOnInit(): void {
    this.listAllItems();
  }

  listAllItems(): void {
    this.todolistservice.getItems().subscribe(res => res.forEach(element => {
      this.list.push(element);
    }));
  }

}