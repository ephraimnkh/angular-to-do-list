import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  taskName = "";
  dueDate = "";
  taskStatus = "In Progress";
  taskDescription = "";
  completed = 0;

  newTask(){
    let task = {
      taskName : this.taskName,
      dueDate : this.dueDate,
      taskStatus : this.taskStatus,
      taskDescription : this.taskDescription
    }
    this.tasks.push(task);
    this.updateCompleted();
  }
  //Has outer for loop so that any leftover completed tasks are deleted this prevents one completed task being in the table after delete completed is clicked
  deleteCompleted() {
    for (let j = 0; j < this.completed; j++){
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].taskStatus == "Complete")
          this.tasks.splice(i, 1);
      }
    }
    this.completed = 0;
  }

  deleteTask(index){
    this.tasks.splice(index, 1);  
    this.updateCompleted();  
  }
  //used to update the counter everytime the array is interacted with through adding or deleting
  updateCompleted() {
    let counter = 0;
    for (let i = 0; i < this.tasks.length; i++) {      
      if (this.tasks[i].taskStatus == "Complete")
        counter++;
    }
    this.completed = counter;
  }
}
