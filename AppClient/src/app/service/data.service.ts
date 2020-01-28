import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks:any[]=[];
  task:any;

  constructor() {
    this.getTasks();
   }

   saveTasks() {
    firebase.database().ref('').set(this.tasks);
}

  getTasks() {
    firebase.database().ref('')
      .on('value', (data) => {
          this.tasks = data.val() ? data.val() : [];
          
        }
      );
  }

  getSingleTask(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('' + id).once('value').then(
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
  }


}
