import { inject } from "@angular/core";
import { Product } from "../models/product";
import { ServiceContract } from "./service-contract";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "../models/apiresponse";
import { PRODUCT_API_URL } from "../../../config/constants";

export class ProductService implements ServiceContract {
    private http = inject(HttpClient)
    getAll() {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}