import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FunctionalityComponent } from './components/functionality/functionality.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksService } from './services/tasks.service';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalitiesComponent } from './components/functionalities/functionalities.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { FunctionalitiesService } from './services/functionalities.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes =[
  {path: 'Tasks', component: TasksComponent},
  {path: 'Functionalities', component: FunctionalitiesComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Task/:id', component:TaskComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FunctionalityComponent,
    TasksComponent,
    FunctionalitiesComponent,
    HomeComponent,
    TaskComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TasksService, FunctionalitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
