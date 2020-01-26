import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTaskComponent } from './basic-task/basic-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [BasicTaskComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
