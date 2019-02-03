import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Marsupilami } from '../marsupilami';
import { MarsupilamiService } from '../marsupilami.service';

@Component({
  selector: 'app-marsupilami-list',
  templateUrl: './marsupilami-list.component.html',
  styleUrls: ['./marsupilami-list.component.css']
})
export class MarsupilamiListComponent implements OnInit {
  marsupilamis: Observable<Marsupilami[]>;
  constructor(private marsupilamiService: MarsupilamiService) { }

  ngOnInit() {
    this.getMarsupilamis();
  }
  getMarsupilamis(): any {
    this.marsupilamis = this.marsupilamiService.getMarsupilamis();
  }

}
