import { Component, OnInit } from '@angular/core';
import { Marsupilami } from '../marsupilami';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarsupilamiService } from '../marsupilami.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marsupilami-edit',
  templateUrl: './marsupilami-edit.component.html',
  styleUrls: ['./marsupilami-edit.component.css']
})
export class MarsupilamiEditComponent implements OnInit {
  marsupilami: Marsupilami;
  marsupilami_id: any;
  marsuForm: FormGroup;

  constructor(public marsupilamiService: MarsupilamiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initializeForm();
    this.getMarsupilamisDetails();
  }
  getMarsupilamisDetails(): any {
    this.route.params.subscribe(
      params => this.marsupilamiService.getMarsupilami(params['id']).subscribe(
        (data) => {
          this.marsupilami_id = data._id;
          this.marsuForm.controls['login'].setValue(data.login);
          this.marsuForm.controls['mdp'].setValue(data.mdp);
          this.marsuForm.controls['famille'].setValue(data.famille);
          this.marsuForm.controls['date_naissance'].setValue(data.date_naissance);
          this.marsuForm.controls['race'].setValue(data.race);
          this.marsuForm.controls['nourriture'].setValue(data.nourriture);
        }
      ));
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
  editMarsupilami() {
    const formValues = this.marsuForm.value;
    this.marsupilami = new Marsupilami();
    this.marsupilami._id = this.marsupilami_id;
    this.marsupilami.login = formValues.login;
    this.marsupilami.mdp = formValues.mdp;
    this.marsupilami.date_naissance = formValues.date_naissance;
    this.marsupilami.famille = formValues.famille;
    this.marsupilami.race = formValues.race;
    this.marsupilami.nourriture = formValues.nourriture;
    this.marsupilamiService.editMarsupilami(this.marsupilami).subscribe(() => {
        this.router.navigate(['marsupilamis']);
    });
  }
}
