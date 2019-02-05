import { Component } from '@angular/core';
import { Marsupilami } from './marsupilami';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marsupilamiClient';
  currentUser: Marsupilami;
}
