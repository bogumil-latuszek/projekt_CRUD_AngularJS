import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FunctionalitiesService } from 'src/app/services/functionalities.service';
import { TasksService } from 'src/app/services/tasks.service';
import { FunctionalityComponent } from '../functionality/functionality.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  task: any;
  taskId: number = 0;

  taskForm = {
    functionality: 0,
    status: 'todo',
    description: 'defaultDescrip'
  }
  //status: string="todo"
  //taskDescription:string ="sth";
  //associatedFunctionalityId:number=0;
  //defaultStatus="todo"
  //defaultFunctionality=1;

  @ViewChild('myForm')
  form!: NgForm;

  onSubmit(){
    console.log(this.form);
    let originalTask = this.tasksService.getTaskById(this.taskId);
    originalTask.description = this.taskForm.description
    originalTask.status = this.taskForm.status
    originalTask.functionality = this.taskForm.functionality
    this.tasksService.updateTask(originalTask, this.taskId)
    this.form.reset();
  }

  constructor(public funcService: FunctionalitiesService, private tasksService: TasksService, private route: ActivatedRoute){
  }

  ngOnInit():void {
    this.taskId = this.route.snapshot.params['id'];
    this.task = this.tasksService.tasks.find(x => x.id == this.taskId)

    this.taskForm.description = this.task.description
    this.taskForm.status = this.task.status
    this.taskForm.functionality = this.task.functionality
  }
}
