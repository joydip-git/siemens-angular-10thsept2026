import { Observable } from "rxjs";

export interface ServiceContract<T> {
    getAll(): Observable<T[]>;
}