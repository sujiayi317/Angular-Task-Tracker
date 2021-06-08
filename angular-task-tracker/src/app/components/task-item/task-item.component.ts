import { Component, OnInit, Input } from '@angular/core';
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
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
