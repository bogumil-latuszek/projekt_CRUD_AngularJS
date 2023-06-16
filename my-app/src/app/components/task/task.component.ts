import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(private tasksService: TasksService, private route: ActivatedRoute){
  }

  ngOnInit():void {
    this.taskId = this.route.snapshot.params['id'];
    this.task = this.tasksService.tasks.find(x => x.id == this.taskId)
  }
}
