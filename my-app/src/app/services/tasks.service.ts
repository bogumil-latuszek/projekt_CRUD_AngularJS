/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
*/
export class TasksService {
    tasks=[
      {description:"fix issue #1", functionality:"user interface", status:"to do", id:0},
      {description:"add unit tests to class #d4s5", functionality:"user interface", status:"doing", id:1},
      {description:"fix issue #2", functionality:"user interface", status:"done", id:2}
    ]
}
