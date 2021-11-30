import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  authStatusSubscription: Subscription = new Subscription();
  isAuth = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authStatusSubscription = this.authService.getAuthStatus.subscribe(
      (status) => {
        this.isAuth = status;
      }
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAuth) {
      this.router.navigateByUrl('/campaigns/list');
      return false;
    } else {
      return true;
    }
  }
}
