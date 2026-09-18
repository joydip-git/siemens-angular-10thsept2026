import { Component, inject, OnDestroy, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPassword } from '../../validators/custompassword-validator';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth-service';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../../../shared/services/token-storage-service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnDestroy {

  // username = new FormControl()
  // password = new FormControl()
  // submit(e: Event) {
  //   e.preventDefault()
  //   console.log(this.username.value);
  //   console.log(this.password.value);
  // }

  private authSvcRef = inject(AuthService)
  private tokenStoreSvcRef = inject(TokenStorageService)
  private router = inject(Router)
  private currentRoute = inject(ActivatedRoute)

  private loginSubscription?: Subscription;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, customPassword])
  })
  submit() {
    const user = this.loginForm.value as User
    this.authSvcRef.login(user).subscribe({
      next: (response) => {
        if (response.data !== null) {
          console.log(response.data);
          this.tokenStoreSvcRef.saveToken(response.data)
        } else {
          window.alert(response.message)
        }
      },
      error: (err) => {
        window.alert(err.message)
      },
      complete: () => {
        const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
        const returnUrl = snapshot.queryParams['returnUrl']
        if (returnUrl) {
          this.router.navigate([returnUrl])
        } else
          this.router.navigate(['/products'])
      }
    })
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }
  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
}
