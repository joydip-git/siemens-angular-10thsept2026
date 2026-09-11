import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-another',
  styleUrl: './another.css',
  templateUrl: './another.html',
})
export class Another {
  title = signal<string>('Nested Component')
  txtWidth = 400

  // updateTitle(value: string) {
  //   //this.title = value
  //   this.title.set(value)
  // }
  
  // updateTitle(e: InputEvent) {
  //   const element = e.target as HTMLInputElement
  //   this.title = element.value
  // }
}
