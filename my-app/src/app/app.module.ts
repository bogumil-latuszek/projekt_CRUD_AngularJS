import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FunctionalityComponent } from './components/functionality/functionality.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksService } from './services/tasks.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  {path: 'Tasks', component: TasksComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    FunctionalityComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
