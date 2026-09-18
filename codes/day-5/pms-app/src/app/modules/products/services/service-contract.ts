import { Observable } from "rxjs";
import { Product } from "../models/product";
import { ApiResponse } from "../models/apiresponse";

export interface ServiceContract {
    getAll(): Observable<ApiResponse<Product[]>>;
    get(id: number): Observable<ApiResponse<Product>>;
    add(p: Product): Observable<ApiResponse<Product[]>>;
    update(id: number, p: Product): Observable<ApiResponse<Product[]>>;
    delete(id: number): Observable<ApiResponse<Product[]>>;
}