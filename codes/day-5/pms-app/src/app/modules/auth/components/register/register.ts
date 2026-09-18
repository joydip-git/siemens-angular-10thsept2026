import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  submit(frm: NgForm) {
    const formGroup: FormGroup = frm.form
    console.log(formGroup.value);
    //or
    const userNameCtrl = formGroup.controls["username"]
    const passwordCtrl = formGroup.controls["password"]
    console.log(userNameCtrl.value);
    console.log(passwordCtrl.value);
  }
}
