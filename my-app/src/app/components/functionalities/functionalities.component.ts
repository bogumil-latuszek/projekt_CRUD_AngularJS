import { Component } from '@angular/core';
import { FunctionalitiesService } from 'src/app/services/functionalities.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.scss']
})
export class FunctionalitiesComponent {
  public functionalities: any[] = []

  constructor(public funcService: FunctionalitiesService, public tasksService: TasksService){
  }

  ngOnInit(): void {
    this.functionalities = this.funcService.functionalities;
  }

  public ToggleDisplay(element:any){
    if(element.style.display != 'none'){
      element.style.display="none";
    }
    else{
      element.style.display="block";
    }
  }
}
