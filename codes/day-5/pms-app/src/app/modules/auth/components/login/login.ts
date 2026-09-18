import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  // username = new FormControl()
  // password = new FormControl()
  // submit(e: Event) {
  //   e.preventDefault()
  //   console.log(this.username.value);
  //   console.log(this.password.value);
  // }

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  submit() {
    console.log(this.loginForm.value);
  }
}
