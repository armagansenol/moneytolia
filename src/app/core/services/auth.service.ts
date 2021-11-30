import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);
  getAuthStatus = this.authStatus.asObservable();

  constructor() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.setAuthStatus();
    }
  }

  login(username: string, password: string) {
    const loggedUsername = localStorage.getItem('username');
    const loggedPw = localStorage.getItem('password');

    if (username === loggedUsername && password === loggedPw) {
      this.setAuthStatus();
    }
  }

  setAuthStatus() {
    this.authStatus.next(true);
    localStorage.setItem('isLoggedIn', JSON.stringify(this.authStatus.value));
  }
}
