import { MaterialComponentsModule } from '@/app/modules/material-components/material-components.module';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '@models/task';

@Component({
  selector: 'taskly-task',
  imports: [MaterialComponentsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.sass'
})
export class TaskComponent {
  tasks: Task[] = [];
  t: Task = new Task('example task');

  task = {
    title: ""
  }

  /**
   * The ngOnInit function pushes a task onto an array of tasks.
   */
  ngOnInit(): void {
    this.tasks.push(this.t);
  }

  /* The `addTask` method in the `TaskComponent` class is a function that adds a new task to the
  `tasks` array. It creates a new `Task` object with the title taken from the `task` object in the
  component, trims any leading or trailing whitespace from the title, converts it to lowercase, and
  then pushes this new task object into the `tasks` array. Finally, it resets the form using
  `taskForm.resetForm()` to clear the input field after adding the task. */
  addTask(taskForm: NgForm): void {
    this.tasks.push(new Task(this.task.title.trim().toLowerCase()));
    taskForm.resetForm()
  }

  /* The `deleteTask(index: number): void` method in the `TaskComponent` class is a function that
  removes a task from the `tasks` array based on the index provided. */
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
