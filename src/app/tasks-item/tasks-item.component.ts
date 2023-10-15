import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.sass']
})
export class TasksItemComponent {

  constructor(private todoService : TodoService){}

  @Input() completed : boolean = true;
  @Input() task : string = "";
  @Input() isFirst : boolean = false;
  @Input() index : number = 0;

  changeItemStatus(){
    this.todoService.changeTaskStatus(this.index);
  }  

  delete(event : MouseEvent){
    event.stopPropagation();
    this.todoService.deleteTask(this.index);
  }

}
