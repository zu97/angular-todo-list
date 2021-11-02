import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() text = '';
  @Output() newText = new EventEmitter();
  @Output() delete = new EventEmitter();

  changeText(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.newText.emit(target.value);
  }

  deleteTask() {
    this.delete.emit();
  }
}
