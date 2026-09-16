import { Component, signal } from '@angular/core';
import { Nested } from '../nested/nested';
import { User } from '../../models/user';

@Component({
  selector: 'app-root',
  imports: [Nested],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userData: User = { username: "joydip" }
  updateTitle(newUser: User) {
    this.userData = newUser
  }
}
