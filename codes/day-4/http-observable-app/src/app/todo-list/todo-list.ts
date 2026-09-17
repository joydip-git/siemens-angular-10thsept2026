import { Component, Inject, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TOKEN } from '../config/constants';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../models/todo';
import { ServiceContract } from '../services/service-contract';

@Component({
  imports: [],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList implements OnInit, OnDestroy {

  //private todoSvcRef = inject(TOKEN)
  constructor(@Inject(TOKEN) private todoSvcRef: ServiceContract<Todo>) {

  }
  private fetchSubscription?: Subscription;
  todos = signal<Todo[]>([])
  isRequestOver = signal(false)
  errorInfo = signal('')
  enabled = false

  ngOnInit(): void {
    setTimeout(
      () => {
        console.log('in init');
        this.fetchTodos()
      },
      5000
    )
    console.log('fetching data');
  }
  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }
  fetchTodos() {
    const obs: Observable<Todo[]> = this.todoSvcRef.getAll()
    this.fetchSubscription =
      obs
        .subscribe({
          next: (response) => {
            this.todos.set(response.slice(0, 10))
            this.errorInfo.set('')
            this.isRequestOver.set(true)
          },
          error: (err) => {
            this.todos.set([])
            this.errorInfo.set(err.message)
            this.isRequestOver.set(true)
          },
          complete: () => {
            this.enabled = true
          }
        })
  }
}
