import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductStorageService } from '../../services/product-storage-service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TOKEN } from '../../../../config/constants';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-edit-product',
  styleUrl: './edit-product.css',
  templateUrl: './edit-product.html',
})
export class EditProduct implements OnInit {
  product = signal<Product | undefined>(undefined);
  private storageService = inject(ProductStorageService)
  private ps = inject(TOKEN)
  private builder = inject(FormBuilder)
  private router = inject(Router)
  editForm?: FormGroup;

  ngOnInit(): void {
    const store = this.storageService.store
    const p = store()
    if (p) {
      this.product.set(store())
      this.editForm = this.builder.group({
        productId: [p.productId],
        productName: [p.productName],
        productCode: [p.productCode],
        description: [p.description],
        price: [p.price],
        releaseDate: [p.releaseDate],
        starRating: [p.starRating],
        imageUrl: [p.imageUrl]
      })
    }
  }
  submit() {
    if (window.confirm('update?')) {
      const p = this.editForm?.value as Product
      if (p) {
        this.ps.update(p.productId, p)
          .subscribe({
            next: (response) => {
              if (response.data !== null) {
                window.alert(response.message)
              } else {
                window.alert('update failed: ' + response.message)
              }
            },
            error: (err) => {
              window.alert('update failed: ' + err.message)
            },
            complete: () => {
              this.router.navigate(['/products'])
            }
          })
      }
    }
  }
}
