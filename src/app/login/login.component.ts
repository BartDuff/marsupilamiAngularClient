import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Marsupilami } from '../marsupilami';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarsupilamiService } from '../marsupilami.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuth: boolean;
  credentials: any;
  marsupilami: Marsupilami;
  marsuForm: FormGroup;

  constructor(public marsupilamiService: MarsupilamiService,
    public authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: Router) { }

  ngOnInit() {
    this.initializeForm();
    this.authenticationService.emitCredentials();
  }

  initializeForm() {
    this.marsuForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }

  login() {
    const formValues = this.marsuForm.value;
    this.credentials = {
    login: formValues.login,
    mdp: formValues.mdp
    };
    this.authenticationService.login(this.credentials).subscribe((result) => {
      this.marsupilami = result;
      this.authenticationService.currentUser = this.marsupilami;
      this.authenticationService.emitCredentials();
      this.route.navigate(['/marsupilamis']);
    });
  }

}
