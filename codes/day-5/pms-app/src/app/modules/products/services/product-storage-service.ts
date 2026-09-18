import { Service, signal } from '@angular/core';
import { Product } from '../models/product';

@Service()
//providers: [ProductStorageService]
export class ProductStorageService {
    private _store = signal<Product | undefined>(undefined)

    save(p: Product) {
        this._store.set(p)
    }
    remove() {
        this._store.set(undefined)
    }
    get store() {
        return this._store
    }
}
