import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Moneytolia';

  constructor() {
    localStorage.setItem('username', 'admin');
    localStorage.setItem('password', '123123');
  }
}
