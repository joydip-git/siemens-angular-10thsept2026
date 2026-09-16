import { Component, signal } from '@angular/core';
import { App } from '../app/app';

@Component({
  imports: [App],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {
  show = signal(false)
  data = signal(new Date())
}
