import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Task } from '../Models/Task';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks:Task[]=[];
  task:Task;
  tasksSubject = new Subject<Task[]>();

  emitTasks() {
    this.tasksSubject.next(this.tasks);
  }

  constructor() {
    this.getTasks();
   }

   saveTasks() {
    let ref = firebase.database().ref('/tasks').set(this.tasks, ()=> {
      this.getTasks();

    });
}

  getTasks() {
    firebase.database().ref('/tasks')
      .on('value', (data) => {
          this.tasks = data.val() ? data.val() : [];
          this.emitTasks();
        }
      );
  }

  getSingleTask(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('https://tasks/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  CreateNewTask(newTask:any){
      this.tasks.push(newTask);
      this.saveTasks();
      this.emitTasks();
  }


}
