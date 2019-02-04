import { Component, OnInit } from '@angular/core';
import { Marsupilami } from '../marsupilami';
import { ActivatedRoute, Router } from '@angular/router';
import { MarsupilamiService } from '../marsupilami.service';
import { FriendService } from '../friend.service';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-marsupilami-details',
  templateUrl: './marsupilami-details.component.html',
  styleUrls: ['./marsupilami-details.component.css']
})
export class MarsupilamiDetailsComponent implements OnInit {
  userSubscription: Subscription;
  currentUser: Marsupilami;
  marsupilami: Marsupilami;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private marsupilamiService: MarsupilamiService,
    private friendService: FriendService) { }

  ngOnInit() {
    this.getMarsuDetails();
    this.userSubscription = this.authService.isCurrentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
    this.authService.emitCredentials();
  }

  getMarsuDetails() {
    this.route.params.subscribe(
      params => this.marsupilamiService.getMarsupilami(params['id']).subscribe(
        (data) => this.marsupilami = data
      )
    );
  }

  addFriend(marsupilami: any) {
    this.friendService.addFriend(marsupilami).subscribe(
      (data) => this.marsupilami = data
    );
    this.router.navigate(['amis']);
  }

  deleteFriend(marsupilami: any) {
    this.friendService.deleteFriend(marsupilami).subscribe(
      (data) => this.marsupilami = data
    );
    this.router.navigate(['amis']);
  }
}
