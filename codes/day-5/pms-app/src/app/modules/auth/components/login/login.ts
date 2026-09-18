import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPassword } from '../../validators/custompassword-validator';

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
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, customPassword])
  })
  submit() {
    console.log(this.loginForm);
  }

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
}
