import { IUser, User } from './../../core/models/user.model';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: IUser = new User();

  private authStatusSubscription: Subscription = new Subscription();
  private isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authStatusSubscription = this.authService.getAuthStatus.subscribe(
      (status) => (this.isLoggedIn = status)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.login(this.user.name, this.user.password);

    if (this.isLoggedIn) {
      this.router.navigateByUrl('/campaigns/list');
    }
  }

  ngOnDestroy() {
    this.authStatusSubscription.unsubscribe();
  }
}
