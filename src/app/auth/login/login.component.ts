import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = 'centrum@gmail.com';
  password = 'asdasdasd';
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.email, this.password).subscribe(resp => {
      if (resp.status) {
        localStorage.setItem('jwt', resp.data.token);
        this.router.navigate(['/dashboard/products']);
      } else {
        this.error = 'Sikertelen bejelentkezés!';
      }

    });
  }

}
