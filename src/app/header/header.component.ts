import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Marsupilami } from '../marsupilami';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authSubscription: Subscription;
  userSubscription: Subscription;
  currentUser: Marsupilami;
  isAuth: boolean;
  isAdmin: boolean;


  constructor(private authService: AuthenticationService,
    private router: Router) {}

  ngOnInit() {
    this.authSubscription = this.authService.isAuthChange.subscribe(
      (status) => {
        this.isAuth = status;

      }
    );
    this.authSubscription = this.authService.isAdminChange.subscribe(
      (status) => {
        this.isAdmin = status; }
    );

    this.userSubscription = this.authService.isCurrentUser.subscribe(
      (user) => {
        this.currentUser = user;
        if (this.currentUser && this.currentUser.isAdmin) {
          this.isAdmin = true;
        }
      }
    );
    this.authService.emitCredentials();
  }

  onLogout() {
    this.authService.logout().subscribe(
      () => this.authService.emitCredentials(),
      (err) => console.log(err),
      () => this.router.navigate(['/login']));
    }
}
