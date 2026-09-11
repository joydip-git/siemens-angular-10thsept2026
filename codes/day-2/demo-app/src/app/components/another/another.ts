//import { NgForOf,NgIf } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  //imports: [NgForOf,NgIf],
  selector: 'app-another',
  styleUrl: './another.css',
  templateUrl: './another.html'
})
export class Another {
  title = signal<string>('Nested Component')
  txtWidth = 400
  //names: WritableSignal<string[]> = signal<string[]>([])
  names = ['anil', 'sunil', 'joy']
  people = signal([{ id: 1, name: 'anil' }, { id: 2, name: 'sunil' }])
  // updateTitle(value: string) {
  //   //this.title = value
  //   this.title.set(value)
  // }

  // updateTitle(e: InputEvent) {
  //   const element = e.target as HTMLInputElement
  //   this.title = element.value
  // }
}
