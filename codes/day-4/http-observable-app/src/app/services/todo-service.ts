import { inject } from '@angular/core';
import { ServiceContract } from './service-contract';
import { HttpClient } from '@angular/common/http';
import { TODO_API_URL } from '../config/constants';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';


// @Service() == @Injectable({providedIn:'root'})
// providers:[{provide: TodoService, useClass: TodoService}]
// providers:[TodoService]

// @Injectable()
export class TodoService implements ServiceContract<Todo> {
    private http = inject(HttpClient)
    // constructor(private http: HttpClient) {

    // }

    getAll() {
        const obs: Observable<Todo[]> = this.http.get<Todo[]>(TODO_API_URL)
        return obs
    }
}
