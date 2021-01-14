import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  // tslint:disable-next-line:typedef
  setClasses(){
    const classes = {
      todo: true,
      'is-complete': this.todo?.completed
    };
    return classes;
  }

  // tslint:disable-next-line:typedef
  onToggle(todo: { completed: boolean; }){
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle on server
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  // tslint:disable-next-line:typedef
  onDelete(todo: Todo | undefined){
    this.deleteTodo.emit(todo);
  }
}
