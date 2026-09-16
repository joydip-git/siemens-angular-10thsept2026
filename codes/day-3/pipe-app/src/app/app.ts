import { Component } from '@angular/core';
import { Person } from './models/person';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { SortPeoplePipe } from './pipes/sort-people.pipe';
import { Choice } from './models/choice';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, CurrencyPipe, SortPeoplePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  choices: Choice[] = []
  person = Object.create({
    id: 1,
    name: 'anil',
    salary: 1000,
    currency: 'INR',
  })

  people: Person[] = [
    {
      id: 2,
      name: 'anil',
      salary: 3000,
      currency: 'USD'
    },
    {
      id: 1,
      name: 'sunil',
      salary: 2000,
      currency: 'USD'
    },
    {
      id: 3,
      name: 'joydip',
      salary: 1000,
      currency: 'USD'
    }
  ]
  selectedOptionValue = 0;

  constructor() {
    let value = 1
    for (const propName in this.person) {
      const propValue = this.person[propName]
      this.choices.push({ text: propName, value: value })
      value++
    }
    console.log(this.choices);
  }
  getSelectedOption(e: Event) {
    const select = e.target as HTMLSelectElement;
    const options = select.options;
    const selectedOption = options[select.selectedIndex]
    this.selectedOptionValue = Number(selectedOption.value)
  }
}
