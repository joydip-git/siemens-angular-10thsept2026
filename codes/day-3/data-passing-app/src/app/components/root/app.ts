import { Component, signal } from '@angular/core';
import { Nested } from '../nested/nested';

@Component({
  selector: 'app-root',
  imports: [Nested],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "data from parent component"
  updateTitle(newTitle: string) {
    this.title = newTitle
  }
}
