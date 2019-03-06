import { Component, OnInit } from '@angular/core';
import { MarsupilamiService } from '../marsupilami.service';
import { Observable } from 'rxjs';
import { Marsupilami } from '../marsupilami';
import { NourritureService } from '../nourriture.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  marsupilamis: Observable<Marsupilami[]>;
  nourritures: Observable<string[]>;
  showCheckboxes = false;
  checkedItems: Marsupilami[] = [];
  constructor(private marsupilamiService: MarsupilamiService,
    private nourritureService: NourritureService) { }

  ngOnInit() {
    this.getMarsupilamis();
    this.getNourritures();
  }

  getMarsupilamis(): any {
    this.marsupilamis = this.marsupilamiService.getMarsupilamis();
  }
  saveMarsupilami(m: Marsupilami) {
    this.marsupilamiService.editMarsupilami(m).subscribe(() => {});
  }
  getNourritures(): any {
    this.nourritures = this.nourritureService.getNourritures();
  }
  s (ss) {
    return JSON.stringify(ss, null, 4);
  }
  updateBatch(n: string) {
  this.checkedItems.forEach(m => {
    m.nourriture = n;
    this.saveMarsupilami(m);
      });
    }
//  selectAll (s: boolean) {

//     this.marsupilamis.subscribe(
//       mm => mm.forEach(m => this.checkedItems.push(m))
//    );

//   }

    // for (let m of selectedItems) {
    //   m.nourriture=newNourr.value;
    //   saveMarsupilami(m);
    // })
    //


}
