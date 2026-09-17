import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductStorage } from '../../services/product-storage';

@Component({
  imports: [],
  selector: 'app-edit-product',
  styleUrl: './edit-product.css',
  templateUrl: './edit-product.html',
})
export class EditProduct implements OnInit {
  product = signal<Product | undefined>(undefined);
  private storageService = inject(ProductStorage)

  ngOnInit(): void {
    const store = this.storageService.getStore()
    const p = store()
    if (!p) {
      
    }
  }
}
