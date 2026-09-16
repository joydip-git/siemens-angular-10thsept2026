import { Product } from "../models/product";
import { products } from "../repository/products";
import { ServiceContract } from "./service-contract";

export class ProductService implements ServiceContract {
    getAll(): Product[] {
        return [...products]
    }
}