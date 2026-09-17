import { Observable } from "rxjs";
import { Product } from "../models/product";
import { ApiResponse } from "../models/apiresponse";

export interface ServiceContract {
    getAll(): Observable<ApiResponse<Product[]>>;
}