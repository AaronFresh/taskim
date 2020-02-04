import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/Task';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
  //,styleUrls: ['./dashboard.component.=scss']
})
export class DashboardComponent implements OnInit {

tache1:string =" task-1" ;
descriptionTache1:string="faire une premiere tache ...."
tache2:string =" task-2" ;
descriptionTache2:string="faire une deuxieme tache ...."

task:Task;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.task = new Task("","");
  }
  
newTask(){
  this.task = new Task("Tache 1","bla bla")
  this.dataService.CreateNewTask(this.task);
}

}
