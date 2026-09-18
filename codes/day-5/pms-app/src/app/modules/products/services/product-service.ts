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
        return this.http.post<ApiResponse<Product[]>>(PRODUCT_API_URL, p)
    }
    update(id: number, p: Product): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`, p)
    }
    delete(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`)
    }
    getAll() {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}