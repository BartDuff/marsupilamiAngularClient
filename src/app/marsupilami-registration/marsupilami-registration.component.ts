import { Component, OnInit } from '@angular/core';
import { Marsupilami } from '../marsupilami';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarsupilamiService } from '../marsupilami.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-marsupilami-registration',
  templateUrl: './marsupilami-registration.component.html',
  styleUrls: ['./marsupilami-registration.component.css']
})
export class MarsupilamiRegistrationComponent implements OnInit {
  marsupilami: Marsupilami;
  marsuForm: FormGroup;
  currentUser: Marsupilami;

  constructor(public marsupilamiService: MarsupilamiService,
    public authenticationService: AuthenticationService,
    public friendService: FriendService,
    private formBuilder: FormBuilder,
    private route: Router) { }

  ngOnInit() {
    this.initializeForm();
    this.authenticationService.isCurrentUser.subscribe((data) => {
      this.currentUser = data;
    });
    this.authenticationService.emitCredentials();
  }

  initializeForm() {
    this.marsuForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
      date_naissance: ['', Validators.required],
      famille: ['', Validators.required],
      race: ['', Validators.required],
      nourriture: ['', Validators.required],
    });
  }
  addMarsupilami() {
    const formValues = this.marsuForm.value;
    this.marsupilami = new Marsupilami();
    this.marsupilami.login = formValues.login;
    this.marsupilami.mdp = formValues.mdp;
    this.marsupilami.date_naissance = formValues.date_naissance;
    this.marsupilami.famille = formValues.famille;
    this.marsupilami.race = formValues.race;
    this.marsupilami.nourriture = formValues.nourriture;
    this.marsupilami.friend_ids = [];
    this.marsupilamiService.addMarsupilami(this.marsupilami).subscribe((newUser) => {
      const credentials = {
        login: this.marsupilami.login,
        mdp: this.marsupilami.mdp
      };
      if (this.currentUser) {
        this.friendService.addFriend(newUser).subscribe(() => {
          this.authenticationService.emitCredentials();
        });
        this.route.navigate(['marsupilamis']);
      } else {
        this.authenticationService.login(credentials).subscribe((result) => {
          this.marsupilami = result;
          this.authenticationService.currentUser = this.marsupilami;
          this.authenticationService.emitCredentials();
          this.route.navigate(['marsupilamis']);
        });
      }
    });
  }
}
