import { Component, inject, input, signal } from '@angular/core';
import { products } from '../../repository/products';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { Product } from '../../models/product';
import { TOKEN } from '../../../../config/constants';
import { ServiceContract } from '../../services/service-contract';

@Component({
  imports: [UpperCasePipe, CurrencyPipe, ProductFilterPipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  //cosnume the product service
  filterText = input('')
  productRecords = signal<Product[]>([])
  private ps: ServiceContract = inject(TOKEN)

  constructor() {
    //this.productRecords.set(this.ps.getAll())
  }
}
