import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITask } from './interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
    this.loadTasks();
  }

  private tasksSubject = new BehaviorSubject<ITask[]>([]);

  private loadTasks() {
    const tasksJson = localStorage.getItem("tasks");

    if (tasksJson) {
      const tasks = JSON.parse(tasksJson);
      this.tasksSubject.next(tasks);
    }
  }

  getTasks(): Observable<ITask[]> {
    return this.tasksSubject.asObservable();
  }

  createTask(task: string) {
    const tasksJson = localStorage.getItem("tasks");
    let tasks: ITask[] = [];

    if (tasksJson) {
      tasks = JSON.parse(tasksJson);
    }

    tasks.push({
      task,
      completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.tasksSubject.next(tasks);
  }

  changeTaskStatus(taskIndex:number){
    const tasksJson = localStorage.getItem("tasks") as string;
    const tasks : ITask[] = JSON.parse(tasksJson);

    tasks[taskIndex].completed = !tasks[taskIndex].completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    this.tasksSubject.next(tasks);
  }

  deleteTask(taskIndex:number){
    const tasksJson = localStorage.getItem("tasks") as string;
    const tasks : ITask[] = JSON.parse(tasksJson);

    const filteredTasks = tasks.filter((_, index) => index !== taskIndex);

    localStorage.setItem("tasks", JSON.stringify(filteredTasks));

    this.tasksSubject.next(filteredTasks);
  }

}
