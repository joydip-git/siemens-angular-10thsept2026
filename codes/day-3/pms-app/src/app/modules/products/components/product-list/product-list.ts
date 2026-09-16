import { Component, input, signal } from '@angular/core';
import { products } from '../../repository/products';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';

@Component({
  imports: [UpperCasePipe, CurrencyPipe, ProductFilterPipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  filterText = input('')
  productRecords = signal(products)
}
