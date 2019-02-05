import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
    private router: Router) { }

    canActivate() {
      this.authService.emitCredentials();
      if (this.authService.isAuth) {
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}

