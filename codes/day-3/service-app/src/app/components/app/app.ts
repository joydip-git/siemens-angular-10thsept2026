import { Component, computed, inject, input, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Person } from '../../models/person';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { SortPeoplePipe } from '../../pipes/sort-people.pipe';
import { Choice } from '../../models/choice';
import { ServiceContract } from '../../services/person-service';
import { TOKEN } from '../../config/constants';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, CurrencyPipe, SortPeoplePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy, OnInit, OnChanges {
  //@Input() dob = new Date();
  dob = input(new Date())
  age = 0;
  calcualatedAge = computed(() => (Date.now() - this.dob().getDate()) / 365)
  choices: Choice[] = []
  person = Object.create({
    id: 1,
    name: 'anil',
    salary: 1000,
    currency: 'INR',
  })

  people: Person[] = []
  selectedOptionValue = 0;
  private ps: ServiceContract = inject<ServiceContract>(TOKEN)

  constructor() {
    console.log('app created');
    let value = 1
    for (const propName in this.person) {
      const propValue = this.person[propName]
      this.choices.push({ text: propName, value: value })
      value++
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('app changes...');
    this.age = (Date.now() - this.dob().getDate()) / 365
    console.log(this.age);
    console.log('calcuated', this.calcualatedAge());
  }
  ngOnInit(): void {
    console.log('app init...');
    this.people = this.ps.getPeople()
  }
  ngOnDestroy(): void {
    console.log('App destroyed...');
  }

  getSelectedOption(e: Event) {
    const select = e.target as HTMLSelectElement;
    const options = select.options;
    const selectedOption = options[select.selectedIndex]
    this.selectedOptionValue = Number(selectedOption.value)
  }
}
