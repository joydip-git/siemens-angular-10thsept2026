import { Component, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-filter-product',
  styleUrl: './filter-product.css',
  templateUrl: './filter-product.html',
})
export class FilterProduct {
  filterText = signal('')
  filterTextChanged = output<string>()

  emitFilterText(value: string) {
    this.filterTextChanged.emit(value)
  }
}
