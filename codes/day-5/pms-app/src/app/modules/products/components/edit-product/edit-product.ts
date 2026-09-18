import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductStorageService } from '../../services/product-storage-service';

@Component({
  imports: [],
  selector: 'app-edit-product',
  styleUrl: './edit-product.css',
  templateUrl: './edit-product.html',
})
export class EditProduct implements OnInit {
  product = signal<Product | undefined>(undefined);
  private storageService = inject(ProductStorageService)

  ngOnInit(): void {
    const store = this.storageService.store
    const p = store()
    if (p) {
      this.product.set(store())
    }
  }
}
