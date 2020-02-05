import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-task',
  templateUrl: './basic-task.component.html',
  styleUrls: ['./basic-task.component.scss']
})
export class BasicTaskComponent implements OnInit {

  @Input() title:string;
  @Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
