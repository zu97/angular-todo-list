import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework53';
  newTask = '';
  tasks = [
    {text: 'Buy milk', complete: false},
    {text: 'Walk with dog', complete: true},
    {text: 'Do homework', complete: false}
  ];

  changeTaskText(index: number, event: string) {
    this.tasks[index].text = event;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addNewTask() {
    this.tasks.push({text: this.newTask, complete: false});
    this.newTask = '';
  }

  changeTaskComplete(index: number, complete: boolean) {
    this.tasks[index].complete = complete;
  }
}
