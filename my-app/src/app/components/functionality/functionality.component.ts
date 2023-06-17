import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FunctionalitiesService } from 'src/app/services/functionalities.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-functionality',
  templateUrl: './functionality.component.html',
  styleUrls: ['./functionality.component.scss']
})
export class FunctionalityComponent implements OnInit {

  funcID: number = 0;

  functionalityForm = {
    description: "something"
  }

  @ViewChild('myForm')
  form!: NgForm;

  onSubmit(){
    console.log(this.form);
    let originalFunc = this.funcService.getFunctionalityById(this.funcID);
    originalFunc.description = this.functionalityForm.description
    this.funcService.updateFunctionality(originalFunc, this.funcID)
    this.form.reset();
  }

  constructor(public funcService: FunctionalitiesService, private tasksService: TasksService, private route: ActivatedRoute){
  }

  ngOnInit():void {
    this.funcID = this.route.snapshot.params['id'];
    let functionality = this.funcService.getFunctionalityById(this.funcID)
    this.functionalityForm.description = functionality!.description;
  }
}