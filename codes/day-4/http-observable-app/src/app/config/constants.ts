import { InjectionToken } from "@angular/core";
import { ServiceContract } from "../services/service-contract";
import { TodoService } from "../services/todo-service";
import { Todo } from "../models/todo";

export const TOKEN = new InjectionToken<ServiceContract<Todo>>('TOKEN')
export const SERVICE = TodoService
export const TODO_API_URL = 'https://jsonplaceholder.typicode.com/todos'