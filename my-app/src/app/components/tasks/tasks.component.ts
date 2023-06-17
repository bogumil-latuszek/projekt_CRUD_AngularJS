import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionalitiesService } from 'src/app/services/functionalities.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit{

  public tasks: any[] = []

  constructor(public funcService: FunctionalitiesService, private router: Router, public tasksService: TasksService){
  }

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
  }

  AddTask(Status: string){
      let newID = this.tasksService.addTask({description:"default description", functionality:1, status: Status, id:0},)
      //this.router.navigate([`../task/${newID}`], { relativeTo: this.route });
      this.router.navigateByUrl(`/Task/${newID}`);
  }

  DeleteTask(ID: number){
    console.log(this.tasksService.tasks)
    this.tasksService.deleteTask(ID);
    console.log(this.tasksService.tasks)
}

}
