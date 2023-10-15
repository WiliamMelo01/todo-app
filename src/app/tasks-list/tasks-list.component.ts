import { Component, OnInit } from '@angular/core';
import { ITask } from '../interfaces/task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})

export class TasksListComponent implements OnInit {

  public tasks : ITask[] = [];
  public hasTasks = false;

  constructor(private _TodoService: TodoService){}

  ngOnInit(){
    this._TodoService.getTasks().subscribe(data => {
      this.tasks = data;
      this.hasTasks = this.tasks.length > 0;
    });
  }

}
