import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Marsupilami } from '../marsupilami';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: Marsupilami;
  isAuth: boolean;


  constructor(private authService: AuthenticationService,
    private router: Router) {}

  ngOnInit() {
    this.getLogginStatus();
    this.getCurrentUser();
  }

  getLogginStatus() {
    this.authService.isAuthChange.subscribe((value) => {
      this.isAuth = value;
    });
  }

  getCurrentUser() {
    this.authService.isCurrentUser.subscribe((value) => {
      this.currentUser = value;
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
