import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() text = '';
  @Input() complete = false;
  @Output() newText = new EventEmitter();
  @Output() onComplete = new EventEmitter();
  @Output() delete = new EventEmitter();

  changeText(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.newText.emit(target.value);
  }

  deleteTask() {
    this.delete.emit();
  }

  changeComplete(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.onComplete.emit(target.checked);
  }
}
