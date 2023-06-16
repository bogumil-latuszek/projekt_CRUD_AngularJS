/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
*/
export class TasksService {
    tasks=[
      {description:"fix issue #1", functionality:1, status:"todo", id:0},
      {description:"fix issue #4", functionality:2, status:"done", id:3},
      {description:"fix issue #5", functionality:2, status:"todo", id:4},
      {description:"add unit tests to class #d4s5", functionality:1, status:"doing", id:1},
      {description:"fix issue #2", functionality:1, status:"done", id:2}
    ]

    highestID: number = 4

    public getTasksForFunctionality(Functionality: number){
      return this.tasks.filter((task)=>{ return task.functionality == Functionality})
    }

    public getTaskById(ID: number){
      let foundTask = {description:"fix issue #1", functionality:1, status:"todo", id:0};
      this.tasks.forEach(task => {
        if(task.id == ID){
          foundTask = task;
        }
      });
      return foundTask;
    }
    public addTask(Task: any){
      this.highestID+=1;
      Task.id = this.highestID;
      this.tasks.push(Task);
      return Task.id;
    }
    public updateTask(Task: any, ID: number){
      this.tasks.forEach(task => {
        if(task.id == ID){
          task = Task
          return;
        }
      });
      return;
    }
    public deleteTask (ID: number){
      let reducedTasks: any[] = []
      this.tasks.forEach(task => {
        if(task.id != ID){
          reducedTasks.push(task);
        }
      });
      this.tasks = reducedTasks;
    }
}
