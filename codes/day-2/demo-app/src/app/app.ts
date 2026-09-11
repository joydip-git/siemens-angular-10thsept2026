import { Component } from "@angular/core";
import { Another } from "./components/another/another";

@Component({
  selector: 'app-root',
  // template: `<h2>
  //   Welcome to Angular 22
  //   </h2>`
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Another]
})
export class App {
  constructor() {
    console.log('App component instance created....');
  }
}