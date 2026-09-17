import { Service, signal } from '@angular/core';
import { Product } from '../models/product';

@Service()
//providers: [ProductStorage]
export class ProductStorage {
    private store = signal<Product | undefined>(undefined)

    save(p: Product) {
        this.store.set(p)
    }
    remove() {
        this.store.set(undefined)
    }
    getStore() {
        return this.store
    }
}
