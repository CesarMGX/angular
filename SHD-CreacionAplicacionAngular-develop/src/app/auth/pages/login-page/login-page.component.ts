import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  
  loginForm!: FormGroup;
  loginFailed = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    this.authService.login('example@gmail.com','12345')  //usuario de ejemplo, lo cambian al que va a ser por defecto
    .subscribe(user => {
      this.router.navigate(['/'])
    });
  }



  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === '123') {
        this.loginFailed = false;
        this.router.navigate(['/games/home']);
      } else {
        this.loginFailed = true;
      }
    }
  }
}
