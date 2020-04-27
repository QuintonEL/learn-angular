import { Component } from '@angular/core';
import { Todo } from './todo';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('taskState', [
    state('inactive', style({opacity: 1, transform: 'translateX(0) scale(1)'})),
    state('active',   style({opacity: 1, transform: 'translateX(0) scale(1)'})),
    state('void',   style({opacity: 0, display: 'none', transform: 'translateX(0) scale(1)'})),
    transition('* => void', [
        animate('1s 8 ease-out', style({
            opacity: 0,
            transform: 'translateX(0) scale(0.5)'
        }))
    ])
  ])]
})
export class AppComponent {
  title = 'learn-angular';

  todoValue:string;
  list: Todo[];

  ngOnInit(){
    this.list = [];
    this.todoValue = '';
  }

  addItem(){
    if (this.todoValue !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }

  deleteItem(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
