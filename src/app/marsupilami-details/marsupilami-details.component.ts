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
  friendable: boolean;
  unfriendable: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private marsupilamiService: MarsupilamiService,
    private friendService: FriendService) { }

  ngOnInit() {
    this.userSubscription = this.authService.isCurrentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
    this.getMarsuDetails();
    this.authService.emitCredentials();
  }

  getMarsuDetails() {
    this.route.params.subscribe(
      params => this.marsupilamiService.getMarsupilami(params['id']).subscribe(
        (data) => {
          this.marsupilami = data;
          if (this.marsupilami._id === this.currentUser._id || this.currentUser.friend_ids.includes(this.marsupilami._id)) {
            this.friendable = false;
            if (this.marsupilami._id !== this.currentUser._id) {
              this.unfriendable = true;
            } else {
              this.unfriendable = false;
            }
          } else {
              this.friendable = true;
              this.unfriendable = false;
            }
        })
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
