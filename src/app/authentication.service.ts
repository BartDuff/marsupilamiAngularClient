import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Marsupilami } from './marsupilami';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuth;
  isAuthChange: Subject<boolean> = new Subject<boolean>();
  currentUser: Marsupilami;
  isCurrentUser: Subject<Marsupilami> = new Subject<Marsupilami>();

  private apiLogin = '/api/login';
  private apiLogout = '/api/logout';
  constructor(private http: HttpClient) {
    this.isAuthChange.subscribe((value) => {
      this.isAuth = value;
    });
    this.isCurrentUser.subscribe((value) => {
      this.currentUser = value;
    });
   }

  login(body: any): Observable<any> {
    this.isAuth = true;
    this.isAuthChange.next(this.isAuth);
    return this.http.post(`${this.apiLogin}`, body);
  }

  logout() {
    this.isAuth = false;
    this.isAuthChange.next(this.isAuth);
    this.isCurrentUser.next(null);
    return this.http.get(`${this.apiLogout}`);
  }
}
