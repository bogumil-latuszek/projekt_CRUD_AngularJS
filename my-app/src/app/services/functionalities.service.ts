/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})*/
export class FunctionalitiesService {
  functionalities=[
    {description:"user interface", id:0},
    {description:"database access", id:1},
    {description:"user authorization", id:2},
  ]

  highestID: number = 4

  public getFunctionalityById(ID: number){
    let foundFunc = {description:"fix issue #1", id :1};
    this.functionalities.forEach(Func => {
      if(Func.id == ID){
        foundFunc = Func;
      }
    });
    return foundFunc;
  }
  public addFunctionality(Func: any){
    this.highestID+=1;
    Func.id = this.highestID;
    this.functionalities.push(Func);
    return Func.id;
  }
  public updateFunctionality(Func: any, ID: number){
    this.functionalities.forEach(func => {
      if(func.id == ID){
        func = Func
        return;
      }
    });
    return;
  }
  public deleteFunctionality (ID: number){
    let reducedFunctionalities: any[] = []
    this.functionalities.forEach(Func => {
      if(Func.id != ID){
        reducedFunctionalities.push(Func);
      }
    });
    this.functionalities = reducedFunctionalities;
  }

}
