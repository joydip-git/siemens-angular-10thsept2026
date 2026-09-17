import { inject } from "@angular/core";
import { Product } from "../models/product";
import { ServiceContract } from "./service-contract";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "../models/apiresponse";
import { PRODUCT_API_URL } from "../../../config/constants";
import { Observable } from "rxjs";

export class ProductService implements ServiceContract {
    private http = inject(HttpClient)

    get(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
    }
    add(p: Product): Observable<ApiResponse<Product[]>> {
        throw new Error("Method not implemented.");
    }
    update(id: number, p: Product): Observable<ApiResponse<Product[]>> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Observable<ApiResponse<Product[]>> {
        throw new Error("Method not implemented.");
    }
    getAll() {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}