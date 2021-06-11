import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    id: 2,
    text: 'Default text',
    day: 'Default day',
    reminder: true,
  };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    // console.log(task);
    this.onDeleteTask.emit(task);
  }

}
