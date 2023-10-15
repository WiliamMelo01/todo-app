import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-input',
  templateUrl: './create-input.component.html',
  styleUrls: ['./create-input.component.sass']
})
export class CreateInputComponent {

  constructor(private todoService : TodoService){}

  createTask(task: string){
    this.todoService.createTask(task);
  }

  onKeyPress(event : KeyboardEvent){
    if(event.key === 'Enter'){
      const target = event.target as HTMLInputElement;
      this.createTask(target.value);
      target.value = "";
    }
  }

}
