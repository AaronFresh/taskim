import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.=scss']
})
export class DashboardComponent implements OnInit {

tache1:string =" task-1" ;
descriptionTache1:string="faire une premiere tache ...."
tache2:string =" task-2" ;
descriptionTache2:string="faire une deuxieme tache ...."

  constructor() { }

  ngOnInit() {
  }

}
