import { Component } from '@angular/core';
import { FunctionalityComponent } from '../functionality/functionality.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  private description: string;


  constructor(Descr: string){
    this.description = Descr;
  }
}
