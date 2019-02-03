import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Marsupilami } from '../marsupilami';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: Observable<Marsupilami[]>;
  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.getFriends();
  }
  getFriends(): any {
    this.friends = this.friendService.getFriends();
  }
}
