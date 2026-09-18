import { Component, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { products } from '../../repository/products';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { Product } from '../../models/product';
import { TOKEN } from '../../../../config/constants';
import { ServiceContract } from '../../services/service-contract';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  imports: [UpperCasePipe, CurrencyPipe, ProductFilterPipe, RouterLink],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit, OnDestroy {
  //cosnume the product service
  filterText = input('')
  productRecords = signal<Product[]>([])
  isRequestOver = signal(false)
  errorInfo = signal('')
  private fetchSubscription?: Subscription;
  private ps: ServiceContract = inject(TOKEN)

  ngOnInit(): void {
    this.fetchProducts()
  }
  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }

  fetchProducts() {
    this.fetchSubscription = this.ps.getAll().subscribe({
      next: (apiResponse) => {
        if (apiResponse.data !== null) {
          this.productRecords.set(apiResponse.data)
          this.isRequestOver.set(true)
          this.errorInfo.set('')
        } else {
          this.productRecords.set([])
          this.isRequestOver.set(true)
          this.errorInfo.set(apiResponse.message)
        }
      },
      error: (err) => {
        this.productRecords.set([])
        this.isRequestOver.set(true)
        this.errorInfo.set(err.message)
      }
    })
  }
}
