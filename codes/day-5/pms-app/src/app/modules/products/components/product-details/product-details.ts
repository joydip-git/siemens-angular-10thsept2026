import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { ServiceContract } from '../../services/service-contract';
import { TOKEN } from '../../../../config/constants';
import { ProductStorageService } from '../../services/product-storage-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit, OnDestroy {

  product = signal<Product | undefined>(undefined)
  isRequestOver = signal(false)
  errorInfo = signal('')

  private currentRoute = inject(ActivatedRoute)
  private fetchSubscription?: Subscription;
  private ps: ServiceContract = inject(TOKEN)
  private router = inject(Router)
  private storageService = inject(ProductStorageService)

  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const params: Params = snapshot.params
    const id = Number(params["id"])
    this.fetchProduct(id);
  }

  goToEdit() {
    const p = this.product()
    if (p)
      this.storageService.save(p)

    this.router.navigate(['/products/edit'], {
      queryParams: { id: this.product()?.productId }
    })
  }

  fetchProduct(id: number) {
    this.fetchSubscription = this.ps.get(id).subscribe({
      next: (apiResponse) => {
        if (apiResponse.data !== null) {
          this.product.set(apiResponse.data)
          this.isRequestOver.set(true)
          this.errorInfo.set('')
        } else {
          this.product.set(undefined)
          this.isRequestOver.set(true)
          this.errorInfo.set(apiResponse.message)
        }
      },
      error: (err) => {
        this.product.set(undefined)
        this.isRequestOver.set(true)
        this.errorInfo.set(err.message)
      }
    })
  }
}
