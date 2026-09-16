import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductContainer } from '../../../products/components/product-container/product-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pms-app');
}
