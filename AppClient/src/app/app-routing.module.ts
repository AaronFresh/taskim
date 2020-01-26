import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTaskComponent } from './tasks/basic-task/basic-task.component';

const routes: Routes = [
  { path: 'task/:taskID', component: BasicTaskComponent }
 // { path: '',      component:  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
