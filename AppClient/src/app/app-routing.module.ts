import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTaskComponent } from './tasks/basic-task/basic-task.component';
import { DashboardComponent } from './tasks/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'task/:taskID', component: BasicTaskComponent },
  { path: 'dashboard', component: DashboardComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
